function n(n,t){for(var r in t)n[r]=t[r];return n}function createStore(t){var r=[];function u(n){for(var t=[],u=0;u<r.length;u++)r[u]===n?n=null:t.push(r[u]);r=t;}function e(u,e,f){t=e?u:n(n({},t),u);for(var i=r,o=0;o<i.length;o++)i[o](t,f);}return t=t||{},{action:function(n){function r(t){e(t,!1,n);}return function(){for(var u=arguments,e=[t],f=0;f<arguments.length;f++)e.push(u[f]);var i=n.apply(this,e);if(null!=i)return i.then?i.then(r):r(i)}},setState:e,subscribe:function(n){return r.push(n),function(){u(n);}},unsubscribe:u,getState:function(){return t}}}

var devtools = function unistoreDevTools(store) {
	var extension = false;
	var ignoreState = false;

	if (!extension) {
		console.warn('Please install/enable Redux devtools extension');
		store.devtools = null;

		return store;
	}

	if (!store.devtools) {
		store.devtools = extension.connect();
		store.devtools.subscribe(function (message) {
			if (message.type === 'DISPATCH' && message.state) {
				ignoreState = (message.payload.type === 'JUMP_TO_ACTION' || message.payload.type === 'JUMP_TO_STATE');
				store.setState(JSON.parse(message.state), true);
			}
		});
		store.devtools.init(store.getState());
		store.subscribe(function (state, action) {
			var actionName = action && action.name || 'setState';

			if (!ignoreState) {
				store.devtools.send(actionName, state);
			} else {
				ignoreState = false;
			}
		});
	}

	return store;
};

/**
 * @param {string} name of meta tag to read
 * @return {?string} value or null for no node
 */
function getMeta(name) {
  // This doesn't just check <head>, as our partial generation might dump the
  // meta tag into the page content.
  const node = document.querySelector(`meta[name="${name}"]`);
  if (!node) {
    return null;
  }
  return node.getAttribute('content') || node.getAttribute('value');
}

/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Provides a helper for calculating relative time.
 */

/**
 * @param {?string} raw a date-like string
 * @return {number} the number of milliseconds we're pretending to be offset by
 */
function getTimeOffset(raw) {
  if (!raw) {
    return 0;
  }

  const overrides = {
    'wdl-day1': '2020-06-30T16:02Z',
    'wdl-preday2': '2020-07-01T10:59Z', // before 1hr buffer
    'wdl-day2': '2020-07-01T12:00Z',
    'wdl-day3': '2020-07-02T07:30Z',
  };

  raw = overrides[raw] || raw;

  const d = new Date(raw);
  if (+d) {
    const now = new Date();
    console.warn('debug time start at', d);
    return +d - +now;
  }
  return 0;
}

/**
 * @fileoverview Wraps access to `window.localStorage`, as Firefox throws a
 * SecurityError (or it is null) when it is not available.
 */

/**
 * @return {!Object<string, string>}
 */
function getLocalStorage() {
  let cand;
  try {
    cand = window.localStorage;
  } catch (e) {
    // ignore
  }
  return cand || {};
}

/**
 * Exports a safe version of localStorage.
 *
 * @type {!Object<string, string>}
 */
const localStorage = getLocalStorage();

var isProd = false;

const initialParams = new URLSearchParams(window.location.search);
const timeOffset = getTimeOffset(initialParams.get('_now'));

const initialState = {
  // The first time the app boots we won't know whether the user is signed
  // in or out.
  // While we check, we should put things into an indeterminate state so we
  // don't render incorrect UI.
  checkingSignedInState: true,

  // The user has successfully signed in; default to cached value to help prevent FOUC
  isSignedIn: Boolean(localStorage['webdev_isSignedIn']),
  user: null,

  // The most recent URL measured and the Date when it was first analyzed by the user.
  userUrlSeen: null,
  userUrl: null, // null for unknown/not signed-in, "" for unset

  // Whether a fetch should be made for the user's URL.
  userUrlResultsPending: false,

  // The URL currently being run through Lighthouse.
  activeLighthouseUrl: null,

  // The most recent Lighthouse results.
  lighthouseResult: null,

  // The most recent error from the Lighthouse CI, if any.
  lighthouseError: null,

  currentUrl: window.location.pathname,
  currentLanguage: document.documentElement.getAttribute('lang'),
  isOffline: Boolean(getMeta('offline')),
  isNavigationDrawerOpen: false,
  isModalOpen: false,
  isSearchExpanded: false,

  // Whether to show the progressbar and mark the main content as busy, during a load.
  isPageLoading: false,

  // When a user lands on the page, check if they have accepted our
  // cookie policy.
  // We automatically accept cookies in dev and test environments so the cookie
  // banner doesn't interfere with tests.
  cookiePreference: 'accepts',

  // Handle hiding/showing the snackbar.
  showingSnackbar: false,
  snackbarType: null,

  // Used to override the current time for web.dev/LIVE testing.
  timeOffset,

  // Data for the current web.dev/LIVE event.
  eventDays: [],
  activeEventDay: null, // livestream shown for this day
  g4ScriptLoaded: false,
};

let store;
{
  store = devtools(createStore(initialState));
}

// export const LH_HOST = "https://lighthouse-dot-webdotdevsite.appspot.com";
const LH_HOST = 'https://lighthouse-dot-webdotdevsite.appspot.com/';

/**
 * Requests recent Lighthouse reports for the given URL. Without a valid startDate, this may only
 * return a single report—the startDate should be drawn from a signed-in user's first scan of their
 * desired URL.
 *
 * @param {string} url to request reports for
 * @param {?Date=} startDate when reports should start from
 * @return {Promise<Array<Object>>} recent runs
 */
async function fetchReports(url, startDate = null) {
  const testUrl = window.encodeURIComponent(url);

  let endpointUrl = `${LH_HOST}/lh/reports?url=${testUrl}`;
  if (startDate) {
    endpointUrl += `&since=${startDate.getTime()}`;
  }

  const resp = await window.fetch(endpointUrl);
  const r = await resp.json();

  if (!resp.ok) {
    throw new Error(r['errors']);
  }
  return r;
}

const PSI_API =
  'https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed';
// This is referrer-restricted key, safe to be stored on the client.
const API_KEY = 'AIzaSyCWNar-IbOaQT1WX_zfAjUxG01x7xErbSc';

/**
 * Queries the Pagespeed Insights API on the given URL. Returns the run's JSON,
 * or throws an Error if there was a problem.
 *
 * @param {string} url to request a Lighthouse run (via PSI)
 * @return {Promise<Object>} a single lighthouse run
 */
async function runPsi(url) {
  const categories = [
    'ACCESSIBILITY',
    'BEST_PRACTICES',
    'PERFORMANCE',
    // 'PWA', // Disable until installability results are correct. https://crbug.com/1267022#c7
    'SEO',
  ];
  const params = new URLSearchParams();
  params.append('strategy', 'MOBILE');
  params.append('url', url);
  params.append('key', API_KEY);
  for (const category of categories) {
    params.append('category', category);
  }
  const requestUrl = `${PSI_API}?${params.toString()}`;
  const resp = await fetch(requestUrl, {
    method: 'GET',
  });
  const r = await resp.json();

  if (!resp.ok) {
    throw new Error(r['errors']);
  } else if (!r.lighthouseResult) {
    throw new Error('Unexpected result, no lighthouseResult key');
  }
  return r.lighthouseResult;
}

/**
 * @fileoverview Tools for language selection and validation.
 * TODO(devnook): Extract isSupportedLocale to a common format.
 * @see https://github.com/GoogleChrome/web.dev/issues/3131
 */

/**
 * A map of supported language codes to their full names.
 * @const
 */
const languageNames = {
  en: 'English',
  pl: 'Polski',
  es: 'Español',
  ko: '한국어',
  zh: '中文',
  ru: 'Русский',
  pt: 'Português',
  ja: '日本語',
  de: 'Deutsch',
  fr: 'Français',
};

/**
 * When we display a list of translations available for a given page,
 * use this ordering for the names of the languages.
 * See https://github.com/GoogleChrome/web.dev/issues/7430
 * @const
 */
const languageOrdering = [
  'de',
  'en',
  'es',
  'fr',
  'pl',
  'pt',
  'ru',
  'zh',
  'ja',
  'ko',
];

/**
 * A default language for the site.
 * @const
 */
const defaultLanguage = 'en';

/**
 * A list of supported languages.
 * @const
 */
const supportedLanguages = Object.keys(languageNames);

/**
 * Temporary validation function (see TODO).
 * @param {string} lang Language code.
 * @return {Boolean} Whether the language code is supported.
 */
function isValidLanguage(lang) {
  return supportedLanguages.indexOf(lang) > -1;
}

var language = {
  defaultLanguage,
  isValidLanguage,
  languageNames,
  languageOrdering,
  supportedLanguages,
};

var js_cookie = {exports: {}};

/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */

(function (module, exports) {
(function (factory) {
	var registeredInModuleLoader;
	{
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));
}(js_cookie));

var cookies = js_cookie.exports;

var ids = {"UA":"UA-126406676-2","GA4":"G-18JR3Q8PJ8"};
var dimensions = {"MEASUREMENT_VERSION":"dimension5","NAVIGATION_TYPE":"dimension6","COLOR_SCHEME_PREFERENCE":"dimension7","WEB_VITALS_DEBUG":"dimension8"};
var version = 15;

store.action(() => {
  const {isSignedIn} = store.getState();
  if (isSignedIn) {
    return {
      userUrlSeen: null,
      userUrl: null,
      checkingSignedInState: false,
      isSignedIn: false,
      user: null,
      lighthouseResult: null,
      lighthouseError: null,
    };
  }
});

store.action((state, url) => {
  const p = (async () => {
    // Only write the user's URL preference to `activeLighthouseUrl` here before running
    // Lighthouse. The `userUrl` field inside state is not "safe" in that it can be replaced by
    // Firestore at any point. This ensures that results are never approportioned to the wrong URL.
    store.setState({
      activeLighthouseUrl: url,
      lighthouseError: null,
    });
    const run = await runPsi(url);
    store.getState(); // might change during runLighthouse
    return {
      userUrl: url,
      activeLighthouseUrl: null,
      lighthouseResult: {
        url,
        run,
      },
    };
  })();

  return p.catch((err) => {
    const errMsg = err.name === 'FetchError' ? err.name : err.toString();
    console.warn('failed to run PSI', url, errMsg);
    return setLighthouseError(errMsg);
  });
});

const setLighthouseError = store.action((_, errMsg) => {
  const update = {
    lighthouseError: errMsg,
    activeLighthouseUrl: null,
  };
  const {activeLighthouseUrl, lighthouseResult} = store.getState();
  if (lighthouseResult && lighthouseResult.url !== activeLighthouseUrl) {
    update.lighthouseResult = null;
  }
  store.setState(update);
  return update;
});

store.action((_, url, startDate) => {
  const p = (async () => {
    const runs = await fetchReports(url, startDate);

    // Don't update results during another active Lighthouse fetch.
    const {activeLighthouseUrl} = store.getState();
    if (activeLighthouseUrl) {
      return null;
    }

    return {
      userUrl: url,
      userUrlSeen: startDate,
      activeLighthouseUrl: null,
      lighthouseResult: {
        url,
        runs,
      },
    };
  })();

  return p.catch((err) => {
    console.warn('failed to fetch reports for', url, err);

    // Don't show an error for another active Lighthouse fetch.
    const {activeLighthouseUrl} = store.getState();
    if (activeLighthouseUrl) {
      return null;
    }

    const update = {
      userUrl: url,
      lighthouseError: err.toString(),
    };

    // If the previous result was for a different URL, clear it so there's not confusion about
    // what the error is being shown for.
    const {lighthouseResult} = store.getState();
    if (lighthouseResult && lighthouseResult.url !== url) {
      update.lighthouseResult = null;
    }

    return update;
  });
});

/**
 * Inert the page so scrolling and pointer events are disabled.
 * This is used when we open the navigation drawer or show a modal dialog.
 */
const disablePage = () => {
  // Setting the majority of the page as inert can have a significant perf hit when
  // trying to animate e.g. the navigation drawer, so do it in the frame after this
  // to avoid blocking on interaction and incurring an INP delay.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const main = document.querySelector('main');
      const footer = document.querySelector('footer');

      if (main) main.inert = true;
      if (footer) footer.inert = true;
    });
  });
};

/**
 * Uninert the page so scrolling and pointer events work again.
 */
const enablePage = () => {
  // Similar to disablePage(), go inert in the next frame to avoid the perf hit.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const main = document.querySelector('main');
      const footer = document.querySelector('footer');

      if (main) main.inert = false;
      if (footer) footer.inert = false;
    });
  });
};

const openNavigationDrawer = store.action(() => {
  disablePage();
  return {isNavigationDrawerOpen: true};
});

const closeNavigationDrawer = store.action(() => {
  enablePage();
  return {isNavigationDrawerOpen: false};
});

const openModal = store.action(() => {
  disablePage();
  return {isModalOpen: true};
});

const closeModal = store.action(() => {
  enablePage();
  return {isModalOpen: false};
});

const checkIfUserAcceptsCookies = store.action(({cookiePreference}) => {
  if (cookiePreference) {
    return;
  }

  // If set, this will be either the string '1' or '0' based on whether
  // the user has accepted or rejected the use of cookies.
  // If not set it means the user has not made a choice (or cleared storage).
  const storedWebAcceptsCookiesValue = localStorage['web-accepts-cookies'];

  if (typeof storedWebAcceptsCookiesValue === 'string') {
    cookiePreference =
      storedWebAcceptsCookiesValue === '1' ? 'accepts' : 'rejects';
  } else {
    cookiePreference = null;
  }

  // Only show the cookie snack-bar if the user hasn't set a preference.
  const showingSnackbar = cookiePreference === null;

  return {cookiePreference, showingSnackbar, snackbarType: 'cookies'};
});

const setUserAcceptsCookies = store.action(() => {
  localStorage['web-accepts-cookies'] = '1';
  return {
    cookiePreference: 'accepts',
    showingSnackbar: false,
    // Note we don't set the snackbarType to null because that would cause the
    // snackbar to re-render and break the animation.
    // Instead, snackbarType is allowed to stick around and future updates can
    // overwrite it.
  };
});

const setUserRejectsCookies = store.action(() => {
  localStorage['web-accepts-cookies'] = '0';
  return {
    cookiePreference: 'rejects',
    showingSnackbar: false,
    // Note we don't set the snackbarType to null because that would cause the
    // snackbar to re-render and break the animation.
    // Instead, snackbarType is allowed to stick around and future updates can
    // overwrite it.
  };
});

const setLanguage = store.action((state, language$1) => {
  if (!language.isValidLanguage(language$1)) {
    return state;
  }
  const options = {
    expires: 10 * 365, // 10 years
    samesite: 'strict',
  };
  cookies.set('firebase-language-override', language$1, options);
  if (language$1 !== state.currentLanguage) {
    location.reload();
  }
  return {
    currentLanguage: language$1,
  };
});

const loadAnalyticsScript = store.action(() => {
  const {g4ScriptLoaded} = store.getState();
  if (!g4ScriptLoaded && isProd) {
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${ids.GA4}`, null);
    return {
      g4ScriptLoaded: true,
    };
  }
});

export { setLanguage as a, language as b, closeNavigationDrawer as c, dimensions as d, checkIfUserAcceptsCookies as e, setUserAcceptsCookies as f, setUserRejectsCookies as g, openModal as h, ids as i, closeModal as j, loadAnalyticsScript as l, openNavigationDrawer as o, store as s, version as v };

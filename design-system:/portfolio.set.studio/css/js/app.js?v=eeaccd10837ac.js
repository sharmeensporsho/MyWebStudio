import { s as store, l as loadAnalyticsScript } from './actions-4405a952.js';

/**
 * @fileoverview Provides a helper that removes active Service Workers.
 */

/**
 * Removes any previous Service Workers from this domain. If any were found and
 * removed, reloads this page. This is safe to call even if there's no support.
 *
 * @return {!Promise<void>|void}
 */
function removeServiceWorkers() {
  if (!('serviceWorker' in navigator)) {
    return; // can't return Promise in case we're running in ancient browser
  }

  return navigator.serviceWorker
    .getRegistrations()
    .then((all) => {
      return Promise.all(all.map((reg) => reg.unregister()));
    })
    .then((tasks) => {
      if (tasks.length) {
        window.location.reload();
      }
    });
}

/**
 * @fileoverview Site entrypoint.
 *
 * This is web.dev's core JS bundle; it includes unistore, and some basic
 * sw cleanup code.
 */

// This hides a legacy browser warning that can appear on the /measure page
// See .unsupported-notice in _page-header.scss
document.body.classList.remove('unresolved');

// Although discouraged (especially for longer videos), some video clips may have
// autoplay enabled. Disable it when prefers-reduced-motion is set, and ensure
// controls are enabled.
if (matchMedia('(prefers-reduced-motion)').matches) {
  document.querySelectorAll('video[autoplay]').forEach((b) => {
    b.removeAttribute('autoplay');
    b.setAttribute('controls', '');
  });
}

function onGlobalStateChanged({cookiePreference}) {
  if (cookiePreference === 'accepts') {
    loadAnalyticsScript();
  }
}
store.subscribe(onGlobalStateChanged);
onGlobalStateChanged(store.getState());

removeServiceWorkers();

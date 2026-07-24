/**
 * Prevent the browser from reopening the site at a previously restored scroll position.
 *
 * @param {Window} browserWindow
 */
export function initializeScrollAtTop(browserWindow) {
  browserWindow.history.scrollRestoration = "manual";
  browserWindow.scrollTo(0, 0);
}

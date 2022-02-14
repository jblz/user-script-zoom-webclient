// ==UserScript==
// @name        Zoom redirect to web client
// @namespace   https://github.dev/jblz/user-script-zoom-webclient
// @include     /^https:\/\/([[a-zA-z\d-]+\.)?zoom.us\/[js]\/\d+/
// @version     1.0.2
// @author      jblz
// @description 2/14/2022, 2:21:23 PM
// @license     gpl-3.0
// ==/UserScript==

/* jshint esversion: 6 */

(function () {
	const { origin, pathname, search } = document.location;
	const [_, meetingID] = pathname.match(/^\/j\/(\d+)/i)
	document.location.pathname = `/wc/join/${ encodeURIComponent( meetingID ) }${search}`;
})();

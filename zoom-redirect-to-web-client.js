// ==UserScript==
// @name        Zoom redirect to web client
// @namespace   https://github.dev/jblz/user-script-zoom-webclient
// @include     /https:\/\/(.*\.)?zoom.us\/j\/\d+/
// @version     1.0.0
// @author      jblz
// @description 2/14/2022, 2:21:23 PM
// ==/UserScript==

/* jshint esversion: 6 */

(function () {
	const { origin, pathname, search } = document.location;
	const [_, meetingID] = pathname.match(/^\/j\/(\d+)/)
	document.location = `${origin}/wc/join/${meetingID}${search}`;
})();

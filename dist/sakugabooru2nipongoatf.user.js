"use strict";

var _arguments = arguments;
// ==UserScript==
// @name		sakugabooru to nipongo @ feedly
// @namespace   https://github.com/atomer
// @description 
// @include	 https://feedly.com/*
// @version	 0.1
// ==/UserScript==

(function (window, loaded) {
    var win = null;
    if (!loaded) {
        var fn = "(" + _arguments.callee.toString() + ")(this,true);";
        var script = document.createElement("script");
        script.appendChild(document.createTextNode(fn));
        document.body.appendChild(script);
        return;
    } else {
        win = window;
    }

    function replace(titles) {
        [].forEach.apply(titles, [function (el) {
            var text = el.textContent.toLowerCase();
            var replaceText = text.replace(/([a-z]+)( |$)/mg, function (s, m) {
                return getMap(m);
            });
            if (text !== replaceText) {
                el.textContent = replaceText;
            }
        }]);
    }
    var NIPONGO_MAP = {};
    function getMap(text) {
        return text;
    }

    var feedlyPage = document.querySelector("#feedlyPage");
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === "childList") {
                var titles = feedlyPage.querySelectorAll(".title");
                replace(titles);
            }
        });
    });
    var config = {
        attributes: true,
        childList: true,
        characterData: true
    };
    observer.observe(feedlyPage, config);
})();

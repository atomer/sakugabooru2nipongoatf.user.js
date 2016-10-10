// ==UserScript==
// @name		sakugabooru to nipongo @ feedly
// @namespace   https://github.com/atomer
// @description 
// @include	 https://feedly.com/*
// @version	 0.1
// ==/UserScript==

((window, loaded) => {
    var win = null;
    if (!loaded) {
        let fn = "(" + arguments.callee.toString() + ")(this,true);";
        let script = document.createElement("script");
        script.appendChild(document.createTextNode(fn));
        document.body.appendChild(script);
        return;
    } else {
        win = window;
    }

    function replace(titles) {
        [].forEach.apply(titles, [(el) => {
            let text = el.textContent.toLowerCase();
            let replaceText = text.replace(/([a-z]+)( |$)/mg, function(s, m) {
                return getMap(m);
            });
            if (text !== replaceText) {
                el.textContent = replaceText;
            }
        }]);
    }
    const NIPONGO_MAP = {};
    function getMap(text) {
        return text;
    }

    const feedlyPage = document.querySelector("#feedlyPage");
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === "childList") {
                let titles = feedlyPage.querySelectorAll(".title");
                replace(titles);
            }
        });    
    });
    const config = {
        attributes: true,
        childList: true,
        characterData: true
    };
    observer.observe(feedlyPage, config);
})();
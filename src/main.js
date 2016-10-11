module.exports = function() {
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
    const NIPONGO_MAP = require("./map");
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
};
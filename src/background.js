function runShowMeTheCode(tabId, tab) {
    function isGitHub() {
        return urlMatches(/https:\/\/github\.com\/.*/)
    };

    function isBlobView() {
        return urlMatches(/.*\/blob\/.*/);
    };

    function pullRequestFileView() {
        return urlMatches(/.*\/pull\/.*\/files/);
    };

    function urlMatches(expression) {
        return tab.url && tab.url.match(expression);
    }

    function insertCSS(fileName) {
        chrome.tabs.insertCSS(tabId, {file: fileName});
    };

    if (isGitHub()) {
        if (isBlobView() || pullRequestFileView()) {
            insertCSS('showMeTheCode.css');
        } else {
            insertCSS('disableShowMeTheCode.css');
        }
    }
};

chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
    runShowMeTheCode(tabId, tab)
});

chrome.pageAction.onClicked.addListener(function (tabId, info, tab) {
    runShowMeTheCode(tabId, tab)
});


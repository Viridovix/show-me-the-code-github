function runShowMeTheCode(tabId, tab) {
    function isGitHub() {
        return urlMatches(/https:\/\/github\.com\/.*/)
    };

    function isBlobView() {
        return urlMatches(/.*\/blob\/.*/);
    };

    function isPullRequestFileView() {
        return urlMatches(/.*\/pull\/.*\/files/);
    };

    function isCommitView() {
        return urlMatches(/.*\/commit\/.*/);
    };

    function isCompareView() {
        return urlMatches(/.*\/compare\/.*/);
    };

    function urlMatches(expression) {
        return tab.url && tab.url.match(expression);
    }

    function insertCSS(fileName) {
        chrome.tabs.insertCSS(tabId, {file: fileName});
    };

    if (isGitHub()) {
        if (isBlobView() || isPullRequestFileView() || isCommitView() || isCompareView()) {
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


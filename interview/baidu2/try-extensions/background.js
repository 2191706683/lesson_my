chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.captureVisibleTab(null, {
        format: 'png',
        quality: 100
    }, function(dataURI) {
        chrome.storage.local.set({
            'screenshotURI': dataURI
        });
        chrome.tabs.create({
            'url': chrome.extension.getURL('screenshot.html')
        }, function(tab) {
            var updateProperties = {
                'active': true
            };
            if (chrome.runtime.openOptionsPage) {
                chrome.runtime.openOptionsPage();
            } else {
                chrome.tabs.update(tab.id, updateProperties)
            }
        })
    })
})
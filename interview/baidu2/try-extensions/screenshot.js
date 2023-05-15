document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.local.get('screenshotURI', function (items) {
        if (items.screenshotURI) {
            var image = document.getElementById('screenshot');
            image.src = items.screenshotURI;
        }
    });

    var downloadButton = document.getElementById('download');
    downloadButton.addEventListener('click', function () {
        chrome.storage.local.get('screenshotURI', function (items) {
            if (items.screenshotURI) {
                var link = document.createElement('a');
                link.download = 'screenshot.png';
                link.href = items.screenshotURI;
                link.click();
            }
        });
    });
});
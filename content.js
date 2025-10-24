console.log('🚀 YouTube Sensitive Content Bypass script active');

let lastClosed = null;

function closeSensitivePopup() {
    const container = document.querySelector('#player-error-message-container');
    if (!container) return false;

    const button = container.querySelector('#button button');

    if (button) {
        if (lastClosed !== container) {
            button.click();
            lastClosed = container;
            console.log('✅ Sensitive content popup automatically closed');
        }
        return true;
    }

    return false;
}

const observer = new MutationObserver(() => {
    closeSensitivePopup();
});
observer.observe(document.body, { childList: true, subtree: true });

window.addEventListener('yt-navigate-finish', () => {
    closeSensitivePopup();
});

setInterval(closeSensitivePopup, 2000);

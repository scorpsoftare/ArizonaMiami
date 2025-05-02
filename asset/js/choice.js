document.addEventListener("DOMContentLoaded", () => {
    const windowsTab = document.getElementById("windows-tab");
    const androidTab = document.getElementById("android-tab");
    const downloadButtonsContainer = document.querySelector(".download-buttons");

    const androidButtonsHTML = `
        <a href="https://arizonarphype.pw/mobile_client_new/game/launcher_new/app-debug.apk" class="btn play-market"><img src="./img/google_play.png">Play Market</a>
        <a href="https://www.rustore.ru/catalog/app/com.arzhype.gameinfo" class="btn rustore"><img src="./img/rustore.png">RuStore</a>
    `;

    const windowsButtonHTML = `
        <a href="https://files.arizonarphype.ru/downloads/arizona-hype-launcher.exe" class="btn direct-download" style="width: 100%;"><img src="./img/download.png">Скачать игру</a>
    `;

    function switchTab(activeTab, inactiveTab, buttonsHTML) {
        activeTab.classList.add("active");
        inactiveTab.classList.remove("active");
        downloadButtonsContainer.innerHTML = buttonsHTML;
    }

    function detectDeviceAndSetTab() {
        if (window.innerWidth < 768) {
            switchTab(androidTab, windowsTab, androidButtonsHTML);
        } else {
            switchTab(windowsTab, androidTab, windowsButtonHTML);
        }
    }

    windowsTab.addEventListener("click", () => {
        switchTab(windowsTab, androidTab, windowsButtonHTML);
    });

    androidTab.addEventListener("click", () => {
        switchTab(androidTab, windowsTab, androidButtonsHTML);
    });

    detectDeviceAndSetTab();
});

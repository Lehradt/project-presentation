(function() {
    let activeAd = null;
    function rollForAd() {
        if (activeAd) return;
        if (Math.random() > 0.5) {
            const mainContainer = document.querySelector('main');
            if (!mainContainer) return;
            activeAd = document.createElement('div');
            document.body.appendChild(activeAd).innerHTML = '<div style="margin-top: 80%; padding: 10px;"><a href="https://Lehradt.github.io/ProjectSourcer">ProjectSourcer</a></br><p style="font-size: 10px;">Der schnellste Weg von einem URL zu einer vollständigen Quelle.</p></div>'
            Object.assign(activeAd.style, {
                position: 'absolute',
                top: '30%',
                right: '20px',
                width: '15%',
                height: '35%',
                minWidth: '80px',
                zIndex: '100',
                cursor: 'pointer',
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                backgroundImage: 'url("https://Lehradt.github.io/ProjectSourcer/icon.png")',
                backgroundSize: 'contain',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat'
            });
            activeAd.onclick = () => {
                window.open('https://Lehradt.github.io/ProjectSourcer/', '_blank');
            };
            const closeBtn = document.createElement('div');
            closeBtn.innerHTML = '&times;';
            Object.assign(closeBtn.style, {
                position: 'absolute',
                top: '2px',
                right: '8px',
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#444'
            });
            closeBtn.onclick = (e) => {
                e.stopPropagation();
                activeAd.remove();
                activeAd = null;
            };
            activeAd.appendChild(closeBtn);
            mainContainer.appendChild(activeAd);
        }
    }
    rollForAd();
    setInterval(rollForAd, 60000);
})();

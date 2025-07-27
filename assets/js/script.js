const rainContainer = document.querySelector('.rain');

function createDiamond() {
    const fallWrapper = document.createElement('div');
    fallWrapper.classList.add('diamond-fall');

    const diamond = document.createElement('div');
    diamond.classList.add('diamond');

    const size = Math.random() * 30 + 50;
    diamond.style.width = `${size}px`;
    diamond.style.height = `${size}px`;

    fallWrapper.style.left = Math.random() * 100 + 'vw';

    const fallDuration = Math.random() * 2 + 4;
    const swayDuration = Math.random() * 2 + 3;

    fallWrapper.style.animationDuration = `${fallDuration}s`;
    diamond.style.animationDuration = `${swayDuration}s`;

    fallWrapper.appendChild(diamond);
    rainContainer.appendChild(fallWrapper);

    setTimeout(() => {
        fallWrapper.remove();
    }, (fallDuration + 1) * 1000);
}

setInterval(createDiamond, 300);

window.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }

    const downloadLink = document.querySelector('.btn-download');
    const mobileAlert = document.getElementById('mobileAlert');

    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if (isMobile() && downloadLink && mobileAlert) {
        downloadLink.addEventListener('click', function (e) {
            e.preventDefault();

            mobileAlert.classList.add('show');
            setTimeout(() => {
                mobileAlert.style.opacity = '0';
            }, 5000);

            setTimeout(() => {
                mobileAlert.classList.remove('show');
                mobileAlert.style.opacity = '';
            }, 5500);
        });
    }
});


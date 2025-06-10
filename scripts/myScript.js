//Реализация показывания текущей страницы в navbar
document.addEventListener("DOMContentLoaded", function () {
    // Получаем путь без ведущих папок и без ".html"
    let current = window.location.pathname.split('/').pop() || 'index.html';
    current = current.replace('.html', '');

    const navLinks = document.querySelectorAll('.nav-item a');

    navLinks.forEach(link => {
        // Убираем ./ и .html для сравнения
        let href = link.getAttribute('href').replace('./', '').replace('.html', '');

        if (href === current) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

//Закрытие оверлея при нажатии на крестик или вне оверлея
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

function closeOverlay() {
    overlay.style.display = 'none';
    localStorage.setItem('overlaySeen', 'true');
}
function overlayFunction() {


    if (!localStorage.getItem("overlaySeen")) {
      overlay.style.display = "flex";
    }

    closeBtn.addEventListener("click",closeOverlay);
    overlay.addEventListener("click", (e)=> {
        if (e.target === overlay) {
            closeOverlay();
        }
    })
}





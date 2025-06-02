//Реализация показывания текущей страницы в navbar
document.addEventListener("DOMContentLoaded", function (event) {
    console.log("loaded");



        function currentPage() {
            const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
            const navLinks = document.querySelectorAll('.nav-item a');

            navLinks.forEach(link => {
                const linkPath = link.getAttribute('href').split('/').pop().replace('.html', '');
                if (linkPath === currentPage) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            })
        }

        currentPage();
        console.log("last row");


    })

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





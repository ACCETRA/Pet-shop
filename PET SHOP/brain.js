let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000);
}

function plusSlides(n) {
    showSpecificSlide(slideIndex += n);
}

function showSpecificSlide(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

document.getElementById("searchBtn").addEventListener("click", () => {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.querySelectorAll(".companion-card");
    cards.forEach(card => {
        let name = card.querySelector("h3").innerText.toLowerCase();
        card.style.display = name.includes(input) ? "block" : "none";
    });
});

let cartCount = 0;
document.querySelectorAll(".companion-card button").forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        document.querySelector(".cart-count").innerText = cartCount;
        button.innerText = "Added!";
        setTimeout(() => {
            button.innerText = "Want to adopt";
        }, 1000);
    });
});
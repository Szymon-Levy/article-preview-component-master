const shareIcons = document.querySelectorAll(".card-container .social-wrapper .share-icon");

shareIcons.forEach(btn =>{
    const socialIcons = btn.nextElementSibling;
    btn.addEventListener("click", () => {
        socialIcons.classList.toggle("active");
    })
})
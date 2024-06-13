document.addEventListener("DOMContentLoaded", function() {
    const sectionLeft = document.querySelector(".section-left");
    const sectionRight = document.querySelector(".section-right");
    const main = document.querySelector("main");
    const designWorks = document.getElementById("design-works");
    const currentWorks = document.getElementById("current-works");
    const backButton = document.getElementById("backButton");
    const centerText = document.querySelector(".center-text");
    const toggleButton = document.getElementById("toggleButton");
    const additionalWorks = document.getElementById("additionalWorks");

    sectionLeft.addEventListener("click", function() {
        sectionLeft.classList.add("active");
        sectionRight.classList.add("active");
        main.classList.add("active");
        designWorks.classList.add("active");
        currentWorks.classList.remove("active");
        backButton.classList.add("active");
        centerText.style.display = "none";
    });

    sectionRight.addEventListener("click", function() {
        sectionLeft.classList.add("active");
        sectionRight.classList.add("active");
        main.classList.add("active");
        currentWorks.classList.add("active");
        designWorks.classList.remove("active");
        backButton.classList.add("active");
        centerText.style.display = "none";
    });

    backButton.addEventListener("click", function() {
        sectionLeft.classList.remove("active");
        sectionRight.classList.remove("active");
        main.classList.remove("active");
        designWorks.classList.remove("active");
        currentWorks.classList.remove("active");
        backButton.classList.remove("active");
        centerText.style.display = "block";
    });

    toggleButton.addEventListener("click", function() {
        if (additionalWorks.style.display === "none" || additionalWorks.style.display === "") {
            additionalWorks.style.display = "flex";
            toggleButton.textContent = "Свернуть остальные работы";
        } else {
            additionalWorks.style.display = "none";
            toggleButton.textContent = "Показать менее масштабные работы";
        }
    });
});

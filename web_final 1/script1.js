document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search");
    const productSections = document.querySelectorAll(".product");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();

        productSections.forEach(section => {
            const productName = section.querySelector("h2").textContent.toLowerCase();
            if (productName.includes(searchTerm)) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    });
});
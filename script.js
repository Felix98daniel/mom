// script.js
document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".product");
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close-btn");
    const whatsappBtn = document.getElementById("whatsapp-btn");
    const themeToggle = document.getElementById("theme-toggle");
    const sortButton = document.getElementById("sort-button");
  
    // Mostrar modal con los beneficios del producto
    products.forEach((product) => {
      product.addEventListener("click", () => {
        const productName = product.querySelector("h2").textContent;
        const benefits = product.getAttribute("data-benefits").split(",");
        document.getElementById("modal-product-name").textContent = productName;
        const benefitsList = document.getElementById("modal-benefits");
        benefitsList.innerHTML = '';
        benefits.forEach((benefit) => {
          const li = document.createElement("li");
          li.textContent = benefit.trim();
          benefitsList.appendChild(li);
        });
        modal.style.display = "flex";
        whatsappBtn.setAttribute("data-product", productName);
      });
    });
  
    // Enviar mensaje por WhatsApp
    whatsappBtn.addEventListener("click", () => {
      const productName = whatsappBtn.getAttribute("data-product");
      const whatsappUrl = `https://wa.me/6242418016?text=Quiero%20información%20sobre%20el%20producto:%20${encodeURIComponent(productName)}`;
      window.open(whatsappUrl, "_blank");
    });
  
    // Cerrar modal
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Cambiar tema
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      themeToggle.textContent = document.body.classList.contains("dark-mode") ? "🌞 Cambiar Tema" : "🌙 Cambiar Tema";
    });
  
    // Ordenar productos alfabéticamente
    sortButton.addEventListener("click", () => {
      const sortedProducts = [...products].sort((a, b) => {
        const nameA = a.querySelector("h2").textContent.toLowerCase();
        const nameB = b.querySelector("h2").textContent.toLowerCase();
        return nameA.localeCompare(nameB);
      });
      const catalog = document.querySelector(".catalog");
      catalog.innerHTML = '';
      sortedProducts.forEach(product => catalog.appendChild(product));
    });
  });
  

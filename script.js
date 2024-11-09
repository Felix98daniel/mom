// script.js
document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll(".product");
    const modal = document.getElementById("modal");
    const modalProductName = document.getElementById("modal-product-name");
    const modalBenefits = document.getElementById("modal-benefits");
    const whatsappBtn = document.getElementById("whatsapp-btn");
    const closeBtn = document.querySelector(".close-btn");
  
    products.forEach(product => {
      product.addEventListener("click", () => {
        const name = product.dataset.name;
        const benefits = product.dataset.benefits.split(", ");
        modalProductName.textContent = name;
  
        // Limpiamos la lista de beneficios y añadimos cada uno como elemento de lista
        modalBenefits.innerHTML = "";
        benefits.forEach(benefit => {
          const listItem = document.createElement("li");
          listItem.textContent = benefit;
          modalBenefits.appendChild(listItem);
        });
  
        whatsappBtn.setAttribute("data-product", name);
        modal.style.display = "flex";
      });
    });
  
    whatsappBtn.addEventListener("click", () => {
      const productName = whatsappBtn.getAttribute("data-product");
      const whatsappUrl = `https://wa.me/6679670420?text=Hola%2C%20quiero%20información%20sobre%20${encodeURIComponent(productName)}`;
      window.open(whatsappUrl, "_blank");
    });
  
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });
  

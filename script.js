document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");

  if (burger) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("active");
      burger.classList.toggle("active");
    });
  }

  document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", (e) => {
      const href = linkф.getAttribute('href');
      const targetId = href && href.startsWith('#') ? href.slice(1) : null;

      if (targetId) {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }

      burger.classList.remove("active");
      nav.classList.remove("active");
    });
  });

  const orderBtns = document.querySelectorAll(".btn_order, .btn");
  const orderForm = document.getElementById("product_section");

  if (orderForm) {
    orderBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        orderForm.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

    document.querySelectorAll(".quality").forEach(block => {
    const decreaseBtn = block.querySelector(".decrease");
    const increaseBtn = block.querySelector(".increase");
    const quantityEl = block.querySelector(".quantity");

    let quantity = 1;

    increaseBtn.addEventListener("click", () => {
      quantity++;
      quantityEl.textContent = quantity;
    });

    decreaseBtn.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        quantityEl.textContent = quantity;
      }
    });
  });
    const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

    const instBtn = document.querySelector(".inst_btn");
  instBtn.addEventListener("click", () => {
    window.open("https://instagram.com/reimee.e", "_blank");
  });
});

const cartIcon = document.getElementById("cartIcon");
const cartMenu = document.getElementById("cartMenu");

cartIcon.addEventListener("click", () => {
  cartMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!cartIcon.contains(e.target) && !cartMenu.contains(e.target)) {
    cartMenu.classList.remove("active");
  }
});

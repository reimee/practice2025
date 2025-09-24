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
      const href = link.getAttribute('href');
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

const cart_timer = document.getElementById("cart_timer");
const timer_btn = document.querySelectorAll(".btn");

let timerID = null;

function start_cart_timer() {
  clearTimeout(timerID);
  cart_timer.classList.add("active");

  timerID = setTimeout(() => {
    cart_timer.classList.remove("active");
  }, 3000);
}

function stop_cart_timer() {
  clearTimeout(timerID);
  cart_timer.classList.remove("active");
}

timer_btn.forEach(btn => {
  btn.addEventListener("click", () =>{
    start_cart_timer();
  });
});

document.addEventListener("mousedown", (e) => {
  if (e.button === 0) stop_cart_timer();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") stop_cart_timer();
});

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab_link");
  const contents = document.querySelectorAll(".tab_content");

  tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      e.preventDefault(); 

      
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");

      const targetId = tab.getAttribute("data-target");
      document.getElementById(targetId).classList.add("active");
    });
  });
});
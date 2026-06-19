document.querySelectorAll(".accordion").forEach(btn => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});

const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
document.body.appendChild(lightbox);

const img = document.createElement("img");
lightbox.appendChild(img);

document.querySelectorAll(".lightbox-img").forEach(image => {
  image.addEventListener("click", () => {
    img.src = image.src;
    lightbox.style.display = "flex";
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
document.getElementById("searchInput").addEventListener("keyup", function() {
  let filter = this.value.toLowerCase();
  let products = document.querySelectorAll(".product-card");

  products.forEach(product => {
    let name = product.getAttribute("data-name");
    if (name.toLowerCase().includes(filter)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name.length < 2) {
    alert("Name must be at least 2 characters.");
    return;
  }
  if (!email.includes("@")) {
    alert("Please enter a valid email.");
    return;
  }
  if (message.length < 10) {
    alert("Message must be at least 10 characters.");
    return;
  }
  alert("Contact form submitted successfully!");
});

// Enquiry Form Validation
document.getElementById("enquiryForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let fullname = document.getElementById("fullname").value.trim();
  let email = document.getElementById("email").value.trim();
  let enquiryType = document.getElementById("enquiryType").value;
  let details = document.getElementById("details").value.trim();

  if (fullname.length < 2) {
    alert("Full name must be at least 2 characters.");
    return;
  }
  if (!email.includes("@")) {
    alert("Please enter a valid email.");
    return;
  }
  if (enquiryType === "") {
    alert("Please select an enquiry type.");
    return;
  }
  if (details.length < 10) {
    alert("Details must be at least 10 characters.");
    return;
  }
  alert("Enquiry form submitted successfully!");
});

//Simple cart array
let cart=[];

//Add product to cart function
function addToCart(productName, price) {
  cart.push ({name : productName, price: price});
  alert(productName + "added to cart!");
  console.log(cart);//Debugging:see items in console
}

// Show cart items (optional demo)
function displayCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - R${item.price.toFixed(2)}`;
    cartList.appendChild(li);
  });
}

document.querySelectorAll(".menu-toggle").addEventListener("click",() => {
  document.querySelector(".nav-links").classList.toggle("show");
});
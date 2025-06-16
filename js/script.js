for (let i of products.data) {
  // creating a card

  let card = document.createElement("div");
  //Card should have category and should stay hidden initially

  card.classList.add("card", i.category, "hide");

  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", "images/" + i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  // container

  let container = document.createElement("div");
  container.classList.add("container");

  // product name

  let productName = document.createElement("h5");
  productName.classList.add("product-name");
  productName.innerText = i.productName.toUpperCase();
  container.appendChild(productName);

  //price

  let price = document.createElement("h6");
  price.innerText = i.price + "$";
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)

function filterProduct(value) {
  // кнопки
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerHTML.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // карточки
  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});
//Initially display all products
window.onload = () => {
  filterProduct("all");
};

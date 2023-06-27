'use strict';
// input element
const itemForm = document.getElementById('item-form');
const nameInput = document.getElementById('item-name');
const quantityInput = document.getElementById('item-quantity');
const editButton = document.querySelector('.btn-list');

// output
const itemListContainer = document.getElementById('item-list-container');

// init function

function init() {
  itemListContainer.style.display = 'none';
  itemListContainer.innerHTML = null;
}

const createItem = (itemName, quantity) => {
  const listElement = document.createElement('ol');
  listElement.classList.add('item-list');

  listElement.innerHTML = `
  <span class="item-detail">${itemName}</span>
  <span class="item-detail">${quantity}</span>
  <button class = "btn-list">Edit</button>
  <button class = "btn-list">Delete</button>`;
  itemListContainer.style.display = 'flex';
  itemListContainer.appendChild(listElement);
};

init();
//add event listener
itemForm.addEventListener('submit', function (e) {
  e.preventDefault();
  // to get the itemname
  const itemName = nameInput.value;
  const quantity = quantityInput.value;
  // validate user input
  if (itemName.trim() && quantity.trim()) {
    createItem(itemName, quantity);
    // createItem
  } else {
    alert('All fields are mandatory');
  }
  nameInput.value = null;
  quantityInput.value = null;
});

editButton.addEventListener('click', function (e) {
  e.preventDefault();
});

// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Object containing a price for each item on the menu
const prices = {
    "Garlic Bread": 6.5,
    "Bruschetta": 3.0,
    "Margherita Pizza": 12.0,
    "Spaghetti Carbonara": 8.0,
    "Tiramisu": 7.0,
    "Cheesecake": 6.5
}
let totalPrice = 0;

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menu');
    // Looping through each category and its items in the menu object, creating 2 elements, an h2 containing the name of a category
    // and a ul to contain the food items
    for (let category in menu) {
        const heading = document.createElement('h2');
        heading.textContent = category;
        menuContainer.appendChild(heading);
        const foodList = document.createElement('ul');
    // Looping through the array(itemName) of each category to create individual li items
    // and adding an event listener to each item that executes a callback function
        menu[category].forEach(itemName => {
            const food = document.createElement('li');
            food.textContent = itemName;
            food.addEventListener('click', () => {
                addToOrder(itemName)
            });
        
            food.appendChild(foodList);     // Append the list item to the list of items
            menuContainer.appendChild(food);        // Append a list of items element to the menu container
        });
    }         
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // creting all the variables, and fetching from the DOM the order container and the order-total container
    // making a list item for tht order list
    const orderContainer = document.getElementById('order');
    const orderTotal = document.getElementById('order-total');
    const orderList = document.createElement('li');
    // Set the text content of the list item to the item name, and appending them
    orderList.textContent = itemName;
    orderContainer.appendChild(orderList);
    // Calculate and update the total price, and appending to the order-total container
    const itemPrice = prices[itemName];
    totalPrice += itemPrice;
    orderTotal.textContent = totalPrice.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu)
}

initMenuSystem(menu);

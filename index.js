// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

const prices = {
    "Garlic Bread": 6.5,
    "Bruschetta": 3.0,
    "Margherita Pizza": 12.0,
    "Spaghetti Carbonara": 8.0,
    "Tiramisu": 7.0,
    "Cheesecake": 6.5
}
let totalPrice = 0;                                         // set the starting price at R0.00 when the page loads and will be altered later

// Function to display menu items by category
function displayMenuItems(menu) { 
    const menuContainer = document.getElementById('menu');  // Get the menu container element from the HTML
    
    for (let category in menu) {                            // Loop through each category and its items in the menu object       
        const heading = document.createElement('h2');       // Create an element to represent the category
        heading.textContent = category;                     // Set the text content of the category element to the category name
        menuContainer.appendChild(heading);                 // Append the category element to the menu container
        const foodList = document.createElement('ul');      // Create an element to represent a list of items

        menu[category].forEach(itemName => {                // Loop through the items in the category create list items
            const food = document.createElement('li');      // Create a list item element
            food.textContent = itemName;                    // Set the text content of the list item element to the item name
            food.addEventListener('click', () => {          // Attach a click event listener to the list item to add it to the order
                addToOrder(itemName)
            });
        
            food.appendChild(foodList);                     // Append the list item to the list of items
            menuContainer.appendChild(food);                // Append a list of items element to the menu container
        });
    }         
}


// Callback function for adding an item to the order
function addToOrder(itemName) {
    const orderContainer = document.getElementById('order');    // Get the order items list and the order total element from the HTML
    const orderTotal = document.getElementById('order-total');  // Get the order total element from HTML
    const orderList = document.createElement('li');             // Create a list item for the order
    
    orderList.textContent = itemName;                           // Set the text content of the list item to the item name
    orderContainer.appendChild(orderList);                      // Append the list item to the order items list
    
    const itemPrice = prices[itemName];                         // Calculate and update the total price
    totalPrice += itemPrice;  
    orderTotal.textContent = totalPrice.toFixed(2);             // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu)                                      // Call the function to display menu items
}

initMenuSystem(menu);                                           // Start the menu system by calling the init function

// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

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
displayMenuItems(menu)

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderContainer = document.getElementById('order');
    const orderTotal = document.getElementById('order-total');
    // Create a list item for the order
    const orderList = document.createElement('li');
    // Set the text content of the list item to the item name
    orderList.textContent = itemName;
    // Append the list item to the order items list
    orderContainer.appendChild(orderList);
    // Calculate and update the total price
    
    // Update the text content of the order total element with the new total
    
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);

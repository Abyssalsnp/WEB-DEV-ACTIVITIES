// Cache key structural elements to avoid repeating DOM queries [cite: 121, 175]
const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const itemList = document.getElementById('itemList');


// Refactored named action handler for modular design [cite: 174, 175]
function addNewItem() {
    const textValue = itemInput.value.trim();


    if (textValue === '') {
        itemInput.focus();
        return;
    }


    // Dynamic Element Creation [cite: 26, 179]
    const newLi = document.createElement('li');
    const textContainer = document.createElement('span');
    const deleteBtn = document.createElement('button');


    // Secure string generation to safeguard against XSS injections [cite: 139, 175]
    textContainer.textContent = textValue;
   
    // Structure and style the mini action button
    deleteBtn.textContent = '✕';
    deleteBtn.classList.add('delete-btn'); // Style via classList instead of inline styles [cite: 138, 175]


    // Attach standalone handler to safely excise the element from the DOM tree [cite: 63, 175]
    deleteBtn.addEventListener('click', function() {
        newLi.remove();
    });


    // Assemble the components inside the list node
    newLi.appendChild(textContainer);
    newLi.appendChild(deleteBtn);


    // Append the completely prepared parent node into the live structural DOM branch [cite: 49, 175]
    itemList.appendChild(newLi);


    // Clean field state and return focus to user viewport
    itemInput.value = '';
    itemInput.focus();
}


// Setup Event Listeners [cite: 17, 142]
addButton.addEventListener('click', addNewItem);


itemInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { // Track active viewport structural triggers safely [cite: 173, 174]
        addNewItem();
    }
});



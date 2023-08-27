
function popup(){
  document.getElementById("popup").style.display="block";
  document.querySelector('#main').style.opacity="17%";
 }

 // Get the + button and add an event listener
 const addCardBtn = document.getElementById('addcard');
 addCardBtn.addEventListener('click', () => {
     const cardTitle = document.querySelector('#card').value;
     const newCard = createFlexCard(cardTitle);

     const flexContainer = document.querySelector('.flex-container');
     flexContainer.appendChild(newCard);

     const centeredToggle = document.querySelector('.centered');
    if (centeredToggle) {
      newCard.classList.add('invisible');

    }
     document.getElementById("popup").style.display="none";
     document.querySelector('#card').value="";
  document.getElementById("no").style.display="none";
  document.querySelector('#main').style.opacity="100%";
});
 
 function closepopup(){
   document.getElementById("popup").style.display="none";
   document.querySelector('#main').style.opacity="100%";
  }
  
 
 // Function to create a pop-up with an input field and an Add button
 function createPopup(title, buttonText, buttonAction) {
   // Create the pop-up
   const popup = document.createElement('div');
   popup.classList.add('popup');
 
   // Create the title
   const popupTitle = document.createElement('h3');
   popupTitle.innerText = title;
   popup.appendChild(popupTitle);
 
   // Create the input field
   const input = document.createElement('input');
   input.type = 'text';
   popup.appendChild(input);
 
   // Create the Add button
   const addButton = document.createElement('button');
   addButton.innerText = buttonText;
   addButton.addEventListener('click', buttonAction);
   popup.appendChild(addButton);
 
   // Create the Close button
   const closeButton = document.createElement('button');
   closeButton.innerText = 'Close';
   closeButton.addEventListener('click', () => {
     document.querySelector('.cardhead').classList.remove('blur-cardhead');

     popup.remove();
     const background = document.querySelector('.blur-background');
    background.style.display = 'none';
   });
   popup.appendChild(closeButton);
 
   return popup;
 }
 function createFlexCard(title) {  
  // Create the flex card
  
  const flexContainer = document.querySelector('.flex-container');
  const flexCard = document.createElement('div');
  flexCard.classList.add('flex-card');

  const cardTitle = document.createElement('h3');
cardTitle.innerText = title;
cardTitle.addEventListener('click', () => {
  // Select all the cards and loop through them
  document.querySelectorAll('.flex-card').forEach(card => {
    if (card !== flexCard) { // Check if the card is not the centered card
      card.classList.add('invisible'); // Add the "invisible" class to hide the card
    }
  });
  flexCard.classList.toggle('centered');
  document.querySelector('.task-text').classList.toggle('invisible');
  document.querySelector('.but').classList.toggle('invisible');
  document.querySelector('.cardhead').innerText = title;
  document.querySelector('.cardhead').classList.remove('invisible');
  if (flexCard.classList.contains('centered')) {
    // flexCard.style.width = '350px';
    // flexCard.style.height = '450px';
    document.querySelector('.back-button').classList.remove('invisible');
    document.querySelector('.but').classList.remove('invisible');
  } 
  else {
    flexCard.style.width = '';
    flexCard.style.height = '';
    document.querySelector('.cardhead').classList.add('invisible');
    
    document.querySelectorAll('.flex-card').forEach(card => {
      card.classList.remove('invisible'); 
    });
    document.querySelector('.back-button').classList.add('invisible'); 
     document.querySelector('.but').classList.add('invisible');
  }
});


const backButton = document.querySelector('.back-button');
backButton.addEventListener('click', () => {
  // flexCard.classList.remove('centered');
  flexCard.style.width = '';
  flexCard.style.height = '';
  document.querySelectorAll('.flex-card').forEach(card => {
    if (card.classList.contains('centered')) {
      card.classList.remove('centered');
      card.classList.remove('invisible'); // Make sure to remove invisibility
  } else if (card.classList.contains('uncentered')) {
      card.classList.add('invisible');
  } else {
      // New cards appended outside centered mode should be visible
      card.classList.remove('invisible');
  }
  document.querySelector('.but').classList.remove('invisible');
});
  document.querySelector('.cardhead').classList.add('invisible');
  document.querySelector('.task-text').classList.remove('invisible');
  backButton.classList.add('invisible');
});
  
  flexCard.appendChild(cardTitle);

  const hr = document.createElement("hr");
  hr.setAttribute("id", "hr1");
  flexCard.appendChild(hr);
// Create a list
const list = document.createElement('ul');
flexCard.appendChild(list);

// Event listener for "Mark Done" buttons
list.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('mark-button')) {
    const listItem = target.parentElement; // Get the parent list item
    listItem.classList.toggle('mark');
    toggleMarkButton(target, listItem.classList.contains('mark'));
  }
});

// Function to toggle the "Mark Done" button text
function toggleMarkButton(button, marked) {
  if (marked) {
    button.textContent = 'Mark Undone';
  } else {
    button.textContent = 'Mark Done';
  }
}

// Function to add a new list item with a "Mark Done" button
function addListItem(itemText) {
  const listItem = document.createElement('li');
  listItem.textContent = itemText;

  const markButton = document.createElement('button');
  markButton.textContent = 'Mark Done';
  markButton.classList.add('mark-button'); // Add a class to the button for identification

  listItem.appendChild(markButton);
  list.appendChild(listItem);
} // Create the button container
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('flexbutton');

  // Create the Add button
  const addBtn = document.createElement('button');
  addBtn.classList.add('add-button')
  addBtn.innerText = 'Add';
  addBtn.onclick = function() {
    addBtnpopup(flexCard);
  };


  function addBtnpopup(flexCard) {
    // Create the pop-up for adding an item to the list
      const background = document.querySelector('.blur-background');
      background.style.display = 'block';

      document.querySelector('.cardhead').classList.add('blur-cardhead');
    const popup = createPopup('Add New List', 'Add', () => {
      // Get the input value and create a new list item
      const listItemTitle = popup.querySelector('input').value;
      const newItem = document.createElement('li');
      newItem.innerText = listItemTitle;
      const markButton = document.createElement('button');
      markButton.textContent = 'Mark Done';
      markButton.classList.add('mark-button'); // Add a class to the button for identification
  
      newItem.appendChild(markButton);
      list.appendChild(newItem);
  
      popup.remove();
      background.style.display = 'none';
      document.querySelector('.cardhead').classList.remove('blur-cardhead');
    });
    // Add the pop-up to the body
    document.body.appendChild(popup);
  }

  // Create the Delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add('delete-button');
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", function() {
    // Remove the flex card from the flex container
    flexContainer.removeChild(flexCard);
  });

  // Add the buttons to the container
  buttonContainer.appendChild(addBtn);
  buttonContainer.appendChild(deleteButton);

  // Add the button container to the flex card
  flexCard.appendChild(buttonContainer);
  // Create the list
 
  
  return flexCard;
}

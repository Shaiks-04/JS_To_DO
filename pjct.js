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
    document.querySelector('.back-button').classList.remove('invisible'); // Show the back button
  } 
  else {
    flexCard.style.width = '';
    flexCard.style.height = '';
    document.querySelector('.cardhead').classList.add('invisible');
    // Select all the cards and loop through them
    document.querySelectorAll('.flex-card').forEach(card => {
      card.classList.remove('invisible'); // Remove the "invisible" class to show the cards again
    });
    document.querySelector('.back-button').classList.add('invisible'); // Hide the back button
  }
});

// Add event listener to the back button
const backButton = document.querySelector('.back-button');
backButton.addEventListener('click', () => {
  flexCard.classList.remove('centered');
  flexCard.style.width = '';
  flexCard.style.height = '';
  document.querySelectorAll('.flex-card').forEach(card => {
    card.classList.remove('invisible');
  });
  document.querySelector('.cardhead').classList.add('invisible');
  document.querySelector('.task-text').classList.remove('invisible');
  document.querySelector('.but').classList.remove('invisible');
  backButton.classList.add('invisible');
});
  
  flexCard.appendChild(cardTitle);

  const hr = document.createElement("hr");
  hr.setAttribute("id", "hr1");
  flexCard.appendChild(hr);

  // Create the list
  const list = document.createElement('ul');
  flexCard.appendChild(list);

  // Create the button container
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('flexbutton');

  // Create the Add button
  const addBtn = document.createElement('button');
  addBtn.classList.add('add-button')
  addBtn.innerText = 'Add';
  addBtn.onclick = function() {
    addBtnpopup(flexCard);
  };


  function addBtnpopup() {
    // Create the pop-up for adding an item to the list
      const background = document.querySelector('.blur-background');
      background.style.display = 'block';


    const popup = createPopup('Add New List', 'Add', () => {
      // Get the input value and create a new list item
      const listItemTitle = popup.querySelector('input').value;
      const newItem = document.createElement('li');
      newItem.innerText = listItemTitle;
      list.appendChild(newItem);
      popup.remove(); 
      background.style.display = 'none';   
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

  list.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'LI') {
      target.classList.toggle('mark');
    }
  });
  return flexCard;
}

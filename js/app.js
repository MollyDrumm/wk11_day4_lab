document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmition);

  const deleteButton = document.querySelector('#delete-button');
  deleteButton.addEventListener('click', handleDeleteButton);
})

const handleFormSubmition = function( event ){
  event.preventDefault();
  console.log(event);
  const formInputTitle = event.target.title.value;
  const formInputCategory = event.target.category.value;
  const formInputAuthor = event.target.author.value;
  const readingList = document.querySelector('#reading-list');
  const newUl = document.createElement('ul');
  const newDiv = document.createElement('div');
  newDiv.classList.add('flex-list');
  readingList.appendChild(newDiv);

  const authorLi = document.createElement('li')
  const categoryLi = document.createElement('li');
  const titleLi = document.createElement('li');
  newDiv.appendChild(newUl);
  newUl.appendChild(authorLi);
  newUl.appendChild(categoryLi);
  newUl.appendChild(titleLi);
  authorLi.textContent = `Author: ${formInputAuthor}`;
  categoryLi.textContent = `Category: ${formInputCategory}`;
  titleLi.textContent = `Title: ${formInputTitle}`;
  event.srcElement.reset();
}

const handleDeleteButton = function(){
  const divToRemove = document.querySelector('#reading-list div')
  divToRemove.parentNode.removeChild(divToRemove);
}

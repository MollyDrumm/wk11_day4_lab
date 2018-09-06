document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmition);
})

const handleFormSubmition = function( event ){
  event.preventDefault();
  console.log(event);
  const formInputTitle = event.target.title.value;
  const formInputCategory = event.target.category.value;
  const formInputAuthor = event.target.author.value;
  const readingList = document.querySelector('#reading-list');
  const newUl = document.createElement('ul');
  readingList.appendChild(newUl);
  const authorLi = document.createElement('li')
  const categoryLi = document.createElement('li');
  const titleLi = document.createElement('li');
  newUl.appendChild(authorLi);
  newUl.appendChild(categoryLi);
  newUl.appendChild(titleLi);
  authorLi.textContent = `Author: ${formInputAuthor}`;
  categoryLi.textContent = `Category: ${formInputCategory}`;
  titleLi.textContent = `Title: ${formInputTitle}`;
}

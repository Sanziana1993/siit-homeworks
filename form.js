document.querySelector('form').addEventListener('submit', handleSubmit);


function handleSubmit(e) {
  const reqFields = document.querySelectorAll('.js-required');
  const radios = document.querySelectorAll('[name=gender]');
  


  for(let i = 0; i < reqFields.length; i++) {
    const field = reqFields[i];

    
    if(field.value === '') {
      const errorMessage = showErrorMessage('Please complete the field' + field.name + '!');

      console.warn('Not completed field with name: ', field.name);
      field.style.border = '1px solid #c00';
      field.addEventListener(
        'change', 
        () => {
          removeErrorState(field);
          hideErrorMessage(errorMessage);
        }, 
        { once: true }
      );
      e.preventDefault();
    }
  }
  

  if(!radios[0].checked && !radios[1].checked) {
    const parent = radios[0].parentElement.parentElement;
    parent.style.border = '1px solid #c00';
    
    const errorMessage = showErrorMessage('Please choose a gender');

    radios[0].addEventListener('change', () => {
      removeErrorState(parent);
      hideErrorMessage(errorMessage);
    });
    radios[1].addEventListener('change', () => {
      removeErrorState(parent);
      hideErrorMessage(errorMessage);
    });
    console.warn('was not chosen gender');
    e.preventDefault();
  }

  console.log(reqFields);
}

function removeErrorState(elem) {
  elem.style.border = '1px solid #afafaf'
}

function hideErrorMessage(messageRef) {
  messageRef.remove();
  }

function showErrorMessage(message) {
  const i = document.createElement('i');
  i.classList.add('fas','fa-exclamation-triangle');
  
  const p = document.createElement('p');
  p.classList.add('error-message') ;
  p.innerHTML = 'You have not completed all fields';
  
  const form = document.querySelector('form');
  

  p.prepend(i);
  form.prepend(p);

  return p;
}

function showSuccessMessage(message) {
  if(document.location.search === '') {
    return;
  }
const perechi = window.location.search.split('&'); 
for(let i = 0; i < perechi.length; i++) {
  const pereche = perechi[i];
  const fields = pereche.split('=');
  if(pereche.includes('name=')) {
    user = fields[1];
  }
  console.log(fields[0], '=', fields[1]);
}

  const i = document.createElement('i');
  i.classList.add('fas','fa-checked');

  const p = document.createElement('p');
   p.classList.add('success-message');
   p.innerHTML = 'Thank you for contacting us , ' + user ;

  const form = document.querySelector('form');

  p.prepend(i);
  form.prepend(p);

 
  }



window.addEventListener('DOMContentLoaded', showSuccessMessage);
window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'));


window.addEventListener('load', () => console.log('Load'))
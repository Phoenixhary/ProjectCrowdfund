let dropDown = document.querySelector('#dropdownlist');
 let Button = document.querySelector('#dropdownButton');
 let BackP = document.querySelector('#Modal');
 let closed = document.querySelector('#closeModal');
 let pop = document.querySelector('#bak');
 let Final = document.querySelector('#finalModal');
 let Numba = document.querySelector('#Number');
 let Numba2 = document.querySelector('#Number2');
 let pledgeForm = document.querySelector('#Form');
 let pledgeForm2 = document.querySelector('#Form2');
 let pledgeForm3 = document.querySelector('#Form3');
 let Div1 = document.querySelector('#div1');
 let Div2 = document.querySelector('#div2');
 let Div3 = document.querySelector('#div3');
 let Got = document.querySelector('#Gotit');
 let Errors = document.querySelector('#errmsg');
 let formValue = document.querySelector('#Number').value;

 
 // For dropdown
 dropD = () =>  {
  if (dropDown.style.opacity === '0') {
    dropDown.style.transition = 'opacity 2s'
    dropDown.style.opacity = '1';
 } else {
 dropDown.style.opacity = '0';
  }
}
// for back this project modal
pop.onclick = function() {
        BackP.style.display = 'block';
     } 

closed.onclick = function() {
    BackP.style.display = 'none';
}

// for enter your pledge 
openForm = () => {
  pledgeForm.style.display = 'block';
  Div1.style.borderColor ='lightblue';
  Div1.style.borderWidth ='medium';
}
openForm2 = () => {
  pledgeForm2.style.display = 'block';
  Div2.style.borderColor ='lightblue';
  Div2.style.borderWidth ='medium';
}
openForm3 = () => {
  pledgeForm3.style.display = 'inline';
  Div3.style.borderColor ='lightblue';
  Div3.style.borderWidth ='medium';
}

// for continue modal
 LastModal = () => {
  Final.style.display = 'block';
 BackP.style.display = 'none'
 }
gott = () => {
  Final.style.display = 'none';
}


pledgeForm.addEventListener('submit', (e) => {
  let errorMessage = [];
  e.preventDefault();
if (Numba.value < 25 ) {
  errorMessage.push('Value is less than $25');
}
else{
  Final.style.display = 'block';
  BackP.style.display = 'none';
}

  if (Numba.length > 0) {
    e.preventDefault();
    Errors.toggleAttribute('hidden');
    Errors.innerHTML = errorMessage.join(',');
  }
  
});

// Form two
pledgeForm2.addEventListener('submit', (e) => {
  let errorMessage = [];
  e.preventDefault();
if (Numba2.value < 75 ) {
  errorMessage.push('Value is less than $25');
}
else{
  Final.style.display = 'block';
  BackP.style.display = 'none';
}

  if (Numba.length > 0) {
    e.preventDefault();
    Errors.toggleAttribute('hidden');
    Errors.innerHTML = errorMessage.join(',');
  }
  
});


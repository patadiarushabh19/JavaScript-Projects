document.addEventListener('DOMContentLoaded', function () {
   var form = document.querySelector('form');
   var inp1 = document.querySelector('#inp1');
   var inp2 = document.querySelector('#inp2');
   var h4 = document.querySelector('h4');
   var main = document.querySelector('.main');

   form.addEventListener('submit', function (ev) {
       ev.preventDefault();
       if (inp1.value === '' || inp2.value === '') {
           h4.textContent = "Error, Some Fields are Blank";
           h4.style.color = 'crimson';
           main.style.backgroundColor = "lightblue"
           h4.style.fontFamily = "gilroy"
       }
           else{
            h4.textContent = "You are good to go.";
            h4.style.color = 'white';
            main.style.backgroundColor = 'lightseagreen'
            h4.style.fontFamily = "gilroy"
           }
   });
});

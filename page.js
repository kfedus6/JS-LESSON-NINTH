/*
text.onchange = (e) => {
   console.log('change');
}
*/
/*

text.oninput = () => {
   if (text.value.length > 10) {
      let s;
      s = text.value.substring(0, 10);
      text.value = s;
   }

}

/*
let s = "hello world"
s = s.substring(0, 6);
console.log(s)
*/
/*
let sel = document.querySelector('select');
sel.onchange = (e) => {
   console.log(e.target);
}

text.oncopy = text.oncut = text.onpaste = (e) => {
   console.log(e.type)
   console.log(e.clipboardData.getData('text/plain'))
}

let num = document.querySelector('.number');
num.onpaste = (e) => {
   if (isNaN(Number(e.clipboardData.getData('text/plain'))) == true) {
      console.log(isNaN(Number(num.value)))
      return false;
   }

}

const s = "31231"
console.log(isNaN(Number(s)))
*/
/*
let text = document.querySelector(".text");

text.oninput = (e) => {
   document.querySelector('.number').value = text.value
}
*/
/*
const table = document.querySelector('#table');
table.onclick = (e) => {
   console.log(e.target);
} */

//DZ

const tagTd = document.querySelectorAll('td');

tagTd.forEach(item => {

   item.onfocus = () => {

      let bg = item.style.backgroundColor;
      item.style.backgroundColor = 'white';

      let textArea = document.createElement('textarea');
      textArea.style.width = 200 + 'px';
      textArea.style.height = 200 + 'px';

      let textOld = item.textContent;
      textArea.value = item.innerHTML;
      item.innerHTML = '';
      item.appendChild(textArea);
      textArea.focus();

      let btnSave = document.createElement('button');
      btnSave.textContent = 'save';
      item.append(btnSave);

      let btnCancel = document.createElement('button');
      btnCancel.textContent = 'cancel';
      item.append(btnCancel);

      btnSave.onfocus = () => {
         item.innerHTML = textArea.value;
         item.style.backgroundColor = bg;
         textArea.remove();
         btnSave.remove();
      }

      btnCancel.onclick = () => {
         item.textContent = textOld;
         item.style.backgroundColor = bg;
         textArea.remove();
         btnCancel.remove();
         btnSave.remove();
      }
   }
})


/*
let moneyBefore = document.querySelector('#money-before');
let moneyAfter = document.querySelector('#money-after');
let money = document.querySelector('#money');
let interest = document.querySelector('#interest');
let year = document.querySelector('.year');


interest.oninput = year.onchange = money.oninput = () => {
   moneyBefore.textContent = money.value;
   if (money.value.length > 6) {
      let m;
      m = money.value.substring(0, 6);
      money.value = m;
   } else if (money.value < 0) {
      money.value = 0;
   }

   if (interest.value > 10) {
      interest.value = 10;
   } else if (interest.value < 0) {
      interest.value = 0;
   }

   let int = interest.value * 0.01;
   let result = Math.round(money.value * (1 + int) ** year.value);

   moneyAfter.textContent = result;

   let height = result / money.value * 100;
   document.querySelector('#green').style.height = height + 'px';

}
*/

/* 
money.addEventListener('keydown', (e) => {
   if (!isNaN(parseInt(e.key)) || e.key == "Backspace" || e.key == 'ArrowLeft' || e.key == 'ArrowRight') {
   } else {
      e.preventDefault();
   }
})

interest.addEventListener('keydown', (e) => {
   if (interest.value.length > 1) {
      let int;
      int = interest.value.substring(0, 1);
      interest.value = int;
   }

   if (!isNaN(parseInt(e.key)) || e.key == "Backspace" || e.key == 'ArrowLeft' || e.key == 'ArrowRight') {
   } else {
      e.preventDefault();
   }

}) */
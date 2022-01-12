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
/* 
const tagTd = document.querySelectorAll('td');

tagTd.forEach(item => {

   item.onfocus = () => {
      let bg = item.style.backgroundColor;
      item.style.backgroundColor = 'white';

      let textArea = document.createElement('textarea');
      textArea.style.width = 200 + 'px';
      textArea.style.height = 200 + 'px';
      let textOld = item.textContent;
      textArea.value = item.textContent;
      item.textContent = '';
      item.appendChild(textArea);
      textArea.focus();

      let btnSave = document.createElement('button');
      btnSave.textContent = 'save';
      item.append(btnSave);

      let btnCancel = document.createElement('button');
      btnCancel.textContent = 'cancel';
      item.append(btnCancel);

      btnSave.onclick = () => {
         item.textContent = textArea.value;
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
*/
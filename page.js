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

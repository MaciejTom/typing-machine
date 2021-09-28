const textSpan = document.querySelector(".text");
const txt = `Lorem ipsum dolor sit amet, consectetur
 adipiscing elit. Phasellus luctus dolor a ultrices 
 elementum. Donec quis diam tincidunt, malesuada purus 
 Praesent purus ipsum, bibendum eu nisl vel, rhoncus. 
 Aliquam mattis massa non magna convallis fermentum. `

 

let letter = 0;



 addLetter = () => {
     
     textSpan.textContent += txt[letter];
     console.log(txt[letter])
     letter++;
     if (indexSet == txt.length) clearInterval(indexSet)
 }
 const indexSet = setInterval(addLetter, 50);
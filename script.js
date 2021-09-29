const textSpan = document.querySelector(".text"),
cursor = document.querySelector(".cursor"),
txt = `Lorem ipsum dolor sit amet`

 

let letter = 0;

blinkingCursor = () => {
    cursor.classList.toggle("dissapear");

}



 addLetter = () => {
     
     textSpan.textContent += txt[letter];
     console.log(txt[letter])
     letter++;
     if (letter == txt.length) {
         clearInterval(indexSet)
         setInterval(blinkingCursor, 1000);
        }
 }
 const indexSet = setInterval(addLetter, 50);
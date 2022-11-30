const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
console.log(alphabet);
let randomElement = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(randomElement);
let h3= document.querySelector('h3');
document.body.addEventListener('keyup', function(event) {
    const keyPressed = event.key.toUpperCase();
    console.log(keyPressed);
      if(keyPressed === randomElement) {
      const text = 'SECRET KEY PRESSED';
      h3.append(text);
      randomElement = alphabet[Math.floor(Math.random() * alphabet.length)];
      }
    }
)
    console.log(h3)
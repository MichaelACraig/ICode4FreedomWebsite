const typingElement = document.querySelector('.typing');
const text = ;
let index = 0;

function type() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 1); // Adjust speed (100ms per character)
  }
}

type();
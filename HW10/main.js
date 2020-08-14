const button = document.querySelectorAll("img")
const audio = document.querySelectorAll("audio")

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
      this.classList.add('selected')
      setInterval(() => {
        this.classList.remove('selected')
      }, 1000)
      audio[i].play()
    })
  };

  
 window.addEventListener('keypress', function (event) {
    const keyId = event.keyCode; 
    for (let i = 0; i < button.length; i++) {
        if (button[i].id == keyId) {
          button[i].classList.add('selected')
          setInterval(() => {
            button[i].classList.remove('selected')
          }, 1000)
          audio[i].play()
        }
      }
});

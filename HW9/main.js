function randomColor() {
    
    setInterval(() => {
        let colorArray = document.getElementsByClassName('square');
  
        for (let i = 0 ; i < colorArray.length; i++) {
          const x = Math.floor(Math.random() * 256);
          const y = Math.floor(Math.random() * 256);
          const z = Math.floor(Math.random() * 256);
          colorArray[i].style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
        }
    }, 1000);
}

randomColor();

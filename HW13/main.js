//#Task1
function* generator () { 
    let i = 1;
    while (1 < Infinity) { 
        yield i++;
    }
}
const idGenerator = generator();


const idNumber = document.getElementById('genId')
const getIdButton = document.getElementById("generateId");


getIdButton.addEventListener("click", () => { 
    idNumber.innerHTML = idGenerator.next().value;
});

//#Task2
const getReact = document.getElementById('genSize');
const startValue = 300;

function* generatorSize(value) {
    let act;
    let size = value;

    while (true) {
        act = yield size;
        if (act == 'up') {
             size += 20;
             if (size >= 460)  size = 460
        } else if (act = 'down') {
            size -= 20;
            if (size <= 200)  size = 200
        }
    };
};


const changeSize = generatorSize(startValue)
const getIdButtonPlus = document.getElementById('plus');
const getIdButtonMinus = document.getElementById('minus');
const getReactAnim  = document.querySelector(".react");

getIdButtonMinus.addEventListener('click', () => { 
    getReactAnim.style.cssText = 'width:' + changeSize.next('down').value + 'px';
})

getIdButtonPlus.addEventListener('click', () => { 
    getReactAnim.style.cssText = 'width:' + changeSize.next('up').value + 'px';
})


//animation 

const findContainer = document.getElementById('show');
setTimeout (() => { 
    findContainer.style.cssText = 'opacity: 1'   ;
}, 1800)

console.log("Waiting random chinese glyphs.....")
const time = Date.now()

function getRandomChinese(length) {
    return new Promise((resolve, reject) => {
        length = 4;
        glyphs = "";
        let i = 0;
        if (length <= 0) reject();
        while (i < length) {
            setTimeout(() => {
                glyphs += String.fromCharCode(Date.now().toString().substring(8));
                if (glyphs.length === length) resolve(glyphs);
            }, (i + 1) * 50);
            i++;
        };
    }).then((glyphs) => console.log(glyphs + " за "+ (Date.now()- time +"ms")))
      .catch(() => console.log("enter a number greater than 0 "))
};

export {getRandomChinese}


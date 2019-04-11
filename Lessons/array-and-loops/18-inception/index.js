const stringToBinary = (str, spaceSeparatedOctets) => {
    const zeroPad = (num) => {
        return "00000000".slice(String(num).length) + num;
    }
    return str.replace(/[\s\S]/g, (str) => {
        str = zeroPad(str.charCodeAt().toString(2));
        return !1 == spaceSeparatedOctets ? str : str + " "
    });
};

const binaryToString = (str) => {
    // Removes the spaces from the binary string
    str = str.replace(/\s+/g, '');
    // Pretty (correct) print binary (add a space every 8 characters)
    str = str.match(/.{1,8}/g).join(" ");
    var newBinary = str.split(" ");
    var binaryCode = [];
    for (i = 0; i < newBinary.length; i++) {
        binaryCode.push(String.fromCharCode(parseInt(newBinary[i], 2)));
    }
    return binaryCode.join("");
};

let inception_team = [
    {
        name: "cobb",
        job: "Explorer"
    },
    {
        name: "Arthur",
        job: "Architech"
    },
    {
        name: "Ariadne",
        job: "Architech"
    },
    {
        name: "Emaes",
        job: "Conman"
    },
    {
        name: "Saito",
        job: "Artillery"
    }
]

let new_g = inception_team.map(obj => {
    let name = stringToBinary(obj.name);
    let job = stringToBinary(obj.job);
    return(
        {
            name: name,
            job: job
        }
    )
});

const Translator = (word) =>{
    let translated = binaryToString(word)
    return translated
}

new_g.map(element => {
    Translator(element)
})

let nedd_translate = [
    {
        name: '01100011 01101111 01100010 01100010 ',
        job: '01000101 01111000 01110000 01101100 01101111 01110010 01100101 01110010 ' 
    },
    {
        name: '01000001 01110010 01110100 01101000 01110101 01110010 ',
        job: '01000001 01110010 01100011 01101000 01101001 01110100 01100101 01100011 01101000 '
    },
    {
        name: '01000001 01110010 01101001 01100001 01100100 01101110 01100101 ',
        job: '01000001 01110010 01100011 01101000 01101001 01110100 01100101 01100011 01101000 ' 
    },
    { 
        name: '01000101 01101101 01100001 01100101 01110011 ',
        job: '01000011 01101111 01101110 01101101 01100001 01101110 ' 
    },
    { 
        name: '01010011 01100001 01101001 01110100 01101111 ',
        job: '01000001 01110010 01110100 01101001 01101100 01101100 01100101 01110010 01111001 ' 
    }
]
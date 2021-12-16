// function for generating random number lowercase uppercase letters,symbol
function getRandomlower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomupper() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomnumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomsymbol() {
    let symbol = "!@#$%*()[]=/.,";
    return symbol = [Math.random() * symbol.length];
}

const randomfunc = {
    lower: getRandomlower,
    upper: getRandomupper,
    number: getRandomnumber,
    symbol: getRandomsymbol
};

//adding clike event listner to generate button
const generate = document.getElementById("generateBtn");
generate.addEventListener("click", () => {
    const length = document.getElementById("passwordlength").value;
    const hasupper = document.getElementById("uppercase").checked;
    const haslower = document.getElementById("lowercase").checked;
    const hasnumber = document.getElementById("numbers").checked;
    const hassymbol = document.getElementById("symbols").checked;
    const result = document.getElementById("passwordResult");
    result.innerText = generatepassword(
        haslower,
        hasupper,
        hasnumber,
        hassymbol,
        length
    );
});

// function for generate password
function generatepassword(lower, upper, number, symbol, length) {
    let generatepassword = "";
    const typescount = lower + upper + symbol;
    const typesarr = [{ lower }, { upper }, { number }, { symbol }].filter(
        (item) => Object.values(item)[0]);
    for (let i = 0; i < length; i += typescount) {
        typesarr.forEach((type) => {
            const funcName = Object.keys(type)[0];
            generatepassword += randomfunc[funcName]();
        });
    } const finalpassword = generatepassword.slice(0, length);
    return finalpassword;
}


//function for copy to Clipboard
let button = document.getElementsByTagName("cilpboradBtn");
button.addEventListener("click", (e) => {
    e.prevantDefult();
    document.execCommand(
        "copy",
        "false",
        document.getElementsByTagName("passwordResult").select()
    );
});
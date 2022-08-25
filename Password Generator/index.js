
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const charactersWithoutNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",];

const charactersWithoutSimbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const charactersWithoutNumbersAndSimbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];



const buttonEl = document.getElementById("button");
const passwordLenghtEl = document.getElementById("password-length");

buttonEl.addEventListener("click", () => {
    if (!randomPassword()) {
        return
    }
    document.getElementById("password-one").textContent = generatePassoword();
    });

function generatePassoword () {
    const passwordLenght = parseInt(passwordLenghtEl.value);
    if (!passwordLenght) {
        return
    } 
    if (isChecked("simbols") && !isChecked("numbers")) {
        return randomPassword(charactersWithoutNumbers, passwordLenght);
        
    } else if (!isChecked("simbols") && isChecked("numbers")) {
        return randomPassword(charactersWithoutSimbols, passwordLenght);
    } else if (!isChecked("simbols") && !isChecked("numbers")) {
        return randomPassword(charactersWithoutNumbersAndSimbols, passwordLenght);
    } else {
        return randomPassword(characters, passwordLenght);  
    }
}

function isChecked (element) {
    return document.querySelector(`input[id=${element}]:checked'`) ? true : false;
}

function randomPassword (charactersSet, passwordLenght) {
    return charactersSet.map(() => {
        return  charactersSet[Math.floor(Math.floor(Math.random() * charactersSet.length))];
        }).slice(0,passwordLenght).join("");
}

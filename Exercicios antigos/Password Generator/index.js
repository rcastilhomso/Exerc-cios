
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const buttonEl = document.getElementById("button");
const passwordLenghtEl = document.getElementById("password-length");

buttonEl.addEventListener("click", () => {
    const passwordLenght = parseInt(passwordLenghtEl.value);
    if (!passwordLenght) {
        return
    } 
    const newPassword = characters.map(() => characters[Math.floor(Math.random() * characters.length)]).slice(0, passwordLenght).join("");

    document.getElementById("password-one").textContent = newPassword;

})




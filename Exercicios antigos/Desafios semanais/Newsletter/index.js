/* 
PART 2: STRETCH GOAL

1. Validate that it's an email the user has entered
2. Give feedback as to whether the form was successfully submitted or not
3. Go crazy with the error/success feedback (e.g. animations, sounds)

*/

const email = document.getElementById("email-input")
const form = document.getElementById("myForm")

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let maskedEmail = email.replace(/([^@\.])/g, "*").split('');
    let previous = "";
    for (i = 0; i < maskedEmail.length; i++) {
        if (i <= 1 || previous == "." || previous == "@") {
            maskedEmail[i] = email[i];
        }
        previous = email[i];
    }
    return maskedEmail.join('');
}
)


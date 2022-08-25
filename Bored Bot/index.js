document.getElementById("button").onclick = function () {
    fetch(`https://apis.scrimba.com/bored/api/activity`)
    .then((response) => response.json())
    .then((data => {
            document.getElementById("message").innerHTML = `
            <p>${data.activity}</p>
            <p>It's a ${data.type} activity you can do ${data.participants === 1 ? 'alone' : `with ${data.participants - 1} friends`}.</p>
            ${data.price === 0 ? '<p>It\'s free</p>' : ''}
            `
    }))
}

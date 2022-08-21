// Add your code here
function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            accept: "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(response => response.json())
    .then(data => {
        document.querySelector('body').innerHTML = `<p>id: ${data.id}`;
    })
    .catch(error => {
        alert('an error has occured')
        document.querySelector('body').innerHTML += `<p>${error.message} </p>`
    })
}

submitData("Steve", "steve@steve.com")
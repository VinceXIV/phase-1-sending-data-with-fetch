// Add your code here
const domForm = document.createElement('form')
domForm.innerHTML = `<label for="name">Name</label>
    <input type="text" name="name" id="name">
    <label for="email">Email</label>
    <input type="email" name="email" id="email">
    <input type="submit" value="submit">
    `

const listOfNamesAndEmails = document.createElement('table')
listOfNamesAndEmails.id = 'names-and-emails'
listOfNamesAndEmails.innerHTML = `<thead>
</thead>
<tbody>
</tbody>`


document.querySelector('body').append(domForm)
document.querySelector('body').append(listOfNamesAndEmails)


function getFormData(form){
    return {
        name: form.querySelector('#name').value,
        email: form.querySelector('#email').value
    }
}

function submitData(data){
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            accept: "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log("data", data)
        domForm.reset()
        document.querySelector('#names-and-emails tbody')
        .innerHTML += `<tr style="padding: 15px">
                    <td style="padding: 0 15px">${data.name}</td>
                      <td style="padding:0 15px">${data.email}</td>
                      </tr>`
    })
    .catch(error => {
        alert('an error has occured')
        document.querySelector('body').innerHTML += `<p>${error.message} </p>`
    })
}

domForm.addEventListener('submit', e=>{
    e.preventDefault()
    submitData(getFormData(e.target))
})
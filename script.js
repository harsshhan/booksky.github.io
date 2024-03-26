function plus() {
    var popupoverlay = document.querySelector('.popupoverlay')
    popupoverlay.style.display = "block"
    var popupbox = document.querySelector('.popupbox')
    popupbox.style.display = "block"
}
var popupoverlay = document.querySelector('.popupoverlay')
var popupbox = document.querySelector('.popupbox')
function cancelbtn(event) {
    event.preventDefault()

    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
}

var container = document.querySelector('.container')
var addbook = document.getElementById('add-popup')



addbook.addEventListener('click', function (event) {        // get input from the user and display it in the dashboard
    event.preventDefault()
    var form = document.getElementById('form')
    var bookname = document.getElementById('name').value
    var author = document.getElementById('author').value
    var description = document.getElementById('description').value

    if (bookname !== '' & author !== '' & description !== '') {
        var div = document.createElement(`div`)
        div.setAttribute('class', 'book')
        div.innerHTML = `<h1>${bookname}</h1>
            <h5>${author}</h5>
            <p>${description}</p>
            <div style='display: flex; justify-content: flex-end;'>
            <button onclick="deletebook(event)">Delete</button></div>`

        container.append(div)

        popupoverlay.style.display = "none"
        popupbox.style.display = "none"

        const json = {
            bookname, // "bookname": bookname 
            author,
            description
        }
        // console.log(json)
        // console.log(JSON.stringify(json))

        const oldData = window.localStorage.getItem('data')
        const data = JSON.parse((oldData && oldData[0]) ? oldData : '[]')

        data.push(JSON.stringify(json))


        window.localStorage.setItem('data', JSON.stringify(data))

        form.reset()
    }
    else {
        alert("Fill all the field")
    }


})

function deletebook(event) {                //delete the book details
    event.target.parentElement.remove()
}

window.addEventListener('DOMContentLoaded', function () {
    // console.log(window.localStorage.getItem('data'))
    console.log('Im loaded')

    const data = JSON.parse(window.localStorage.getItem('data'))
    const arr = []
    console.log()
    data.forEach(elem => {
        arr.push(JSON.parse(elem))
    })
    // console.log(arr) // Its an array
})
function plus(){
    var popupoverlay=document.querySelector('.popupoverlay')
    popupoverlay.style.display="block"
    var popupbox=document.querySelector('.popupbox')
    popupbox.style.display="block"
}
var popupoverlay=document.querySelector('.popupoverlay')
var popupbox=document.querySelector('.popupbox')
function cancelbtn(event){
    event.preventDefault()

    popupoverlay.style.display="none"
    popupbox.style.display="none"
}

var container=document.querySelector('.container')
var addbook=document.getElementById('add-popup')



addbook.addEventListener('click',function(event){
    event.preventDefault()
    var form=document.getElementById('form')
    var bookname=document.getElementById('name').value
    var author=document.getElementById('author').value
    var description=document.getElementById('description').value
    
    if(bookname!==''&author!==''&description!==''){
            var div=document.createElement(div)
            div.setAttribute('class','book')
            div.innerHTML=`<h1>${bookname}</h1>
            <h5>${author}</h5>
            <p>${description}</p>
            <button onclick="deletebook(event)">Delete</button>`
        
            container.append(div)

            popupoverlay.style.display="none"
            popupbox.style.display="none" 
            form.reset()
    }
    else{
        alert("Fill all the field")
    }


})

function deletebook(event){
    event.target.parentElement.remove()
}
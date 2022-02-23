const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")






const addMovie = function(event) {
event.preventDefault()
const li = document.createElement('li')
const span = document.createElement('span')
const deleteButton = document.createElement('button')
span.textContent = input.value
span.addEventListener("click", crossoutFuncton)
li.appendChild(span)
deleteButton.textContent = "X"
deleteButton.addEventListener("click", deleteFunction)
li.appendChild(deleteButton)
ul.append(li)
message("Movie added!!")
}

const deleteFunction = (event) => {
    event.stopPropagation()
    event.target.parentNode.remove()
    message("movie deleted!")
}

const crossoutFuncton = (event) => {
    event.stopPropagation()
    message("Movie Crossed Out!")
    if (event.target.classList.contains("checked")) {
        event.target.classList.remove("checked")
        return
    }
    event.target.className = "checked"
    
}

let message = function (message) {
    alert(message)
    const messagevar = document.querySelector("#message")
    messagevar.textContent = message
    messagevar.classList.remove("hide")
    setTimeout(() => {
        messagevar.className = "hide"
    }, 1000);

    console.log("alled")

}


form.addEventListener("submit", addMovie)
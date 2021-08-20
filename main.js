document.body.style.border = "5px solid red"

let content = document.body.innerHTML
let search = `class="tw-absolute crow-icon">`

if (content.includes(search)) {
  consol.log("se encontro cuevito")
}

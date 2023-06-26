const bubble = document.querySelector('.bubble')
const changeColor = document.querySelector('.change-color')
const userList = document.querySelectorAll('.name-list li')
const listInput = document.querySelector('.list-input')
const addListBtn = document.querySelector(".addListBtn")

addListBtn.addEventListener('click', function() {
  const newLi = document.createElement('LI')
  const liContent = document.createTextNode(listInput.value)
  newLi.appendChild(liContent)
  userList[3].appendChild(newLi)
})

// to set the color of the name to red whenever a certain name has been clicked

// for(user of userList) {
//   user.addEventListener('click', function() {
//    this.style.color= "red"
//   })
// }

changeColor.addEventListener('click', function() {
  bubble.classList.toggle('change')
})
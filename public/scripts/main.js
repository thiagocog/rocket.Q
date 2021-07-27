import Modal from './modal.js'

const modal = Modal()

const checkButtons = document.querySelectorAll('.actions a.check')
const cancelButton = document.querySelector('.button.cancel')

checkButtons.forEach(button => button.addEventListener('click', modal.open))

cancelButton.addEventListener('click', modal.close)


import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal-wrapper .modal h2')
const modalQuestion = document.querySelector('.modal-wrapper .modal p')
const modalButton = document.querySelector('.modal-wrapper .modal .buttons button')

const checkButtons = document.querySelectorAll('.actions a.check')
const deleteButtons = document.querySelectorAll('.actions a.delete')
const cancelButton = document.querySelector('.button.cancel')

checkButtons.forEach(button => button.addEventListener('click', (event) => handleClick(event, true)))
deleteButtons.forEach(button => button.addEventListener('click', handleClick))

cancelButton.addEventListener('click', modal.close)



function handleClick(event, check = false) {
  event.preventDefault()
  modalTitle.innerHTML = check ? 'Marcar como lida' : 'Excluir Pergunta'
  modalQuestion.innerHTML = check ? 'Tem certeza de que deseja marcar como lida essa pergunta?' : 'Tem certeza de que deseja excluir essa pergunta?'
  modalButton.innerHTML = check ? 'Sim, marcar como lida' : 'Sim, excluir'
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
  modal.open() 

  const form = document.querySelector('.modal-wrapper .modal form')
  const roomId = document.querySelector('#room-id').dataset.id
  const questionId = event.target.dataset.id
  const slug = check ? 'check' : 'delete'
  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

} 

// parei na aula 04 ao minuto 2:08:55
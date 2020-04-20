const chatList = document.querySelector('.chat-list')
const newChatForm = document.querySelector('.new-chat')
const newNameForm = document.querySelector('.new-name')
const updateMsg = document.querySelector('.update-msg')

newChatForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = newChatForm.message.value.trim()
    chat.addChat(message)
        .then(() => newChatForm.reset())
        .catch(console.log)
})

newNameForm.addEventListener('submit', e => {
    e.preventDefault()
    const newName = newNameForm.name.value.trim()
    chat.updateUsername(newName)
    newNameForm.reset()
    updateMsg.innerText = `Your name was updated to ${ newName }`
    setTimeout(() => {
        updateMsg.innerText = ``
    }, 3000)
})

const username = localStorage.username ? localStorage.username : 'Anonymous'

const chat = new Chatroom(username, 'general')
const chatUI = new ChatUI(chatList)


chat.getChats(data => chatUI.render(data))



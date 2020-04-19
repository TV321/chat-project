const chatList = document.querySelector('.chat-list')
const newChatForm = document.querySelector('.new-chat')

newChatForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = newChatForm.message.value.trim()
    chat.addChat(message)
        .then(() => newChatForm.reset())
        .catch(console.log)
})

const chat = new Chatroom('jack', 'general')
const chatUI = new ChatUI(chatList)


chat.getChats(data => chatUI.render(data))



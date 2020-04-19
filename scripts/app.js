const chatList = document.querySelector('.chat-list')

const chat = new Chatroom('jack', 'general')
const chatUI = new ChatUI(chatList)


chat.getChats(data => chatUI.render(data))
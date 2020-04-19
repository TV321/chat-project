
class Chatroom {
    constructor(username, room) {
        this.username = username
        this.room = room
        this.chats = db.collection('chats')
    }
    async addChat(message){
        const now = new Date()
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }
        const response = await this.chats.add(chat)
        return response
    }
    getChats(callback) {
        this.chats.onSnapshot(snapshot =>{
            snapshot.docChanges().forEach(change => {
                if(change.type === 'added') {
                    callback(change.doc.data())
                }
            })
        })
    }
}

const chat = new Chatroom('jack', 'general')

chat.getChats((data) => {
    console.log(data)
})
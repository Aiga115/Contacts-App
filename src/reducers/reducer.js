export const reducer = (state,action)=>{
    var contacts = JSON.parse(localStorage.getItem('contacts'))
    switch(action.type){
        case 'INSERT':
            contacts.push(action.payload)
            localStorage.setItem('contacts', JSON.stringify(contacts))
            return { contacts, currentIndex: -1 }
        case 'UPDATE':
            contacts[state.currentIndex] = action.payload
            localStorage.setItem('contacts', JSON.stringify(contacts))
            return { contacts, currentIndex: -1 }
        case 'UPDATE-INDEX':
            return { contacts, currentIndex: action.payload }
    
        case 'DELETE':
            contacts.splice(action.payload, 1)
            localStorage.setItem('contacts', JSON.stringify(contacts))
            return { contacts, currentIndex: -1 }  

        default:
            return state;
    }
}
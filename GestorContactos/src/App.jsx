import { useState } from 'react'
import './App.css'

function App() {
  const [contacts, setContacts] = useState([]);
  function addContact(name, phone) {

    if (name.trim() !== "" && phone.trim() !== "") {

      const newContact = {
        id: Date.now(),
        name: name,
        phone: phone
      }

      setContacts([...contacts, newContact]);

    }
  }

  function delContact(id){
    setContacts(contacts.filter(c => c.id !== id));
  }
  
  return (
    <>

    </>
  )

}

export default App;

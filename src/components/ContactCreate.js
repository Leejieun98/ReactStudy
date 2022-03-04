import {useState} from 'react';

function ContactCreate({id, contactData,setContactData}){

    const [name,setName]= useState('');
    const [phone,setPhone]= useState('');
    const inputChange= (e)=> {
        switch(e.target.name){
            case "name": return setName(e.target.value);
            case "phone": return setPhone(e.target.value);
        }
    }
    const ButtonClick= (e)=> {
        console.log('헿')
        const newContact= { id: id++, name: name, phone: phone };
        setName(''); 
        setPhone('');
        return setContactData([...contactData, newContact]);
    }

    console.log(name, phone)
    return (
        <div>
            <h2>Create New User</h2>
            <input type="text" name="name" placeholder="name" onChange={inputChange} value={name}/>
            <input type="text"name="phone" placeholder="phone" onChange={inputChange} value={phone}/>
            <div><button name="create" onClick={ButtonClick}>Create new user</button></div>
        </div>
    );
}
export default ContactCreate;
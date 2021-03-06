import {useState} from 'react';
import ContactInfo from "./ContactInfo";
import ContactDetail from "./ContactDetail";
import ContactCreate from "./ContactCreate";         

function Contact({onSearch, onShowDetail, onCreateNew}){
    //const [keyword, setKeyword]= useState('');
    // const id=5;
    // const [selectedKey, setSelectedKey]= useState(-1);

    // const searchContact= (e)=> {
    //     setKeyword(e.target.value);
    // } 
    // const handleNameClick= (key)=> { console.log(key)
    //     setSelectedKey(key);
    // }

    return (
        <div>
            <h1>Contact</h1>
            <input name='keyword' placeholder='Search' onChange={onSearch}/>
            {/* <ContactInfo contactDataCopy={contactDataCopy} handleNameClick={handleNameClick} 
                keyword={keyword} />
            <ContactDetail contactData={contactData} selectedKey={selectedKey} />
            <ContactCreate id={id} contactData={contactData} setContactData={setContactData}/> */}
        </div>
        
    );
}
export default Contact;
/*
검색할때 t o m 한글자씩 리랜더링되게해서(onChange로 state값관리) 엔터로검색, 
tom 여러글자씩 리랜더링되게해서(state값을 어떻게 관리하지?) 엔터로 검색, 
네이버처럼 t칠때 리랜더링되고 t연관검색어뜨고 to칠때 리랜더링되고 to연관검색어뜨고
엔터누르면 검색되게 (이렇게는 어떻게 하는거지?)
*/
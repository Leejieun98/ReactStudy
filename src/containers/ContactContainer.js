import {useSelector, useDispatch} from 'react-redux';

import Contact from "./Contact";

// import {search, showDetail, createNew} from '../modules/contact';


function ContactContainer(){
   
const dispatch= useDispatch();
const onSearch = dispatch({type: 'SEARCH'}); 
    //const onSearch= (e)=> dispatch(search());
    // const onShowDetail= ()=> dispatch(showDetail());
    // const onCreateNew= id=> dispatch(createNew());

    return (
        <Contact onSearch={onSearch}/> 

    );
}

export default ContactContainer;
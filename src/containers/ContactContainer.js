import {useSelector, useDispatch} from 'react-redux';
import Contact from "./Contact";
import {connect} from 'react-redux'
import contactReducer, {SEARCH} from "../modules/contactReducer";

// import {search, showDetail, createNew} from '../modules/contact';


const ContactContainer= ({SEARCH,member}) =>{
   
console.log(SEARCH);
console.log(member);
    //const onSearch= (e)=> dispatch(search());
    // const onShowDetail= ()=> dispatch(showDetail());
    // const onCreateNew= id=> dispatch(createNew());

    return <div> <div>{SEARCH}</div>
        <div>member</div></div>
    /*    <Contact onSearch={onSearch}/>*/
    ;
}
const mapStateToProps = (state)=>{
    return { member:state.contactReducer.initialState}
}
const mapDispatchToProps = (dispatch)=>{
    return { search : ()=>dispatch(SEARCH)}
}
export default connect(mapStateToProps,mapDispatchToProps)(ContactContainer);
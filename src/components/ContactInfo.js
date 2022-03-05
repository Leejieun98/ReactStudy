/*
function ContactInfo({contactDataCopy,handleNameClick,keyword}){

    contactDataCopy.sort((a,b)=> {
        const upperCaseA = a.name.toUpperCase();
        const upperCaseB = b.name.toUpperCase();
        
        if(upperCaseA > upperCaseB) return 1;
        if(upperCaseA < upperCaseB) return -1;
        if(upperCaseA === upperCaseB) return 0;
    });
    const contactDataCopyList= contactDataCopy.filter((contact)=> {
        return contact.name.toLowerCase().indexOf(keyword.toLowerCase())> -1;
    }); 
    const contactDataList= contactDataCopyList.map(contact=> 
        (<div className="contactDataList" key={contact.id} onClick={()=> handleNameClick(contact.id)}>
            {contact.name}</div>)
    );

    return (
        <div>
            {contactDataList}
        </div>
    );
}
export default ContactInfo;*/



import { useDispatch, useSelector } from "react-redux";
import contactReducer, {initialState} from "../modules/contactReducer";
import rootReducer from "../modules";

const  ContactInfo=({state}) =>{
    const dispatch = useDispatch();
    const member = useSelector(({ contactReducer }) => contactReducer);


    let mem=''
     mem = member.map(meme=>(
        <div key={meme.id}>{meme.name}</div>
    ))

    dispatch({
        type: types.UPDATE_AM_SLIP_REQUEST,
        params: { approvalData: approvalData },
    });

    return (
        <div>

            {mem}
        </div>
    );
}
export default ContactInfo;
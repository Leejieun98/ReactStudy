function ContactDetail({contactData,selectedKey}){
    console.log(contactData)
    return (
        <div>
            <h2>Detail Information</h2>
            {selectedKey}
        </div>
    );
}
export default ContactDetail;
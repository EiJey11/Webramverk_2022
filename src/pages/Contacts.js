import './Contacts.css'

const Contacts = () => {
    return (
        <div className='container_contacts'>
            <div className='contacts_content'>
                <h1>Contacts</h1>
                <h3 className='contacts_h3'>Our contacts:</h3>
                <hr className='contacts_hr'/>
                <p className='contacts_text'>Kaserngatan 1<br/>
                Norrtälje, Sverige<br/>
                aj@red-moon.se</p>

            </div>
        </div>
    )
}

export {Contacts}
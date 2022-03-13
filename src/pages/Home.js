import './Home.css'
import { Modal } from '../components/Modal'
import { useState } from 'react'

const Home = () => {

    const[modal, setModal] = useState({
        title: false,
    })

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const submit = (e) => {
    e.preventDefault();
    console.log(name, password);
  };

    return (
        <div className='container_homepage'>
            <div className="homepage_content">
                <h1>RED-Moon</h1>
                <h3>This is a RED-Moon web studio homepage.</h3>
                <button className='login_btn' onClick={() =>setModal({title: true})}>LOGIN</button>
                <Modal
                    title ={'Login'}
                    isOpened = {modal.title}
                    onModalClose = {() => setModal({title:false})}
                >
                    <form className='form_container' onSubmit={submit}>
                        <label>
                            <input
                            value={name}
                            onChange={event => setName(event.target.value)}
                            placeholder="Login"
                            name="name"
                            type="text"
                            />
                        </label>
                            <label>
                            <input
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            placeholder="Password"
                            name="password"
                            type="password"
                            />
                        </label>
                            <button className='form_btn'>SEND</button>
                        </form>
                </Modal>
            </div>
        </div>
    )
}

export {Home}
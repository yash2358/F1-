import React from 'react'
import ContactI from '../images/contact.jpeg'
import { useState } from 'react'
import './Register.css'
import { useAuth } from '../store/auth'
import { useEffect } from 'react'
import { toast } from 'react-toastify';

const Contact = () => {

    const { user, token ,apiUrl} = useAuth();
    useEffect(()=>{
        if (user && token) {
        setContact({
            username: user.username,
            email: user.email,
            message: ""
        })
    }
    },[user,token])
    const [contact, setContact] = useState(
        {
            username: "",
            email: "",
            message: ""
        }
    )
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setContact({
            ...contact,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${apiUrl}/api/form/contact`, {
            method: "POST",
            body: JSON.stringify(contact),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                toast(res.message);
                setContact({
                    username: "",
                    email: "",
                    message: ""
                })
            })
            .catch((err) => {
                toast(err)
            });
    }



    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img src={ContactI} alt="" width="400" height="400"></img>
                            </div>
                            <div className="registration-form">
                                <h1>Contact Us</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor='username'>UserName</label><br />
                                        <input
                                            type='text' name='username' placeholder='Louis Hamilton' id='username' required
                                            value={contact.username} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor='email'>email</label><br />
                                        <input type='email' name='email' placeholder='email' id='email' required
                                            value={contact.email} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor='text'>message</label><br />
                                        <textarea type='text' name='message' placeholder='message' id='email' required
                                            value={contact.message} onChange={handleInput} rows={10} style={{ width: "200px" }} />
                                    </div>
                                    <br />
                                    <button type='submit' style={{ cursor: "pointer" }}> Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <section>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.978001645536!2d77.32403367449139!3d28.570423286900226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce593d16a565f%3A0x6ab074cb4f19ec23!2sMetro!5e0!3m2!1sen!2sin!4v1754635940476!5m2!1sen!2sin" width="100%" height="450" allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </section>
                </main>
            </section>
        </>
    )
}

export default Contact
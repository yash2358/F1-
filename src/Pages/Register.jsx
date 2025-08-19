import React from 'react'
import register from '../images/register.png'
import { useState } from 'react'
import './Register.css'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import { useAuth } from '../store/auth'

const Register = () => {
    const navigate=useNavigate()
   const {apiUrl}=useAuth()
    const [user, setUser] = useState(
        {
            username: "",
            email: "",
            phone: "",
            password: ""
        }
    )

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${apiUrl}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })

            const res = await response.json();
            
            if (res.token) {
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    password: ""
                })
                navigate('/login');
                toast.success(res.message)
                // localStorage.setItem("token",res.token)
            }
            else{
                toast.error(res.message)
            }
        }
        catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img src={register} alt="" width="400" height="400"></img>
                            </div>
                            <div className="registration-form">
                                <h1>Registration Form</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor='username'>UserName</label><br />
                                        <input
                                            type='text' name='username' placeholder='Louis Hamilton' id='username' required
                                            value={user.username} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor='email'>email</label><br />
                                        <input type='email' name='email' placeholder='email' id='email' required
                                            value={user.email} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor='phone'>phone</label><br />
                                        <input type='number' name='phone' placeholder='phone' id='email' required
                                            value={user.phone} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor='password'>password</label><br />
                                        <input type='password' name='password' placeholder='password' id='email' required
                                            value={user.password} onChange={handleInput} />
                                    </div>
                                    <br />
                                    <button type='submit' style={{ cursor: "pointer" }}> Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Register
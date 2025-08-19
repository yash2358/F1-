import React from 'react'
import register from '../images/register.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate()
    const {storeToken,apiUrl}=useAuth();
    const [user, setUser] = useState(
        {
            email: "",
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
            const response = await fetch(`${apiUrl}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })

            const res = await response.json();
            if (res.token) {
                setUser({
                    email: "",
                    password: ""
                })
                navigate('/')
                storeToken(res.token)
                toast.success(res.message)
            }
            else {
                toast.error(res.message)
            }
        }
        catch (error) {
            toast.error(err)
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
                                <h1>Login Form</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor='email'>email</label><br />
                                        <input type='email' name='email' placeholder='email' id='email' required
                                            value={user.email} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor='password'>password</label><br />
                                        <input type='password' name='password' placeholder='password' id='email' required
                                            value={user.password} onChange={handleInput} />
                                    </div>
                                    <br />
                                    <button type='submit' style={{ cursor: "pointer" }}> Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Login
import React from 'react'
import { useAuth } from '../store/auth';
import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { toast } from 'react-toastify';

const GetUser = () => {
    const { token, apiUrl } = useAuth();
    const [form, setForm] = useState({ username: '', email: '', phone: '', isAdmin: false });
    const [submitting, setSubmitting] = useState(false);
    const params = useParams();
    useEffect(() => {
        fetch(`${apiUrl}/api/admin/getuser/${params.id}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.success) {
                    setForm(response.data);
                } else {
                    toast(response.message)
                }
            })
            .catch((err) => toast(err))
    }, [params.id, token]);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setForm({
            ...form,
            [name]: value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        // TODO: Replace with your update API endpoint
        try {
            const res = await fetch(`${apiUrl}/api/admin/updateuser/${params.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (data.success) {
                toast.success(data.message);
            } else {
                toast.error(data.message || 'Failed to update user');
            }
        } catch (err) {
            toast.error(err.message);
        }
        setSubmitting(false);
    };

    return (
        <>
            <section style={{ minHeight: '80vh', background: '#181818', padding: '2rem 0' }}>
                <div style={{ maxWidth: '500px', margin: '0 auto', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', overflow: 'hidden', padding: '2rem' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#222' }}>Edit User</h2>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '1.2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333' }}>Name</label>
                            <input
                                type="text"
                                name="username"
                                value={form.username}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #eaeaea', fontSize: '1rem' }}
                            />
                        </div>
                        <div style={{ marginBottom: '1.2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333' }}>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #eaeaea', fontSize: '1rem' }}
                            />
                        </div>
                        <div style={{ marginBottom: '1.2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333' }}>Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #eaeaea', fontSize: '1rem' }}
                            />
                        </div>
                        <div style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'center' }}>
                            <input
                                type="checkbox"
                                name="isAdmin"
                                id="isAdmin"
                                checked={!!form.isAdmin}
                                onChange={handleChange}
                                style={{ marginRight: '0.5rem' }}
                            />
                            <label htmlFor="isAdmin" style={{ color: '#333', fontWeight: 500, fontSize: "15px" }}>Is Admin</label>
                        </div>
                        <button
                            type="submit"
                            disabled={submitting}
                            style={{ width: '100%', background: '#6366f1', color: '#fff', border: 'none', borderRadius: '8px', padding: '0.8rem', fontWeight: 600, fontSize: '1.1rem', cursor: submitting ? 'not-allowed' : 'pointer' }}
                        >
                            {submitting ? 'Submitting...' : 'Update User'}
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default GetUser
import React from 'react'
import { useAuth } from '../store/auth';
import { useState, useEffect } from 'react';

const AdminContact = () => {
    const { token,apiUrl } = useAuth()
    const [contacts, setContacts] = useState();
    useEffect(() => {
        fetch(`${apiUrl}/api/admin/contacts`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.success) setContacts(response.data);
                else {
                    toast(response.message)
                }
            })
            .catch((err) => toast(err))
    }, []);


    const deleteContact = async (id) => {
            try {
                const res =await fetch(`${apiUrl}/api/admin/deletecontact/${id}`, {
                    method: "Delete",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                })
                const response = await res.json();
                
                if (response.success) toast.success(response.message)
                else {
                    toast.error(response.message)
                }
    
            }
            catch (error) {
                toast(error.message)
            }
        }
    return (
        <section style={{ minHeight: '80vh', background: '#181818', padding: '2rem 0' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'inherit' }}>
                    <thead>
                        <tr style={{ background: '#fff', color: '#222', fontWeight: 600, fontSize: '1.1rem' }}>
                            <th style={{ padding: '1.2rem 0.5rem', borderBottom: '2px solid #eaeaea' }}>Name</th>
                            <th style={{ padding: '1.2rem 0.5rem', borderBottom: '2px solid #eaeaea' }}>Email</th>
                            <th style={{ padding: '1.2rem 0.5rem', borderBottom: '2px solid #eaeaea' }}>Message</th>
                            <th style={{ padding: '1.2rem 0.5rem', borderBottom: '2px solid #eaeaea' }}>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(contacts) && contacts.length > 0 ? (
                            contacts.map((user, idx) => (
                                <tr key={user._id || idx} style={{ borderBottom: '2px solid #eaeaea', textAlign: 'center' }}>
                                    <td style={{ padding: '1.1rem 0.5rem' }}>{user.username || '-'}</td>
                                    <td style={{ padding: '1.1rem 0.5rem' }}>{user.email || '-'}</td>
                                    <td style={{ padding: '1.1rem 0.5rem' }}>{user.message || '-'}</td>
                                    <td style={{ padding: '1.1rem 0.5rem' }}>
                                        <button 
                                        onClick={()=>deleteContact(user._id)} style={{ background: '#e74c3c', color: '#fff', border: 'none', borderRadius: '4px', padding: '0.5rem 1rem', cursor: 'pointer' }}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} style={{ padding: '2rem', color: '#888', textAlign: 'center' }}>No contacts found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default AdminContact
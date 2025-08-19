import React from 'react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useAuth } from '../store/auth';
import { Link, Outlet } from 'react-router-dom';

const AdminUser = () => {
    const { token,apiUrl } = useAuth()
    const [users, setUsers] = useState();
    useEffect(() => {
        fetch(`${apiUrl}/api/admin/users`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.success) setUsers(response.data);
                else {
                    toast(response.message)
                }
            })
            .catch((err) => toast(err))
    }, [])

    const deleteUser = async (id) => {
        try {
            const res =await fetch(`${apiUrl}/api/admin/deleteUser/${id}`, {
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
        <>
            <section style={{ minHeight: '80vh', background: '#181818', padding: '2rem 0' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'inherit' }}>
                        <thead>
                            <tr style={{ background: '#fff', color: '#222', fontWeight: 600, fontSize: '1.1rem' }}>
                                <th style={{ padding: '1.2rem 0.5rem', borderBottom: '2px solid #eaeaea' }}>Name</th>
                                <th style={{ padding: '1.2rem 0.5rem', borderBottom: '2px solid #eaeaea' }}>Email</th>
                                <th style={{ padding: '1.2rem 0.5rem', borderBottom: '2px solid #eaeaea' }}>Phone</th>
                                <th style={{ padding: '1.2rem 0.5rem', borderBottom: '2px solid #eaeaea' }}>Update</th>
                                <th style={{ padding: '1.2rem 0.5rem', borderBottom: '2px solid #eaeaea' }}>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(users) && users.length > 0 ? (
                                users.map((user, idx) =>
                                     (
                                    <tr key={user._id || idx} style={{ borderBottom: '2px solid #eaeaea', textAlign: 'center' }}>
                                        <td style={{ padding: '1.1rem 0.5rem' }}>{user.username || '-'}</td>
                                        <td style={{ padding: '1.1rem 0.5rem' }}>{user.email || '-'}</td>
                                        <td style={{ padding: '1.1rem 0.5rem' }}>{user.phone || '-'}</td>
                                        <td style={{ padding: '1.1rem 0.5rem' }}>
                                           <Link to={`/admin/users/${user._id}/edit`}>Edit</Link>
                                        </td>
                                        <td style={{ padding: '1.1rem 0.5rem' }}>
                                            <button disabled={user.isAdmin}
                                                onClick={() => deleteUser(user._id)} style={{ background: '#6366f1', color: '#fff', border: 'none', borderRadius: '8px', padding: '0.4rem 1.2rem', fontWeight: 500, fontSize: '1rem', cursor: user.isAdmin ? 'not-allowed' : 'pointer' }}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} style={{ padding: '2rem', color: '#888', textAlign: 'center' }}>No users found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
            <Outlet />
        </>
    );
}

export default AdminUser;
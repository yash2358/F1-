import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ContactI from '../images/contact.jpeg'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../store/auth'

const Service = () => {
  const {apiUrl}=useAuth();
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch(`${apiUrl}/api/data/service`)
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          setService(res.data)
        }
      })
      .catch((err) => {
        toast.error(err.message)
      })

  }, [])

  const navigate = useNavigate()
  return (
    <section style={{ minHeight: '80vh', background: '#f5f6fa', padding: '2rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ color: '#273c75', textAlign: 'center', marginBottom: '2rem', fontSize: '2.2rem' }}>Our Services</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {service.length === 0 ? (
            <div style={{ color: '#888', fontSize: '1.2rem' }}>No services available.</div>
          ) : (
            service.map((item, idx) => (
              <div key={item._id || idx} style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', width: '320px', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.2s', cursor: 'pointer' }}>
                <img
                  src={ContactI}
                  alt={item.name || 'Service'}
                  style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1rem' }}
                />
                <h2 style={{ color: '#273c75', fontSize: '1.3rem', marginBottom: '0.5rem', textAlign: 'center' }}>{item.service || 'Service Name'}</h2>
                <h3 style={{ color: 'green', fontSize: '1.3rem', marginBottom: '0.5rem', textAlign: 'center' }}>{item.provider || 'Provider Name'}</h3>
                <p style={{ color: '#555', fontSize: '1rem', textAlign: 'center', marginBottom: '1rem' }}>{item.description || 'No description available.'}</p>
                {item.price && (
                  <div style={{ color: '#e84118', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem' }}>₹{item.price}</div>
                )}
                <button style={{ background: '#273c75', color: '#fff', border: 'none', borderRadius: '8px', padding: '0.6rem 1.5rem', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}
                  onClick={() => navigate('/about')}>
                  Learn More
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Service
import React, { useState, useRef } from 'react'
import './Login.css'
import Title from './Title.js'

const Login = () => {

  const [email, setEmail] = useState('' )
  const focusRef = useRef(null)

  function handleChange (e) {
    setEmail(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()
    focusRef.current.focus()
    setEmail('')
  }

  return (
    <section className='login'>
      <form onSubmit={handleSubmit} >
        <Title text='Newsletter' />
        <h1>Subscribe To Our Newsletter</h1>
        <p>And Never Miss Latest Updates!</p>
        <div className='wrapper'>
          <label>Email Address</label>
          <input 
            type='email' 
            placeholder='example@123.com' 
            onChange={handleChange}
            value={email}
            name='email'
            ref={focusRef}
            />
        </div>
        <button className='subscribe'>Subscribe</button>
      </form>
    </section>
  )
}

export default Login
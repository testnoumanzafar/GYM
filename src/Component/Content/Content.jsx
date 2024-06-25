import React from 'react'
import { useState } from 'react'
import "./Content.css"
// import { ClipLoader } from "react-spinners";
import {ClipLoader} from "react-spinners"
const Content = () => {
 let    [name,setName]=useState('')
 let    [email,setEmail]=useState('')
 let    [message,setMessage]=useState('')
 let    [loading,setLoading]=useState(false)
 console.log(name);
 console.log(email);
  return (
    <section className="contact">
    <form  >
      <h1>CONTACT US</h1>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Message</label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
        }}
      >
        {loading &&   <ClipLoader size={20} color='white'/>
        }
        Send Message
      </button>
    </form>
  </section>
  )
}

export default Content
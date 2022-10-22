import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React,{useContext} from 'react'
import {Context} from '../context'

import {useRouter} from 'next/router'
import axios from 'axios'

export default function Auth() {
  const {setUsername,setSecret,secret,username}=useContext(Context)

  const router = useRouter();

  function Onsubmit(e){
    e.preventDefault()
    if (username.length === 0 || secret.length ===0 )return;
    axios.put(
      "https://api.chatengine.io/users/",
      {username,secret},
      {headers:{"Private-key":"4b7d79dd-3860-4462-a829-94c86b04524e"}}
    ).then((r)=>router.push('/chat'))
  }
  return (
  <div className='background'>
    <div className="auth-container" >
      <form className="auth-form" onSubmit ={(e)=>Onsubmit(e)}>
        <div className="auth-title">NEXTCHAT</div>
        <div className="input-container">
        <input placeholder='Email' className='text-input' onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="input-container">
        <input type="password" className='text-input' placeholder='Password' onChange={e => setSecret(e.target.value)} />
        </div>
        <button type="submit" className = "submit-button">
          Login/Signup
        </button>
      
      </form>
    </div>
  </div>)
}

import { useState } from 'react'
import '../App.css'
import PasswordInput from './PasswordInput'
import SubmitButton from './SubmitButton'

function App() {

  return (
    <div>
      <h1>Enter your password</h1>
      <PasswordInput/>
      <SubmitButton/>
    </div>
  )
}

export default App

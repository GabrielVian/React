import { useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm'

function App(){
  const [isShowingPass, setIsShowingPass] = useState(false) 
  return (
    <>
      <LoginForm 
        isShowingPass={isShowingPass}
        setIsShowingPass={setIsShowingPass}
      />
    </>
  )
}



export default App

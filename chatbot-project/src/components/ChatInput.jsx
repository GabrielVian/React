import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'

export function ChatInput({chatMessages, setChatMessages}) {

  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  function saveInputText(event){
    setInputText(event.target.value)
  }

  async function sendMessage() {
    if(isLoading){
      alert("Robot is thinking")
      return;
    }
    if(inputText === '') {
      alert("Empty text input")
      return;
    }
    setInputText('');
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ]
    setChatMessages(newChatMessages)

    const loadingChatMessages = newChatMessages
    setChatMessages([
      ...loadingChatMessages,
      {
        message: "Loading...",
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);
    setIsLoading(true)

    const response = await Chatbot.getResponseAsync(inputText)
    
    setIsLoading(false)
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);

  }

  function handleKeyDown(event){
    if(event.key === 'Enter')
      sendMessage()
    if(event.key === 'Escape')
      setInputText('')
  }

  return (
    <div className='text-container'>
      <input 
        placeholder="Send a message to ChatBot" 
        size="30" 
        onChange={saveInputText}
        value={inputText}
        onKeyDown={handleKeyDown}
        className='input-text'
      /> 
      <button 
        onClick={sendMessage} 
        className='send-button'
      >Send</button>
    </div>
  );
}
import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import './ChatMessage.css'

export function ChatMessage({message, sender}) {

  return (
    <div className={sender === 'robot'  
                    ? 'message-conteiner-bot' 
                    : 'message-conteiner-user'}>
      {sender === "robot" && (
        <img 
          src={RobotProfileImage}
          alt="Robot" 
          width="50"
          height="50" 
        />
      )}
      <div className='message'>
        {message}
      </div>
      {sender === "user" && (
        <img 
          src={UserProfileImage} 
          alt="User" 
          width="50" 
          height="50" 
        />
      )}
    </div>
  );
}
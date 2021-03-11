import { useEffect, useState } from 'react'
import MessageBox from '../components/MessageBox'

export default function Home() {
  const [statusShow, setStatusShow] = useState(true)
  const [textMessage, setTextMessage] = useState('hello world')

  const hideMessage = () => setStatusShow(false)

  setTimeout(() => {
    statusShow ? hideMessage() : null
  }, 1000 * 10);
  setTimeout(() => {
    setTextMessage('asdasd')
  }, 1000 * 5);

  return (
    <div>
      <MessageBox show={statusShow} close={hideMessage} text={textMessage}/>
    </div>
  )
}

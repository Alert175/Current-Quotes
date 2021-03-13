import { useEffect, useState } from 'react'
import MessageBox from '../components/MessageBox'
import Navbar from '../components/Navbar'

// create Context API
const alertBox = {
  text: 'hello world',
  type: 'primary'
}

const ContextAlertBox = React.createContext(alertBox)

export default function Home() {
  return (
    <>
      <MessageBox/>
      <Navbar/>
    </>
  )
}

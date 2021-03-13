import MessageBox from '../components/MessageBox'
import Navbar from '../components/Navbar'

import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {
  const [dataQuotes, setDataQuotes] = useState(null)

  const getData = async () => {
    if(dataQuotes === null){
      const response = await axios.get('/api/curentQuotes')
      if (response.data) {
        setDataQuotes(response.data)
      }
    }
  }

  getData()

  return (
    <>
      <MessageBox/>
      <Navbar/>
      {
        dataQuotes !== null ? dataQuotes.date : null
      }
    </>
  )
}

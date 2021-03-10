import { useEffect } from 'react'
import Test from '../components/test/index'

export default function Home() {
  useEffect(() => {
    console.log('asasdasdd');
  })
  return (
    <div>
      <Test/>
    </div>
  )
}

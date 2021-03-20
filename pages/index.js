import { observer } from "mobx-react-lite";

import theme from '../store/theme'

import MessageBox from '../components/MessageBox'
import Navbar from '../components/Navbar'
import LatestRates from '../components/MainPage/latestRates'
import LowerMenu from '../components/Navbar/LowerMenu'

const Home = observer(() => {

  return (
    <div className="index-wrapper"
      style={{
        backgroundColor: theme.active === 'dark' ? '#2a2a2a' : '#ffffff',
        color: theme.active === 'dark' ? '#ffffff' : 'rgba(0, 0, 0, 0.8)',
        minHeight: '100vh',
        width: '100%'
      }}
    >
      {/* <MessageBox/> */}
      <Navbar/>
      <LatestRates/>
      <LowerMenu/>
    </div>
  )
})

export default Home;
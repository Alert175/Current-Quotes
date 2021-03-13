import { observer } from "mobx-react-lite";
import { MoonFill, Sun } from 'react-bootstrap-icons';
import {Button} from 'react-bootstrap'
import theme from '../../store/theme'

const ThemeIcon = observer(()=>{

  const setTheme = (value) =>{
    if (value === 'light') {
      theme.setThemeLight()
    } else {
      theme.setThemeDark()
    }
  }

  return(
    <Button bg={theme.active === 'dark' ? 'light' : 'dark'} variant={theme.active === 'dark' ? 'light' : 'dark'}>
      {
        theme.active === 'dark' 
          ? <MoonFill fill="currentColor" size={25} onClick={() => setTheme('light')}/> 
          : <Sun fill="currentColor" size={25} onClick={() => setTheme('dark')}/>
      }
    </Button>
  )
})

export default ThemeIcon;
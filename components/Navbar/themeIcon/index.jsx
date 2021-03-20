import { observer } from "mobx-react-lite";
import theme from '../../../store/theme'
import classes from './style.module.scss'

const ThemeIcon = observer(()=>{

  const setTheme = (value) =>{
    if (value === 'light') {
      theme.setThemeLight()
    } else {
      theme.setThemeDark()
    }
  }

  return(
    <div className={`${classes.container}`}>
      {
        theme.active === 'dark'
          ? <img className={`${classes.themeIcon}`} onClick={() => setTheme('light')} src="/Images/ThemeIcon/moonDesc.svg" alt=""/>
          : <img className={`${classes.themeIcon}`} onClick={() => setTheme('dark')} src="/Images/ThemeIcon/sunDesc.svg" alt=""/>
      }
    </div>
  )
})

export default ThemeIcon;
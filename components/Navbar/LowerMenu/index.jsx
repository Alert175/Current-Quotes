import { observer } from "mobx-react-lite";
import theme from '../../../store/theme';
import ThemeIcon from '../themeIcon'

import classes from './style.module.scss'

const LowerMenu = observer(() => {
  return(
    <div
      className={`${classes.wrapper} wrapper content`}
      style={{
        backgroundColor: theme.active === 'dark' ? 'rgba(42, 42, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        boxShadow: theme.active === 'dark' ? '0px 0px 4px 2px rgba(0, 0, 0, 0.25)' : '0px 0px 4px 2px rgba(0, 0, 0, 0.25)'
      }}
    >
      <ThemeIcon/>
    </div>
  )
})

export default LowerMenu;
import { observer } from "mobx-react-lite";
import alertBox from "../../store/alertBox";

 const MessageBox = observer(() =>{

  setTimeout(() => {
    alertBox.hideAlert()
  }, 1000 * 5);

  return(
    <div className={`alert alert-primary fixed-top ${alertBox.activeClass}`} role="alert">
      {alertBox.message}
    </div>
  )
  
})

export default MessageBox;
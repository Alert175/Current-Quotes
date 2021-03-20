
import { observer } from "mobx-react-lite";

 const MessageBox = observer(() =>{

  setTimeout(() => {
    alertBox.hideAlert()
  }, 1000 * 5);

  return(
    <>
      <>alertBox</>
    </>
  )
  
})

export default MessageBox;
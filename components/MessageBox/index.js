import {Alert} from 'react-bootstrap'

import { observer } from "mobx-react-lite";
import alertBox from "../../store/alertBox";

 const MessageBox = observer(() =>{

  setTimeout(() => {
    alertBox.hideAlert()
  }, 1000 * 5);

  return(
    <>
      <Alert show={alertBox.visible} variant="primary" transition={true} fixed="top">
        {alertBox.message}
      </Alert>
    </>
  )
  
})

export default MessageBox;
import { useContext, useEffect, useRef, useState } from "react";

export default function MessageBox(props){
  // state
  const [visibleAlert, setVisibleAlert] = useState('show')
  // setTimeout(() => {
  //   setVisibleAlert('fade')
  // }, 1000 * 5);
  return(
    <div className={`alert alert-primary fixed-top show`} role="alert">
      hello
    </div>
  )
}
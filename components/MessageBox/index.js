import { useEffect, useState } from "react";
import style from './style.module.scss'

export default function MessageBox(props){
  const [shift, setShift] = useState(-150)
  useEffect(() => {
    // set
    props.show ? setShift(0) : setShift(-150)
    console.log('use effect hook')
    // clear
    return () => setShift(-150)
  })
  return(
    <div
      className={style.containerBox}
      style={{
        transform: `translateY(${shift}%)`
      }}
      onClick={()=> {props.close()}}
    >
      {props.text}
    </div>
  )
}
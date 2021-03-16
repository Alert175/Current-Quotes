import { makeAutoObservable } from "mobx"

class AlertBox {

  constructor(){
    makeAutoObservable(this)
  }

  message = 'hello'
  visible = false

  setMessage(value){
    this.message = value
  }

  showAlert(){
    this.visible = true
  }

  hideAlert(){
    this.visible = false
  }
}

export default new AlertBox()
import { makeAutoObservable } from "mobx"

class AlertBox {

  constructor(){
    makeAutoObservable(this)
  }

  message = 'hello'
  visible = true

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
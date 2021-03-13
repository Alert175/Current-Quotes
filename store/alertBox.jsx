import { makeAutoObservable } from "mobx"

class AlertBox {

  constructor(){
    makeAutoObservable(this)
  }

  message = ''
  activeClass = 'fade'

  setMessage(value){
    this.message = value
  }

  showAlert(){
    this.activeClass = 'show'
  }

  hideAlert(){
    this.activeClass = 'fade'
  }
}

export default new AlertBox()
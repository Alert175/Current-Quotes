import { makeAutoObservable } from "mobx";

class Theme {

  constructor(){
    makeAutoObservable(this)
  }

  active = 'light'

  setThemeLight(){
    this.active = 'light'
  }

  setThemeDark(){
    this.active = 'dark'
  }
}

export default new Theme()
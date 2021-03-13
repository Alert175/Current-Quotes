import { makeAutoObservable } from "mobx";

class Theme {

  constructor(){
    makeAutoObservable(this)
  }

  active = 'dark'

  setThemeLight(){
    this.active = 'light'
  }

  setThemeDark(){
    this.active = 'dark'
  }
}

export default new Theme()
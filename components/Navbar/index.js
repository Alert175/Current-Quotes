import { observer } from "mobx-react-lite";
import theme from '../../store/theme';

 const Navbar = observer(() => {
  return(
    <nav className={`navbar navbar-expand-lg navbar-${theme.active} bg-${theme.active}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Курсы валют</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="#">Главная</a>
          <a className="nav-link" href="#">Актуальные крусы</a>
          <a className="nav-link" href="#">Перевод валют</a>
        </div>
      </div>
    </div>
  </nav>
  )
})

export default Navbar;
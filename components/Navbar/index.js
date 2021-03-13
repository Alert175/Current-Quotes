import { observer } from "mobx-react-lite";
import theme from '../../store/theme';
import {Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap'
import ThemeIcon from '../themeIcon'

 const NavBar = observer(() => {
  return(
    <Navbar bg={theme.active} variant={theme.active} expand="lg">
      <Navbar.Brand href="#home">Курсы валют</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Главная</Nav.Link>
          <Nav.Link href="#link">Актуальные крусы</Nav.Link>
          <Nav.Link href="#asd">Перевод валют</Nav.Link>
          <Nav.Link href="/tutorials">Обучение</Nav.Link>
          <Nav.Item>
            <ThemeIcon/>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
})

export default NavBar;
import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/img.1.png'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>

        {/* LOGO */}
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Gerenciador" />
        </Link>

        {/* MENU */}
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>

          <li className={styles.item}>
            <Link to="/projects">Projetos</Link>
          </li>

          <li className={styles.item}>
            <Link to="/contact">Contato</Link>
          </li>

          <li className={styles.item}>
            <Link to="/company">Empresa</Link>
          </li>

          <li className={styles.item}>
            <Link to="/newproject">Novo Projeto</Link>
          </li>
        </ul>

      </Container>
    </nav>
  )
}

export default Navbar

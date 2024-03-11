import styles from './Home.module.css'
import icon_din from '../../img/icon_din.png'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Gerenciador de Projetos</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <a href='/'>Criar Projeto</a>
            <img src={icon_din} alt="Gerenciador de Projeto" />
        </section>
    )
}

export default Home
import { useHistory } from 'react-router-dom'
import ProjectsForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {

    const history = useHistory()

    function createPost(project) {

        // inicialize o gerenciador and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'content-Type': 'aplication/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json()
        .then((data) => {
            console.log(data)
            //redirect
            history.push('/projects', {messege: 'Projeto Criado com sucesso!'})
        })
        .catch((err) => console.log(err))
        )
        
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectsForm handleSubmit={createPost}  btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject
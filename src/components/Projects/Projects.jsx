import styled from "styled-components";
import CardProject from "./CardProject";
import TitleSection from "../TitleSection/TitleSection";
import calculadora from './Calculadora.png';
import hotel from './Hotel.png';
import tasks from './Tasks.png';
import clima from './Clima.png';

const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const Projects = () => {

    return (
        <>
            <TitleSection title="Meus projetos" />
            <Container>
                <CardProject
                    title="Página sobre Hotel"
                    text="Projeto de página única, desenvolvido para apresentar um hotel fictício, demonstrando estadias, lazer e notícias do local"
                    codeLink="https://github.com/NatanVilasBoas/summer-hotel-landing-page"
                    link="https://summer-hotel-landing-page.vercel.app/"
                    image={hotel}
                />
                <CardProject
                    title="Rapid-Tasks"
                    text="Projeto criado para gerenciamento de tarefas, com ele é possível criar, alterar e concluir suas tarefas"
                    codeLink="https://github.com/NatanVilasBoas/rapid-tasks"
                    link="https://rapid-tasks.vercel.app/"
                    image={tasks}
                />
                <CardProject
                    title="Calculadora em React"
                    text="Projeto desenvolvido em curso, simulando uma calculadora real que realiza as operações básicas como soma, subtração, divisão e multiplicação"
                    codeLink="https://github.com/NatanVilasBoas/Calculadora-Em-React"
                    link="https://calculadora-em-react-five.vercel.app/"
                    image={calculadora}
                />
                <CardProject
                    title="Clima-App"
                    text="Projeto que realiza consultas na API AccuWheater e traz informações sobre o clima de qualquer localidade"
                    codeLink="https://github.com/NatanVilasBoas/clima-app/tree/master"
                    link="https://clima-app-kohl-nine.vercel.app/"
                    image={clima}
                />
            </Container>
        </>
    )
}

export default Projects;
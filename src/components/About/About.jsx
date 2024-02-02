import { useEffect } from "react";
import styled from "styled-components";
import ScrollReveal from "scrollreveal";
import Button from "../Button/Button";

const Container = styled.section`
    display: flex;
    align-items: center;
    flex-wrap: wrap; 
    justify-content: space-around;
    padding: 3em;
    overflow: hidden;
    margin-bottom: 12em;
`
const ShapeOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip-path: polygon(0 0, 100% 0%, 100% 25%, 0% 100%);
    background-color: #301E67;
    z-index: 1;
`;

const Text = styled.div`
    margin-bottom: 3em;
`

const Content = styled.div`
    width: 50%;
    z-index: 2;
`

const Image = styled.img`
    width: 30vw;
    z-index: 2;
`

const About = () => {

    useEffect(() => {
        ScrollReveal().reveal('.fade', {
            delay: 500,
            distance: '20px',
            origin: 'bottom',
            opacity: 0,
            easing: 'ease-in-out',
        });
    }, [])

    return (
        <Container className="fade">
            <ShapeOverlay/>
            <Image src="https://github.com/NatanVilasBoas.png" alt="" />
            <Content>
                <Text>
                    <h3 style={{ fontSize: '40px' }}>Sobre mim</h3>
                    <p style={{ fontFamily: 'poppins', fontWeight: '300' }}>Sou programador e designer a mais de 2 anos. Tenho muito apreço pelas áreas por me darem a chance de criar coisas que realmente são úteis e que auxiliem meus clientes, criando projetos com um olhar mais detalhista envolto não apenas na usabilidade do projeto, mas na experiência do usuário e na qualidade do produto</p>
                </Text>
                <a href="Curriculo.pdf" target="_blank">
                    <Button text="currículo" color="#301E67" colorLight="#6a5bcd" padding="12px 32px"/>
                </a>
            </Content>
        </Container>
    )
}

export default About;
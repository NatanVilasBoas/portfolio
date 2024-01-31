import { useEffect } from "react";
import styled from "styled-components";
import ScrollReveal from "scrollreveal";
import Button from "../Button/Button";

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3em;
    overflow: hidden;
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
    margin-left: 10em;
    z-index: 2;
`

const Image = styled.img`
    width: 28em;
    margin-left: 3em;
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
            <Text style={{ color: 'white' }}>
                <h3 style={{ fontSize: '40px' }}>Sobre mim</h3>
                <p style={{ fontFamily: 'poppins', fontWeight: '300' }}>Sou programador e designer, tenho muito apreço pelas áreas por ter a chance de criar coisas que realmente venham ser úteis e que auxiliem meus clientes, criando projetos com um olhar mais detalhista envolto não apenas na usabilidade do projeto, mas na experiência do usuário e no conforto visual também</p>
            <Button text="Meu currículo"/>
            </Text>
        </Container>
    )
}

export default About;
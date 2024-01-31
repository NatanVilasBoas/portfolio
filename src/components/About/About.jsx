import { useEffect } from "react";
import styled from "styled-components";
import ScrollReveal from "scrollreveal";

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 3em;
`

const Text = styled.div`
    margin-left: 10em;
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

    return(
        <Container className="fade">
            <div>
                <img src="https://github.com/NatanVilasBoas.png" alt="" />
            </div>
            <Text style={{color:'white'}}>
                <h3 style={{fontSize: '40px'}}>Sobre mim</h3>
                <p style={{fontFamily: 'poppins', fontWeight: '300'}}>Sou programador e designer, tenho muito apreço pelas áreas por ter a chance de criar coisas que realmente venham ser úteis e que auxiliem meus clientes, criando projetos com um olhar mais detalhista evolto não apenas a usabilidade do projeto, mas na experiência do usuário e no conforto visual</p>
            </Text>
        </Container>
    )
}

export default About;
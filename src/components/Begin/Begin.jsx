import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import styled from 'styled-components';

const Container = styled.section`
    width: 100%;
    height: 100%;
    color: white;
    padding: 19em 3em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
`

const Title = styled.p`
    font-size: 56px;
    margin: 5px 0 5px 0;
`

const Begin = () => {

        useEffect(() => {
          // Configuração do ScrollReveal
          ScrollReveal().reveal('.inicio', {
            delay: 500,
            distance: '20px',
            origin: 'bottom',
            opacity: 0,
            easing: 'ease-in-out',
            reset: false, // Define se a animação deve ser redefinida ao rolar para cima
          });

          ScrollReveal().reveal('.inicio-second', {
            delay: 1000,
            distance: '20px',
            origin: 'bottom',
            opacity: 0,
            easing: 'ease-in-out',
          });
        }, []);

    return(
        <Container>
            <Title className="inicio">Olá, meu nome é <strong style={{color:"#B6EADA"}}>Natan.</strong></Title>
            <Title className="inicio-second">Sou desenvolvedor Web</Title>
        </Container>
    )
}

export default Begin;
import { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import styled from 'styled-components';

const Container = styled.section`
    width: 100%;
    height: 100%;
    padding: 19em 3em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
`

const Button = styled.button`
  margin-top: 6em;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const ButtonTop = styled(Button)`
  position: fixed;
  z-index: 4;
  bottom: 5%;
  right: 5%;
  margin-right: 18px;
`

const Title = styled.p`
    font-size: 56px;
    margin: 5px 0 5px 0;
`

const Begin = () => {

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const showThreshold = 1000;

    if (scrollY > showThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollBottom = () => {
    window.scrollTo({
      top: window.innerHeight * 1.2,
      behavior: 'smooth',
    });
  }
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll);

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

    ScrollReveal().reveal('.btn', {
      delay: 2000,
      distance: '20px',
      origin: 'bottom',
      opacity: 0,
      easing: 'ease-in-out',
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, []);

  return (
    <Container>
      <Title className="inicio">Olá, meu nome é <strong style={{ color: "#B6EADA" }}>Natan Vilas Boas</strong></Title>
      <Title className="inicio-second">Sou desenvolvedor Web.</Title>
      <Button className='btn' onClick={scrollBottom}>
        <svg width="100px" height="100px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.00024000000000000003" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">

          <g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(3.3599999999999994,3.3599999999999994), scale(0.72)" />

          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048" />

          <g id="SVGRepo_iconCarrier"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#3c218c" /> </g>

        </svg>
      </Button>
      <ButtonTop onClick={scrollTop} style={{ display: `${ isVisible ? 'block' : 'none'}`}}>
        <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">

          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

          <g id="SVGRepo_iconCarrier"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#3c218c" /> </g>

        </svg>
      </ButtonTop>
    </Container>
  )
}

export default Begin;
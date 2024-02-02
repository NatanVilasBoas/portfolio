import styled from "styled-components";
import TitleSection from "../TitleSection/TitleSection";
import linkedin from './linkedin.svg';
import github from './github.svg';
import instagram from './instagram.svg';
import whatsapp from './whatsapp.svg';
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

const Container = styled.section`
    display: flex;
    justify-content: space-around;
    margin: 0 3em;
    padding: 2em 0;
    flex-wrap: wrap; 
`

const Link = styled.a`
    display: flex;
    align-items: center;
    margin: 1em;
    cursor: pointer;
    text-decoration: none;
    color: white;
    padding: 0 3em;
    border-radius: 24px;
    border: 1px solid transparent;
    transition: transform ease-in-out 0.3s, border-color ease-in-out 0.3s;
    
    &:hover{
        transform: translateY(-10px);
        z-index: 1;
        border-color: white;
    }
`

const TextLink = styled.p`
    font-size: 22px;
    margin-left: 1em;
`

const Icon = styled.img`
    width: 2em;
    display: inline-block;
`

const Contact = () => {

    useEffect(() => {
        ScrollReveal().reveal('.fade', {
            delay: 500,
            distance: '20px',
            origin: 'bottom',
            opacity: 0,
            easing: 'ease-in-out',
        });
    })

    return (
        <>
            <TitleSection title="Entre em contato" />
            <Container className="fade">

                <Link href="https://www.linkedin.com/in/natan-vilas-boas-00b102224/" target="_blank">
                    <Icon src={linkedin} />
                    <TextLink>Linkedin</TextLink>
                </Link>
                <Link target="_blank">
                    <Icon src={instagram} />
                    <TextLink>Instagram</TextLink>
                </Link>
                <Link href="https://api.whatsapp.com/send?phone=5514991285791" target="_blank">
                    <Icon src={whatsapp} />
                    <TextLink>Whatsapp</TextLink>
                </Link>
                <Link href="https://github.com/NatanVilasBoas" target="_blank">
                    <Icon src={github} />
                    <TextLink>Github</TextLink>
                </Link>
            </Container>
        </>
    )
}

export default Contact;
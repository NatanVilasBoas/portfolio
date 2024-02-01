import styled from "styled-components";
import TitleSection from "../TitleSection/TitleSection";
import linkedin from './linkedin.svg';
import github from './github.svg';
import instagram from './instagram.svg';
import whatsapp from './whatsapp.svg';

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    margin: 0 3em;
    padding: 2em 0;
`

const Link = styled.a`
    display: flex;
    align-items: center;
    margin: 1em;
    cursor: pointer;
    text-decoration: none;
    color: white;
    transition: transform ease-in-out 0.3s;
    
    &:hover{
        transform: translateY(-10px);
        z-index: 1;
    }
`

const LinksSection = styled.div`
    display: flex;
`

const TextLink = styled.p`
    margin-left: 1em;
`

const Icon = styled.img`
    width: 2em;
    display: inline-block;
`

const Contact = () => {
    return (
        <>
            <TitleSection title="Entre em contato" />
            <Container>
                <LinksSection>
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
                </LinksSection>
                <div>

                </div>
            </Container>
        </>
    )
}

export default Contact;
import styled from "styled-components";
import TitleSection from "../TitleSection/TitleSection";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 1em;
    font-size: 5em;
`

const Technologies = () => {
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
        <>
            <TitleSection title="Tecnologias com as quais trabalho" />
            <Container className="fade">
                <i className="devicon-html5-plain"></i>
                <i className="devicon-css3-plain"></i>
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-php-plain"></i>
                <i className="devicon-mysql-plain"></i>
                <i className="devicon-laravel-plain"></i>
                <i className="devicon-react-original"></i>
                <i className="devicon-bootstrap-plain"></i>
                <i className="devicon-photoshop-plain"></i>
                <i className="devicon-illustrator-plain"></i>
            </Container>
        </>
    )
}

export default Technologies;
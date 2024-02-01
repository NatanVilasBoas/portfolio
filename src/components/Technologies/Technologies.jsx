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
                <i class="devicon-html5-plain"></i>
                <i class="devicon-css3-plain"></i>
                <i class="devicon-javascript-plain"></i>
                <i class="devicon-php-plain"></i>
                <i class="devicon-mysql-plain"></i>
                <i class="devicon-laravel-plain"></i>
                <i class="devicon-react-original"></i>
                <i class="devicon-bootstrap-plain"></i>
                <i class="devicon-photoshop-plain"></i>
                <i class="devicon-illustrator-plain"></i>
            </Container>
        </>
    )
}

export default Technologies;
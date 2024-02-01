import styled from "styled-components";
import CardProject from "./CardProject";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const Projects = () => {

    useEffect(() => {
        ScrollReveal().reveal('.title', {
            delay: 200,
            distance: '20px',
            origin: 'bottom',
            opacity: 0,
            easing: 'ease-in-out',
          });
    })

    return (
        <>
            <h1 className="title" style={{ fontSize: '42px', marginLeft: '1em' }}>Meus projetos</h1>
            <Container>
                <CardProject />
                <CardProject />
                <CardProject />
            </Container>
        </>
    )
}

export default Projects;
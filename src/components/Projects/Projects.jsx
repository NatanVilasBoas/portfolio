import styled from "styled-components";
import CardProject from "./CardProject";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import TitleSection from "../TitleSection/TitleSection";

const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const Projects = () => {

    return (
        <>
            <TitleSection title="Meus projetos"/>
            <Container>
                <CardProject />
                <CardProject />
                <CardProject />
            </Container>
        </>
    )
}

export default Projects;
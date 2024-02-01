import styled from "styled-components";
import Button from "../Button/Button";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Title = styled.h3`
    font-size: 24px;
`

const Card = styled.div`
    width: 36em;
    display: flex;
    flex-direction: column;
    margin: 3em 3em;
    align-items: center;
    justify-content: center;
    padding: 3em 8px;
    border: 1px solid white;
    border-radius: 24px;
`

const Text = styled.p`
    font-size: 18px;
    font-family: 'Poppins';
`

const CardText = styled.div`
    margin: 1.1em;
`

const Image = styled.img`
    width: 32.5em;
    border-radius: 24px;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2em 1em 0 0;
`

const CardProject = (props) => {
    useEffect(() => {
        ScrollReveal().reveal('.card', {
            delay: 500,
            distance: '20px',
            origin: 'bottom',
            opacity: 0,
            easing: 'ease-in-out',
          });
    })

    return (
        <Card className="card">
            <div>
                <Image src={props.image} />
            </div>
            <CardText>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <ButtonContainer>
                    <a href={props.codeLink} target="_blank" rel="noreferrer">
                        <Button text="Veja o código"
                            color="#53738D"
                            colorLight="#5B8FB9"
                            padding="12px 18px"
                        />
                    </a>
                    <a href={props.link} target="_blank" rel="noreferrer">
                        <Button text="Acesse o site"
                            color="#301E67"
                            colorLight="#6a5bcd"
                            padding="12px 12px"
                        />
                    </a>
                </ButtonContainer>
            </CardText>
        </Card>
    )
}

export default CardProject;
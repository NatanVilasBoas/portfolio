import styled from "styled-components";

const Container = styled.section`
    display: flex;
    background-color: #301E67;
    padding: 3em 1em;
    font-size: 18px;
`

const Link = styled.a`
    text-decoration: none;
    color: white;
    transition: color ease-in-out 0.3s;

    &:hover{
        color: #B6EADA;
    }
`

const Footer = () => {
    return (
        <Container>
            <div>
                <p>Criado por <Link href="https://github.com/NatanVilasBoas">Natan Vilas Boas</Link></p>
                <p>Copyright &copy; Natan Vilas Boas - 2024</p>
            </div>
            <div>
                
            </div>
        </Container>
    )
}

export default Footer;
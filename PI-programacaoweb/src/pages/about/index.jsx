// react naming convention, uppercase Components para não confundir com tags html no import
import { Button, Container } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const About = () => {
    return (
        <Container>
            <h1>Sobre</h1>
            <hr />
            <Link to='/'>
                <Button type="button" colorScheme='blue'>
                    Página inicial
                </Button>
            </Link>
        </Container>
    )
}

export default About
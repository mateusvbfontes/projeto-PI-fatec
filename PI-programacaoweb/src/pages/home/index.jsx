import { Button, Container } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useUsers } from "../../hooks/users"

const Home = () => {

    const {users, error, isLoading} = useUsers()

    return (
        <Container>
            <h1>Página inicial</h1>
            <hr />
            <Link to='/sobre'>
                <Button type="button" colorScheme='blue'>
                    Sobre
                </Button>
            </Link>
            <hr />
            {
                isLoading && <p>Carregando...</p>
            }
            {
                users?.map((user) => (
                    <p key={user.id}>{user.name}</p>
                ))
            }

        </Container>
    )
}

export default Home
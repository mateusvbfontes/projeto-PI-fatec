import { Container, FormControl, FormLabel, Stack, Input, Button } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { useCreateUser } from "../../hooks/mutationUser"


const Create = () => {

    const { reset, register, handleSubmit } = useForm()

    const { mutate: mutateCreateUser, isLoading, isError } = useCreateUser()

    // const onSubmit = (data) => { console.log(data) }

    const onSubmit = (data) => { 
        mutateCreateUser(data)        
        if(!isError){
            reset()
            alert('Usuário cadastrado com sucesso')
        }
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack>
                    <FormControl>
                        <FormLabel>Nome</FormLabel>
                        <Input type='text' {...register('name', { required: true })} placeholder="Digite o nome" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>E-mail</FormLabel>
                        <Input type='email' {...register('email', { required: true })} placeholder="Digite o e-mail" />
                    </FormControl>
                    <Button mt={4} type="submit" colorScheme='blue'>Cadastrar</Button>
                    <Button type="button" colorScheme='red' onClick={() => reset()}> Limpar</Button>
                </Stack>
            </form>
        </Container>
    )
}

export default Create
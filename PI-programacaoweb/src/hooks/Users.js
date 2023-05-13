import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
    //const res = await fetch('https://api-imobiliaria-xt97.onrender.com/imoveis')
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json()
}

export const useUsers = () => {
    const {data, error, isLoading} = useQuery(['users'], fetchUsers)

    return {
        users: data,
        error,
        isLoading
    }
}
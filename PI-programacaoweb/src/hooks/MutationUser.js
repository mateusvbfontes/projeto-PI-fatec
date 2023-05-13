import { useMutation } from "@tanstack/react-query";

const createUser = async (user) => {
  const res = await fetch("http://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export const useCreateUser = () => {
    return useMutation(createUser, {
        onError: (error) => {
            console.log(error)
        }
    })
}
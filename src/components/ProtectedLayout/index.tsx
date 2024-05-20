import { useAuth } from "../../context/AuthProvider/useAuth"

export const ProtectedLayout = ({ childer }: any) => {
  const auth = useAuth()

  if (!auth.email) {
    return (<h1>Você não tem acesso!</h1>)
  }

  return childer;
}
import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./context/AuthProvider"
import { Home } from "./screens/Home"
import { Login } from "./screens/Login"

function App() {
  const [user, setUser] = useState(false);

  async function getUserData() {
    const token = localStorage.getItem('user');

    if (token) {
      setUser(true);
    }
  }

  const Private = ({ Item }) => {
    return user == true ? <Item /> : <Login />
  }

  const Logged = ({ Item }) => {
    return user == false ? <Login /> : <Home />
  }

  useEffect(() => {
    getUserData();
  }, [])

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Logged Item={Login} />} />
          <Route path="*" element={<Logged Item={Login} />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/home" element={<Private Item={Home} />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App

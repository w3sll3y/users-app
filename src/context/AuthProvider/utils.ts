import axios from "axios";
import { IUser } from "./types";

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem('user', JSON.stringify(user))
}

export function getUserLocalStorage() {
  const json = localStorage.getItem('user');

  if (!json) {
    return null;
  }

  const user = JSON.parse(json);
  return user ?? null
}

export async function LoginRequest(email: string, password: string) {

  try {
    const response = await axios.post('http://localhost:3000/login',
      JSON.stringify({ email, password }),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

    return response.data;

  } catch (err) {
    return null;
  }
}

export async function SignUpRequest(name: string, email: string, password: string) {

  try {
    const response = await axios.post('http://localhost:3000/company',
      JSON.stringify({ name, email, password }),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

    return response.data;

  } catch (err) {
    return null;
  }
}

export async function GetUSers(token: string) {
  try {
    const response = await axios.get('http://localhost:3000/user', {
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      }
    });

    return response.data;

  } catch (err) {
    return null;
  }
}
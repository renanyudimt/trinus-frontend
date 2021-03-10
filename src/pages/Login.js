import React, { useState, useEffect, useContext } from 'react'
import axios from "axios";
import { useMutation } from "react-query"
import { useHistory, Link } from "react-router-dom"
import { useAlert } from "react-alert";
import { Context } from "./../Store/AuthContext"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useContext(Context);

  const history = useHistory();
  const alert = useAlert(); 

  async function handleLogin(data) {
    await axios.post('https://desafio-trinus-backend.herokuapp.com/login', data, { headers: { 'Content-Type' : "application/json" }})
      .then(response => {
        dispatch({type: 'SET_USER', payload: response.data[0]});
      })
  }

  const {mutate, isLoading, isSuccess, isError, error, data } = useMutation((data) => 
    handleLogin(data)
  )

  useEffect(() => {
    if (isSuccess) {
      history.push("/uploads")
    }

    if (isError) {
      alert.error("Email ou password incorreto")
    }

  }, [isSuccess, isError, alert])

  function handleSubmit(e) {
    e.preventDefault();
    mutate({
      email,
      password
    })
  }

  return (
    <div className="bg-orange min-h-screen flex flex-col items-center justify-center p-4 lg:p-0">
      <Link to="/">
        <img src="/trinusco.png" alt="Logo" className="w-150px lg:w-300px" />
      </Link>
      <div className="bg-white rounded-2xl mt-8 p-4 w-full lg:w-400px h-400px flex flex-col items-center justify-center">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col w-full mb-6">
            <label>Email</label>
            <input type="text" name="email" className="border border-gray-200 border-2 rounded h-35px px-4 mt-2" placeholder="username" onChange={e => setEmail(e.target.value)} value={email} required />
          </div>
          <div className="flex flex-col w-full mb-6">
            <label>Password</label>
            <input type="password" name="password" className="border border-gray-200 border-2 rounded h-35px px-4 mt-2" placeholder="username" onChange={e => setPassword(e.target.value)} value={password} required/>
          </div>
          <button type="submit" className="bg-secondary text-white rounded h-40px w-full py-4 shadow-md transition duration-300 hover:bg-secondary-light flex items-center justify-center mt-4" disabled={isLoading ? true : false}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
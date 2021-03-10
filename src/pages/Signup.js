import React, { useState, useEffect, useContext } from 'react'
import { useAlert } from "react-alert"
import { useMutation } from "react-query"
import axios from "axios"
import { useHistory, Link } from "react-router-dom";
import { Context } from "./../Store/AuthContext"

const Signup = () => {
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const history = useHistory();
  const alert = useAlert();
  const [state, dispatch] = useContext(Context);


  const {mutate, isLoading, isSuccess, isError } = useMutation(async (data) => 
    await axios.post('https://desafio-trinus-backend.herokuapp.com/signup', data, { headers: { 'Content-Type' : "application/json" }})
      .then(response => {
        console.log(response)
        dispatch({type: 'SET_USER', payload: response.data});
      })
  )

  useEffect(() => {
    if (isSuccess) {
      history.push("/");
    }

    if(isError) {
      alert.error("Usuario ja existente")
    }

  }, [isLoading, isError, isSuccess])


  async function handleForm(e) {
    e.preventDefault();
    if (password !== repeatPassword) {
      alert.error("Senhas nao sao iguais");
    } else {
      await mutate({ name, email, password })
    }
  }

  return (
    <div className="bg-yellow min-h-screen flex flex-col items-center justify-center p-4 lg:p-0">
      <Link to="/">
        <img src="/trinusco.png" alt="Logo" className="w-150px lg:w-300px" />
      </Link>
      <div className="bg-white rounded-2xl mt-8 p-4 w-full lg:w-400px h-550px flex flex-col items-center justify-center">
        <form className="w-full" onSubmit={handleForm}>
          <div className="flex flex-col w-full mb-6">
            <label>Name</label>
            <input type="text" name="username" className="border border-gray-200 border-2 rounded h-35px px-4 mt-2" placeholder="username" onChange={e => setUsername(e.target.value)} value={name} required />
          </div>
          <div className="flex flex-col w-full mb-6">
            <label>E-mail</label>
            <input type="email" name="email" className="border border-gray-200 border-2 rounded h-35px px-4 mt-2" placeholder="e-mail" onChange={e => setEmail(e.target.value)} value={email} required />
          </div>
          <div className="flex flex-col w-full mb-6">
            <label>Password</label>
            <input type="password" name="password" className="border border-gray-200 border-2 rounded h-35px px-4 mt-2" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} required />
          </div>
          <div className="flex flex-col w-full mb-6">
            <label>Repeat Password</label>
            <input type="password" name="repeatpassword" className="border border-gray-200 border-2 rounded h-35px px-4 mt-2" placeholder="Password" onChange={e => setRepeatPassword(e.target.value)} value={repeatPassword} required />
          </div>
          <button type="submit" className="bg-secondary text-white rounded h-40px w-full py-4 shadow-md transition duration-300 hover:bg-secondary-light flex items-center justify-center mt-4" disabled={isLoading ? true : false }>Signup</button>
        </form>
      </div>
    </div>
  )
}

export default Signup;
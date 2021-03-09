import React, { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-orange min-h-screen flex flex-col items-center justify-center">
      <img src="/trinusco.png" alt="Logo" className="w-300px" />
      <div className="bg-white rounded-2xl mt-8 p-4 w-400px h-400px flex flex-col items-center justify-center">
        <div className="flex flex-col w-full mb-6">
          <label>Username</label>
          <input type="text" className="border border-gray-200 border-2 rounded h-35px px-4 mt-2" placeholder="username" onChange={e => setUsername(e.target.value)} value={username} />
        </div>
        <div className="flex flex-col w-full mb-6">
          <label>Password</label>
          <input type="password" className="border border-gray-200 border-2 rounded h-35px px-4 mt-2" placeholder="username" onChange={e => setPassword(e.target.value)} value={password} />
        </div>
        <button type="submit" className="bg-secondary text-white rounded h-40px w-200px py-4 shadow-md transition duration-300 hover:bg-secondary-light flex items-center justify-center mt-4">Login</button>
      </div>
    </div>
  )
}

export default Login;
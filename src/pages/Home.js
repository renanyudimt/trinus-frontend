import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="bg-primary min-h-screen flex flex-col items-center justify-center">
      <img src="/trinusco.png" alt="Logo" className="w-300px" />
      <div className="bg-white rounded-2xl mt-8 p-4 w-400px h-400px flex flex-col items-center justify-center">
        <Link className="bg-secondary text-white rounded h-40px w-200px py-4 shadow-md transition duration-300 hover:bg-secondary-light flex items-center justify-center" to="login">Login</Link>
        <Link className="bg-secondary text-white rounded h-40px w-200px py-4 shadow-md transition duration-300 hover:bg-secondary-light flex items-center justify-center mt-4" to="Signup">Signup</Link>
      </div>
    </div>
  )
}

export default Home;
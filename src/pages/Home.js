import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { Context } from  "./../Store/AuthContext";

const Home = () => {
  const [state, dispatch] = useContext(Context);
  console.log(state)

  return (
    <div className="bg-primary min-h-screen flex flex-col items-center justify-center p-4 lg:p-0">
      <img src="/trinusco.png" alt="Logo" className="w-150px lg:w-300px" />
      { state.user ? (
        <div className="w-full lg:w-400px p-6 rounded-2xl bg-white mt-8">
          <div className="flex items-center">
            <b>Logado como: </b>
            <p className="ml-4">{ state.user.name }</p>
          </div>
          <div className="flex items-center">
            <b>Email: </b>
            <p className="ml-4">{ state.user.email }</p>
          </div>
          <Link className="bg-secondary text-white rounded h-40px w-full py-4 mt-4 shadow-md transition duration-300 hover:bg-secondary-light flex items-center justify-center" to="/uploads">Central de Uploads</Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl mt-8 p-4 w-full lg:w-400px h-250px lg:h-400px flex flex-col items-center justify-center">
          <Link className="bg-secondary text-white rounded h-40px w-200px py-4 shadow-md transition duration-300 hover:bg-secondary-light flex items-center justify-center" to="login">Login</Link>
          <Link className="bg-secondary text-white rounded h-40px w-200px py-4 shadow-md transition duration-300 hover:bg-secondary-light flex items-center justify-center mt-4" to="Signup">Signup</Link>
        </div>
      )}
    
    </div>
  )
}

export default Home;
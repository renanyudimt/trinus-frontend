import React, { useContext, useState } from 'react'
import axios from "axios"
import { useMutation, useQuery } from "react-query";
import { Context } from "./../Store/AuthContext"
import { Link } from "react-router-dom"
import FileSaver from "file-saver"

const Profile = () => {
  const [state, dispatch] = useContext(Context);
  const [files, setFiles] = useState("");

  const {mutate, isLoading } = useMutation(async (data) => 
    await axios.post('https://desafio-trinus-backend.herokuapp.com/upload', data, { headers: { 'Content-Type' : "multipart/form-data" }})
      .then(response => {
        setFiles(response.data)
      })
  )

  const uploads = useQuery("uploads", async () => {
    await axios.get(`https://desafio-trinus-backend.herokuapp.com/uploads/${state.user.id}`)
      .then(response => {
        setFiles(response.data)
      })
  })

  function handleChange(e) {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        const formData = new FormData();
        formData.set("file",e.target.files[0]);
        formData.set("userId", state.user.id);
        mutate(formData)
      }
    };

    if (e.target.files.length > 0) {
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  async function handleDownload(fileName) {
    FileSaver.saveAs(`https://desafio-trinus-backend.herokuapp.com/download/${fileName}`, fileName);
  }

  return (
    <div className="bg-primary min-h-screen flex flex-col items-center justify-center p-4 lg:p-0">
      <Link to="/">
        <img src="/trinusco.png" alt="Logo" className="w-150px lg:w-300px" />
      </Link>
      <div className=" w-full lg:w-400px h-auto bg-white p-6 rounded-lg flex flex-col mt-4">
        <p>Selecione o arquivo</p>
        <input disabled={isLoading ? true : false } type="file" accept="image/*" className="h-40px w-full mt-4" onChange={handleChange}/>
        <b className="mt-6">Meus uploads:</b>
        <ul className="mt-4">
          {files && (files.map((item, key) => (
            <li className="flex items-center justify-between" key={key}>
              {item.fileName}
              <button className="text-secondary underline hover:text-secondary-light" onClick={() => handleDownload(item.fileName)}>
                download
              </button>
            </li>
          )))}
        </ul>
      </div>
    </div>
  )
}

export default Profile;
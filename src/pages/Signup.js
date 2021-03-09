import React, { useState } from 'react'

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("/default_preview_avatar.png")
  const [avatar, setAvatar] = useState("")

  function handleForm(e) {
    e.preventDefault();
  }

  function handleAvatar(e) {
    const reader = new FileReader();

    reader.onload = () => {
      //0 - created
      //1 - processing
      //2 - done
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result)
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  return (
    <div className="bg-orange min-h-screen flex flex-col items-center justify-center">
      <img src="/trinusco.png" alt="Logo" className="w-300px" />
      <div className="bg-white rounded-2xl mt-8 p-4 w-400px h-550px flex flex-col items-center justify-center">
        <form onSubmit={handleForm}>
          <div className="flex flex-col w-full mb-6">
            <label>Username</label>
            <input type="text" name="username" className="border border-gray-200 border-2 rounded h-35px px-4 mt-2" placeholder="username" onChange={e => setUsername(e.target.value)} value={username} />
          </div>
          <div className="flex flex-col w-full mb-6">
            <label>Password</label>
            <input type="password" name="password" className="border border-gray-200 border-2 rounded h-35px px-4 mt-2" placeholder="username" onChange={e => setPassword(e.target.value)} value={password} />
          </div>
          <div className="flex flex-col w-full mb-6">
            <label>Repeat Password</label>
            <input type="password" name="repeatpassword" className="border border-gray-200 border-2 rounded h-35px px-4 mt-2" placeholder="username" onChange={e => setRepeatPassword(e.target.value)} value={repeatPassword} />
          </div>
          <div className="flex flex-col w-full mb-6">
            <label>Avatar</label>
            <div className="flex items-center">
              <figure className="mr-4 w-50 h-50 rounded-full">
                <img src={avatarPreview} className="rounded-circle" alt="image" />
              </figure>
              <div className="custom-file">
                <input type="file" name="avatar" id="customFile" accept="images/*" onChange={handleAvatar} />
                <label className="custom-file-label" htmlFor="customFile">Choose Avatar</label>
              </div>
            </div>
          </div>
          <button type="submit" className="bg-secondary text-white rounded h-40px w-200px py-4 shadow-md transition duration-300 hover:bg-secondary-light flex items-center justify-center mt-4">Signup</button>
        </form>
      </div>
    </div>
  )
}

export default Signup;
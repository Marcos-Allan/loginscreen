import { useState, useEffect } from 'react'

import bg1 from './assets/imgs/regular_show_bg.png'
import bg2 from './assets/imgs/steven_universe_bg.png'

export default function App() {

  const [randomBg, setRandomBg] = useState()
  const [isUser, setIsUser] = useState(false)
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  function getRandomNumber(){
    const number = Math.floor(Math.random() * 2);

    if(number == 0){
      setRandomBg(bg1)
    }else{
      setRandomBg(bg2)
    }
  }

  function handleLogin() {
    setIsUser(true)
  }

  useEffect(() => {
    getRandomNumber()
  },[])

  return (
    <div className={`w-screen h-screen flex items-center flex-col justify-center bg-cover overflow-hidden
     ${randomBg == bg1 && 'bg-center'}
     ${randomBg == bg2 && 'bg-center'}
     `} style={{ backgroundImage: `url(../${randomBg})`}}>
      <form
        style={{ backdropFilter: 'blur(10px)' }}
        className={`
          bg-white flex flex-col items-center justify-center text-black gap-2 p-4 rounded-[12px] w-[80%] max-w-[500px] z-[1]
        `}
        onSubmit={(e) => {
          e.preventDefault()
          handleLogin()
        }}
      >
        <h1 className={`text-center font-bold capitalize text-[20px] ${randomBg == bg1 ? 'text-[#008AFF]' : 'text-[#FF6DFF]'}`}>login</h1>
        <input
          className={`
            w-full mt-[10px] text-[14px] border-[1px] border-b-[#aeaeae] border-transparent text-[#aeaeae] placeholder:text-[#aeaeae] outline-none focus:border-b-[#000] focus:text-[#000000] focus:placeholder:text-[#000000] transition-all duration-[.3s]
          `}
          placeholder='Name'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={`
          w-full mt-[10px] text-[14px] border-[1px] border-b-[#aeaeae] border-transparent text-[#aeaeae] placeholder:text-[#aeaeae] outline-none focus:border-b-[#000] focus:text-[#000000] focus:placeholder:text-[#000000] transition-all duration-[.3s]
        `}
          placeholder='Password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className={`
            uppercase font-light w-full rounded-[4px] py-[6px] text-[12px] mt-[14px] text-white border-[1px] border-transparent transition-all duration-[.3s] cursor-pointer
            hover:bg-transparent focus:bg-transparent outline-none
            ${randomBg == bg1 ? 'bg-[#008AFF] hover:text-[#008AFF] focus:text-[#008AFF] border-[#008AFF]' : 'bg-[#FF6DFF] hover:text-[#FF6DFF] focus:text-[#FF6DFF] border-[#FF6DFF]'}
          `}
          type="submit"
          value="enviar"
        />
      </form>

        <div
          className={`
            w-screen h-screen absolute top-0 left-0 bg-[#00000099] flex items-center justify-center text-white font-bold text-[24px] uppercase overflow-hidden opacity-0 transition-opacity duration-[.4s]
            ${isUser == true ? 'opacity-[1] z-[2]' : 'opacity-[0] z-[0]'}
          `}
        >
          <p
            onClick={() => setIsUser(false)}
            className={`
              absolute top-0 right-0 text-[30px] m-4 transition-all duration-[.3s] cursor-pointer hover:scale-[1.2] hover:rotate-[180deg]
          `}>&#10005;</p>

          {name == "" && password == "" && (
            <p>
              Insira os dados necessários
            </p>
          )}

          {name == "" && password !== "" && (
            <p>
              insira um nome de usuário
            </p>  
          )}

          {password == "" && name !== "" && (
            <p>
              insira uma senha
            </p>  
          )}

          {name !== "" && password !== "" && (
            <p>
              Usuário: <span className={`${randomBg == bg1 ? 'text-[#008AFF]' : 'text-[#FF6DFF]'}`}>{name}</span>
                <br />
                Senha: <span className={`${randomBg == bg1 ? 'text-[#008AFF]' : 'text-[#FF6DFF]'}`}>{password}</span>
            </p>
          )}
        </div>
    </div>
  )
}
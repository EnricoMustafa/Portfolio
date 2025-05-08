import { Fragment, React, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { LiaGithub } from "react-icons/lia";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { VscLoading } from "react-icons/vsc";


export default function App() {

  const [width, setWidth] = useState('w-0');
  const [color, setColor ] = useState('bg-red-500');
  const [progress, setProgress ] = useState('w-0');

  const [text] = useTypewriter({
    words: [
      "Seja Bem-vindo!",
      "Meu nome é Enrico Mustafa",
      "Esse é o meu portifolio",
    ],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <Fragment>
      <section className="flex items-center h-screen justify-center ">
        <div className="flex items-center gap-40 px-4">
          {/* Texto */}
          <div className="max-w-xl">
            <h1 className="flex items-center h-20">
              <span className="font-serif text-5xl whitespace-nowrap">
                {text}
              </span>
            </h1>
            <p className="mt-4 font-serif text-3xl text-justify">
              Estudante de Sistemas de Informação, com conhecimentos em
              desenvolvimento web e mobile.
            </p>

            <div className="flex items-center justify-center gap-6 mt-10">
              <a
                href="https://www.linkedin.com/in/enricobrasil/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  className="transition-all hover:text-gray-300"
                  size={50}
                />
              </a>
              <a
                href="https://github.com/EnricoMustafa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LiaGithub
                  className="transition-all hover:text-gray-300"
                  size={60}
                />
              </a>
              <a
                href="https://wa.me/5571993483883"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp
                  className="transition-all hover:text-gray-300"
                  size={50}
                />
              </a>
              <a
                className="text-white transition-all bg-black rounded-md hover:text-gray-500 p-3 hover:bg-gray-300"
                href="src/public/docs/ENRICO_MUSTAFA_Curriculo.pdf"
                download="Meu-Curriculo.pdf"
              >
                Baixar CV
              </a>
            </div>
          </div>

          <div className="w-96">
            <img
              src="src/assets/perfil.jpg"
              alt="Foto de perfil"
              className="object-cover rounded-full animate- shadow w-96 h-96"
            />
          </div>
        </div>
      </section>

      <section className="h-screen mt-14">
        <h1 className="text-black font-serif text-5xl flex justify-center">
          Tecnologias
        </h1>
        <div className= "flex w-full justify-center gap-52 mt-32 items-center ">
          <div className="bg-black p-4 rounded-xl shadow-xl w-96 h-96">
            <div className="flex justify-center flex-wrap w-80 items-center h-full m-auto gap-4">
            <IoLogoJavascript 
            onClick={() => {
              setColor('bg-yellow-500'),
              setWidth('w-40'),
              setProgress('w-2/4')

            }}
              size={70} color="#fff" className="hover:animate-pulse cursor-pointer" />
            <FaReact 
            onClick={() => {
              setColor('bg-yellow-500'),
              setWidth('w-40'),
              setProgress('w-3/4')
            }}
            size={70} color="#fff" className="hover:animate-pulse cursor-pointer" />
            <FaJava onClick={() => {
              setColor('bg-green-500'),
              setWidth('w-24'),
              setProgress('w-full')
            }}
            size={70} color="#fff" className="hover:animate-pulse cursor-pointer" />
            <RiTailwindCssFill onClick={() => {
              setColor('bg-yellow-500'),
              setWidth('w-40'),
              setProgress('w-2/4')
            }}
            size={70} color="#fff" className="hover:animate-pulse cursor-pointer" />
            <FaNode
            onClick={() => {
              setColor('bg-red-500'),
              setWidth('w-24'),
              setProgress('w-1/4')
            }} size={70} color="#fff" className="hover:animate-pulse cursor-pointer" />
            <FaGitAlt onClick={() => {
              setColor('bg-green-500'),
              setWidth('w-80'),
              setProgress('w-full')
            }} 
            size={70} color="#fff" className="hover:animate-pulse cursor-pointer" />
            </div>
          </div>
          
            <div className="flex-wrap items-center w-96 ">
              <div className="bg-slate-300 w-full rounded-2xl">
                <div className={`${width} h-10 ${color} ${progress} transition-all duration-700 ease-in-out rounded-2xl`}>
                <p className="text-center font-serif font-semibold p-2">Progresso</p>
                </div>
              </div>
              <div className="text-black flex justify-around w-full font-semibold">
                <p>Basico</p>
                <p>Intermediario</p>
                <p>Avançado</p>
              </div>
          </div>
        </div>
      </section>

      <section className="h-screen mt-14">
      <h1 className="text-black font-serif text-5xl flex justify-center">
          Projetos
          <p className="text-sm">
          (Em breve)
          </p>
      </h1>
        <div className="justify-center flex m-auto h-4/6 items-center mt-6 bg-black">
      <VscLoading className="animate-spin text-white" size={80}/>
        </div>
        <div className="w-full h-full items-center hidden ">
        <div className="w-4/6 m-auto items-center gap-x-7 gap-y-14 flex justify-around flex-wrap">
          <div className="w-80 h-92 bg-white shadow-2xl rounded-xl ">
            <div className="flex justify-center">
              <img src="src/assets/disco.png" width="250" alt="" />
            </div>
            <div>
              <p className="text-justify p-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Officiis dolorum autem natus architecto corporis nulla vitae eveniet, saepe aspernatur! 
                Consequatur 
                soluta dolorem explicabo, quasi consectetur doloribus officia iure veniam omnis.</p>
            </div>
          </div>
          <div className="w-80 h-92 bg-white  shadow-2xl rounded-xl">
            <div className="flex justify-center">
              <img src="src/assets/disco.png" width="250" alt="" />
            </div>
            <div>
              <p className="text-justify p-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Officiis dolorum autem natus architecto corporis nulla vitae eveniet, saepe aspernatur! 
                Consequatur 
                soluta dolorem explicabo, quasi consectetur doloribus officia iure veniam omnis.</p>
            </div>
          </div>
          <div className="w-80 h-92 bg-white  shadow-2xl rounded-xl">
            <div className="flex justify-center">
              <img src="src/assets/disco.png" width="250" alt="" />
            </div>
            <div>
              <p className="text-justify p-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Officiis dolorum autem natus architecto corporis nulla vitae eveniet, saepe aspernatur! 
                Consequatur 
                soluta dolorem explicabo, quasi consectetur doloribus officia iure veniam omnis.</p>
            </div>
          </div>
        </div>
        </div>
      </section>
    </Fragment>
  );
}

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
      <section className="flex items-center h-screen justify-center  bg-color1">
        <div className="flex items-center gap-40 px-4">
          {/* Texto */}
          <div className="max-w-xl">
            <h1 className="flex items-center h-20">
              <span className="font-serif text-5xl text-color3 whitespace-nowrap">
                {text}
              </span>
            </h1>
            <p className="mt-4 font-serif text-3xl text-color3 text-justify">
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
                  className="transition-all text-color3  hover:text-color2"
                  size={50}
                />
              </a>
              <a
                href="https://github.com/EnricoMustafa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LiaGithub
                  className="transition-all text-color3 hover:text-color2"
                  size={60}
                />
              </a>
              <a
                href="https://wa.me/5571993483883"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp
                  className="transition-all text-color3  hover:text-color2  "
                  size={50}
                />
              </a>
              <a
                className="text-white transition-all bg-color3 rounded-md hover:text-color3 p-3 hover:bg-color2"
                href="src/public/docs/ENRICO_MUSTAFA_Curriculo.pdf"
                download="Meu-Curriculo.pdf"
              >
                Baixar CV
              </a>
            </div>
          </div>

          <div className="w-96">
            <img
              src="src/assets/perfilSemFundo.png"
              alt="Foto de perfil"
              className="object-cover rounded-full animate- shadow w-96 h-96 bg-color2"
            />
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-black font-serif text-5xl flex justify-center">
          Tecnologias
        </h1>
        <div className= "flex w-full justify-center gap-52 mt-4 items-center ">
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
    </Fragment>
  );
}

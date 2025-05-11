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
import { FaPython } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";


export default function App() {

  const [color, setColor ] = useState('bg-red-500');
  const [progress, setProgress ] = useState('w-0');
  const [ textTec, setTextTec ] = useState("Texto de descrição");
  const [ animacao, setAnimacao] = useState('animate-none');

  const texto = [
  <ul>
    <li>-Declaração de variáveis;</li>
    <li>-Tipos de dados;</li>
    <li>-Operadores e estruturas de controle;</li>
    <li>-Funções;</li>
    <li>-Escopo e hoisting;</li>
    <li>-Manipulação de arrays e objetos;</li>
    <li>-Interação com o DOM;</li>
    <li>-Eventos;</li>
  </ul>,
    <ul>
    <li>React</li>
    <li>React</li>
    <li>React</li>
    <li>React</li>
  </ul>,
    <ul>
    <li>Java</li>
    <li>Java</li>
    <li>Java</li>
    <li>Java</li>
  </ul>,
    <ul>
    <li>Tailwind</li>
    <li>Tailwind</li>
    <li>Tailwind</li>
    <li>Tailwind</li>
  </ul>,
    <ul>
    <li>Node</li>
    <li>Node</li>
    <li>Node</li>
    <li>Node</li>
  </ul>,
    <ul>
    <li>Git</li>
    <li>Git</li>
    <li>Git</li>
    <li>Git</li>
  </ul>,

]

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

          <div className="w-96 ">
            <img
              src="src/assets/perfil.jpg"
              alt="Foto de perfil"
              className="object-cover rounded-full w-96 h-96"
            />
          </div>
        </div>
      </section>

{/* Tecnologias */}
      <section className="h-screen">
        <h1 className="text-black font-serif pt-12 text-5xl text-center">
          Tecnologias
        </h1>
        <div className= "flex w-full h-3/5 items-center justify-center gap-32">
          <div className="p-4 rounded-xl shadow-xl w-2/5 border border-gray-400 h-96">
            <h1 className="text-black text-center font-serif text-2xl">Clique em uma linguagem e veja meu nivel de experiencia</h1>
            <div className="flex justify-center flex-wrap w-full items-center h-3/4 m-auto gap-4">
            <IoLogoJavascript 
            onClick={() => {
              setColor('bg-yellow-500'),
              setProgress('w-2/4'),
              setTextTec(texto[0])
            }}
              size={70} color="#000" className="hover:animate-pulse cursor-pointer" />
            <FaReact 
            onClick={() => {
              setColor('bg-yellow-500'),
              setProgress('w-1/2'),
              setTextTec(texto[1])
            }}
            size={70} color="#000" className="hover:animate-pulse cursor-pointer" />
            <FaJava onClick={() => {
              setColor('bg-red-500'),
              setProgress('w-1/4'),
              setTextTec(texto[2])
            }}
            size={70} color="#000" className="hover:animate-pulse cursor-pointer" />
            <RiTailwindCssFill onClick={() => {
              setColor('bg-yellow-500'),
              setProgress('w-2/4'),
              setTextTec(texto[3])
            }}
            size={70} color="#000" className="hover:animate-pulse cursor-pointer" />
            <FaNode
            onClick={() => {
              setColor('bg-red-500'),
              setProgress('w-1/4'),
              setTextTec(texto[4])
            }} size={70} color="#000" className="hover:animate-pulse cursor-pointer" />
            <FaGitAlt onClick={() => {
              setColor('bg-yellow-500'),
              setProgress('w-1/2'),
              setTextTec(texto[5])
            }} 
            size={70} color="#000" className="hover:animate-pulse cursor-pointer" />
            <FaPython onClick={() => {
              setColor('bg-yellow-500'),
              setProgress('w-1/4'),
              setTextTec(texto[5])
            }}
            size={70} color="#000" className="hover:animate-pulse cursor-pointer" /> 
            <FaCss3Alt onClick={() => {
              setColor('bg-yellow-500'),
              setProgress('w-2/3'),
              setTextTec(texto[5])
            }}
            size={70} color="#000" className="hover:animate-pulse cursor-pointer" /> 
            <FaHtml5  onClick={() => {
              setColor('bg-green-500'),
              setProgress('w-3/4'),
              setTextTec(texto[5])
            }}
            size={70} color="#000" className="hover:animate-pulse cursor-pointer" /> 
            <GrMysql onClick={() => {
              setColor('bg-red-500'),
              setProgress('w-1/4'),
              setTextTec(texto[5])
            }} 
            size={70} color="#000" className="hover:animate-pulse cursor-pointer" />

            </div>
          </div>

          <div className="p-4 rounded-xl shadow-xl w-96 h-96 border border-gray-400">
            <h1>{textTec}</h1>
          </div>

          </div>
            <div className="flex-wrap w-full m-auto">
              <div className="bg-white w-96 m-auto shadow-xl rounded-2xl border border-black">
                <div className={`h-10 ${color} ${progress} transition-all duration-700 ease-in-out  rounded-2xl`}>
                <p className="text-center font-serif font-semibold p-2">Progresso</p>
                </div>
              </div>
              <div className="text-black flex justify-around w-96 m-auto font-semibold">
                <p>Basico</p>
                <p>Intermediario</p>
                <p>Avançado</p>
              </div>
          </div>
      </section>

      {/* Projetos */}
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

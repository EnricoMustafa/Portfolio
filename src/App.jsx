import { Fragment, React, useEffect, useState } from "react";
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
import emailjs from '@emailjs/browser';


export default function App() {

  const semTela = (e) => {
    e.preventDefault();
    alert("ESSE PROJETO ESTÀ EM CONSTRUÇÂO, CLIQUE EM 'OK' PARA RECARREGAR A PAGINA");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name === '' || email === '' || message === ''){
      alert("Preencha todos os campos corretamente");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }
    emailjs.send("service_tfdd004", "template_6xakmq2", templateParams, "kfVmYLort6SkcIyZc")
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      console.log(templateParams)
      setSuccessMessage(true);
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log("Error:", err)
    })
  }
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
    <li>-JSX e renderização de componentes;</li>
    <li>-Componentes funcionais e de classe;</li>
    <li>-Ciclo de vida dos componentes;</li>
    <li>-Hooks (useState, useEffect, etc.);</li>
  </ul>,
    <ul>
    <li>-Tipos primitivos e variáveis;</li>
    <li>-Operadores e controle de fluxo;</li>
    <li>-Classes, objetos e métodos;</li>
    <li>-Herança;</li>
    <li>-Polimorfismo;</li>
    <li>-Encapsulamento;</li>
    <li>-Interfaces e classes abstratas;</li>
    <li>-Tratamento de exceções;</li>
  </ul>,
    <ul>
    <li>-Sistema de utilitários;</li>
    <li>-Responsividade;</li>
    <li>-Pseudo-classes;</li>
    <li>-Grid e Flexbox com Tailwind;</li>
    <li>-Customização com tailwind.config.js;</li>
    <li>-Animações e transições;</li>
  </ul>,
    <ul>
    <li>-Módulos (require, import, exports);</li>
    <li>-npm e package.json;</li>
    <li>-Sistema de arquivos (fs);</li>
    <li>-Eventos e EventEmitter;</li>
    <li>-Servidor com http ou express;</li>
  </ul>,
    <ul>
    <li>-git init, clone, add, commit, push, pull;</li>
    <li>-Branches e merge;</li>
    <li>-Resolução de conflitos;</li>
    <li>-GitHub: clone, fork, pull request;</li>
    <li>-.gitignore;</li>
    <li>-Histórico de commits;</li>
    <li>-Revert e reset;</li>
  </ul>,
    <ul>
    <li>-Sintaxe básica e identação;</li>
    <li>-Tipos de dados e variáveis;</li>
    <li>-Controle de fluxo (if, for, while);</li>
    <li>-Funções e lambda;</li>
    <li>-Listas, dicionários, tuplas, sets;</li>
  </ul>,
    <ul>
    <li>-Seletores e especificidade;</li>
    <li>-Box model;</li>
    <li>-Flexbox e Grid;</li>
    <li>-Pseudo-classes e pseudo-elementos;</li>
    <li>-Animações e transições;</li>
    <li>-Media queries;</li>
    <li>-Positioning (relative, absolute, etc.);</li>
    <li>-Custom properties (variáveis CSS);</li>  
  </ul>,
    <ul>
    <li>-Tags semânticas;</li>
    <li>-Formulários e inputs;</li>
    <li>-Tabelas e listas;</li>
    <li>-Atributos globais (id, class);</li>
    <li>-Links e navegação;</li>
  </ul>,
    <ul>
    <li>-Criação de banco e tabelas;</li>
    <li>-Tipos de dados;</li>
    <li>-SELECT, INSERT, UPDATE, DELETE;</li>
    <li>-JOIN;</li>
  </ul>,

]

  const [color, setColor] = useState('bg-red-500');
  const [progress, setProgress] = useState('w-0');
  const [textTec, setTextTec] = useState(texto[0]);
  const [titleTec, settitleTec] = useState('Javascript');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    if(successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage])


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
        <div className= "flex w-full h-3/5 items-center justify-center gap-3">
          <div className="p-4 rounded-xl shadow-xl w-2/5 border border-gray-400 h-96">
            <h1 className="text-center text-2xl font-bold mt-2">Clique em uma linguagem e veja meu nivel de experiencia</h1>
            <div className="flex justify-center flex-wrap mt-4 w-full items-center h-3/4 gap-4">
            <IoLogoJavascript 
            onClick={() => {
              setColor('bg-yellow-500'),
              setProgress('w-2/4'),
              setTextTec(texto[0]),
              settitleTec('Javascript');
            }}
              size={70} color="#000" className="hover:animate-pulse cursor-pointer transition-transform duration-600 hover:scale-110" />
            <FaReact 
            onClick={() => {
              setColor('bg-yellow-500'),
              setProgress('w-1/2'),
              setTextTec(texto[1]),
              settitleTec('React');
            }}
            size={70} color="#000" className="hover:animate-pulse cursor-pointer transition-transform duration-600 hover:scale-110" />
            <FaJava onClick={() => {
              setColor('bg-red-500'),
              setProgress('w-1/4'),
              setTextTec(texto[2]),
              settitleTec('Java');
            }}
            size={70} color="#000" className="hover:animate-pulse cursor-pointer transition-transform duration-600 hover:scale-110" />
            <RiTailwindCssFill onClick={() => {
              setColor('bg-yellow-500'),
              setProgress('w-2/4'),
              setTextTec(texto[3]),
              settitleTec('Tailwind');
            }}
            size={70} color="#000" className="hover:animate-pulse cursor-pointer transition-transform duration-600 hover:scale-110" />
            <FaNode
            onClick={() => {
              setColor('bg-red-500'),
              setProgress('w-1/4'),
              setTextTec(texto[4]),
              settitleTec('Node');
            }} 
            size={70} color="#000" className="hover:animate-pulse cursor-pointer transition-transform duration-600 hover:scale-110" />
            <FaGitAlt onClick={() => {
              setColor('bg-yellow-500'),
              setProgress('w-1/2'),
              setTextTec(texto[5]),
              settitleTec('Git');
            }} 
            size={70} color="#000" className="hover:animate-pulse cursor-pointer transition-transform duration-600 hover:scale-110" />
            <FaPython onClick={() => {
              setColor('bg-red-500'),
              setProgress('w-1/4'),
              setTextTec(texto[6]),
              settitleTec('Python');
            }}
            size={70} color="#000" className="hover:animate-pulse cursor-pointer transition-transform duration-600 hover:scale-110" /> 
            <FaCss3Alt onClick={() => {
              setColor('bg-yellow-500'),
              setProgress('w-2/3'),
              setTextTec(texto[7]),
              settitleTec('CSS');
            }}
            size={70} color="#000" className="hover:animate-pulse cursor-pointer transition-transform duration-600 hover:scale-110" /> 
            <FaHtml5  onClick={() => {
              setColor('bg-green-500'),
              setProgress('w-3/4'),
              setTextTec(texto[8]),
              settitleTec('HTML');
            }}
            size={70} color="#000" className="hover:animate-pulse cursor-pointer transition-transform duration-600 hover:scale-110" /> 
            <GrMysql onClick={() => {
              setColor('bg-red-500'),
              setProgress('w-1/4'),
              setTextTec(texto[9]),
              settitleTec('MySql');
            }} 
            size={70} color="#000" className="hover:animate-pulse cursor-pointer transition-transform duration-600 hover:scale-110" />

            </div>
          </div>

          <div className="p-4 rounded-xl shadow-xl w-96 h-96 text-xl border border-gray-400">
            <h1 className="text-center text-2xl font-bold">{titleTec}</h1>
            <h1 className="mt-4">{textTec}</h1>
          </div>

          </div>
            <div className="flex-wrap w-full m-auto">
              <div className="bg-white w-96 m-auto shadow-xl rounded-2xl border border-gray-400">
                <div className={`h-10 ${color} ${progress} transition-all duration-700 ease-in-out  rounded-2xl`}>
                <p className="text-center font-serif font-semibold p-2">Nivel</p>
                </div>
              </div>
              <div className="text-black flex justify-around w-96 m-auto font-semibold">
                <p>Basico</p>
                <p>Intermediario</p>
                <p>Avançado</p>
              </div>
          </div>
      </section>

      <section className="h-screen w-full ">
      <h1 className="text-black pt-12 font-serif text-5xl flex justify-center">
          Projetos
      </h1>
       <div className= "flex h-3/5 items-center mt-4 w-full justify-center gap-3">
          <div className="p-8 rounded-xl shadow-xl w-3/4 border border-gray-400 items-center flex justify-around h-5/6">
          <div>
            <h1 className="text-center font-semibold text-2xl">Verificador de senha</h1>
          <div className="w-96 h-52 bg-black rounded-t-xl mt-2 border border-gray-400">
            <img src="src/assets/VerificadorSenha.jpg" className="object-cover rounded-t-xl w-full h-full " alt="Verificador de senha"/>
          </div>
          <div className="bg-black rounded-b-xl p-3 justify-center gap-6 flex">
            <IoLogoJavascript
            color="white"
            size={25}  
            className=""
            />

            <FaReact
            color="white"
            size={25}  
            className=""/>

            <RiTailwindCssFill
            color="white"
            size={25}  
            className=""/>

          </div>
          <div className="flex justify-around mt-3">
            <button className="bg-black text-white p-2 w-20 rounded-lg hover:animate-pulse hover:bg-gray-400 font-semibold "> <a target="_blank" href="https://enricomustafa.github.io/VerificadorDeSenha/">Acessar</a></button>
            <button className="bg-black text-white p-2 w-20 rounded-lg hover:animate-pulse hover:bg-gray-400 font-semibold"> <a target="_blank" href="https://github.com/EnricoMustafa/VerificadorDeSenha">Github</a></button>
          </div>
          </div>

          <div>
            <h1 className="text-center font-semibold text-2xl">Em breve</h1>
          <div className="w-96 h-52 bg-black rounded-t-xl mt-2 border border-gray-400">
            <VscLoading color="white" size={50} className="m-auto flex justify-center  mt-20 animate-spin"/>
            <img src="src/assets/VerificadorSenha.jpg" className="object-cover rounded-t-xl hidden w-full h-full " alt="Verificador de senha"/>
          </div>
          <div className="bg-black rounded-b-xl ">
            <h1 className="text-white text-center font-semibold p-1">Em Processo</h1>
          </div>
          <div className="flex justify-around mt-3">
            <button className="bg-black text-white p-2 w-20 rounded-lg hover:animate-pulse hover:bg-gray-400 font-semibold "> <a href="" onClick={(e) => {semTela(e)}}>Acessar</a></button>
            <button className="bg-black text-white p-2 w-20 rounded-lg hover:animate-pulse hover:bg-gray-400 font-semibold"> <a target="_blank" href="https://github.com/EnricoMustafa/VerificadorDeSenha">Github</a></button>
          </div>
          </div>
          </div>
       </div>
      </section>

      <section className="h-2/4 w-full">

      <div className="p-4 rounded-xl shadow-xl w-2/5 border m-auto border-gray-400 h-96">
      <h1 className="text-black  font-serif text-5xl flex justify-center">
          Contato
      </h1>
      <form className="flex items-center justify-center  flex-col gap-3 mt-5" onSubmit={handleSubmit}>
            <input className="border rounded-xl w-2/4 p-2" type="text" placeholder="Digite seu nome" onChange={(e) => {setName(e.target.value)}} value={name}/>
            <input className="border rounded-xl w-2/4 p-2" type="text" placeholder="Digite seu email" onChange={(e) => {setEmail(e.target.value)}} value={email}/>
            <textarea className="border rounded-xl w-2/4 p-2 " type="text" placeholder="Digite sua mensagem..." onChange={(e) => {setMessage(e.target.value)}} value={message}/>
            <input type="submit" className="bg-black rounded-lg cursor-pointer mt-2 hover:bg-white hover:text-black border text-white w-1/4 p-3"/ >
            {successMessage && <p className="font-bold">Enviado com sucesso! ✅ </p>}
      </form>
      </div>
      </section>
    </Fragment>
  );
}

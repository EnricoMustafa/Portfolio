import { Fragment, useEffect, useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { LiaGithub } from "react-icons/lia";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscLoading } from "react-icons/vsc";
import emailjs from "@emailjs/browser";
import Tech from "../src/components/Tecnologias";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const semTela = (e) => {
    e.preventDefault();
    alert("ESSE PROJETO ESTÀ EM CONSTRUÇÂO!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos corretamente");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };
    emailjs
      .send(
        "service_tfdd004",
        "template_6xakmq2",
        templateParams,
        "kfVmYLort6SkcIyZc"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          console.log(templateParams);
          setSuccessMessage(true);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("Error:", err);
        }
      );
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const [text] = useTypewriter({
    words: [
      "Seja Bem-vindo!",
      "Meu nome é Enrico Brasil",
      "Esse é o meu portfólio",
    ],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <Fragment>
<section className="flex items-center  justify-center min-h-screen  px-4 py-8 
 ">
  <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-40 w-full max-w-6xl">
    
    {/* Texto + links */}
    <div className="w-full lg:max-w-xl text-center  lg:text-left">
      <h1 className="h-20 flex items-center justify-center lg:justify-start">
        <span className="font-title font-semibold  text-3xl sm:text-4xl md:text-5xl sm:flex-wrap lg:whitespace-nowrap">
          {text}
        </span>
      </h1>
      
      <p className="mt-4 font-title font-extralight text-[#6b7280] text-lg sm:text-xl md:text-2xl text-justify">
        Estudante de Sistemas de Informação, com conhecimentos em
        desenvolvimento web e mobile.
      </p>

      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10">
        <a
          href="https://www.linkedin.com/in/enricobrasil/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="transition-all hover:text-gray-300" size={40} />
        </a>
        <a href="https://github.com/EnricoMustafa" target="_blank">
          <LiaGithub className="transition-all hover:text-gray-300" size={50} />
        </a>
        <a href="https://wa.me/5571993483883" target="_blank">
          <IoLogoWhatsapp className="transition-all hover:text-gray-300" size={40} />
        </a>
        <a
          className="text-white font-title font-semibold transition-all bg-black rounded-md hover:text-black  p-3 hover:bg-gray-300"
          href="src/public/docs/CurriculoEnricoBrasil.pdf"
          download="Meu-Curriculo.pdf"
        >
          Baixar CV
        </a>
      </div>
    </div>

    {/* Imagem de perfil */}
    <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 ">
      <img
        src="src/public/assets/perfil.jpg"
        alt="Foto de perfil"
        className="object-cover rounded-full w-full h-full bg-white border"
      />
    </div>
  </div>
</section>
      <Tech />
<section className="min-h-screen w-full px-4 py-8 ">
  <h1 className="text-black pt-4 font-title font-semibold text-3xl sm:text-4xl md:text-5xl text-center">
    Meus projetos
  </h1>

  <div className="flex flex-col lg:flex-row items-center justify-center m-auto gap-10 mt-8 w-full">
    {/* Projeto 1 */}
    <div className="p-6 rounded-xl shadow-xl w-full max-w-md border border-gray-400 flex flex-col items-center h-auto">
      <h1 className="text-center font-title font-semibold text-xl sm:text-2xl">
        Verificador de senha
      </h1>
      <div className="w-full h-48 sm:h-52 bg-black rounded-t-xl mt-2 border border-gray-400">
        <img
          src="src/public/assets/VerificadorSenha.jpg"
          className="object-cover rounded-t-xl w-full h-full"
          alt="Verificador de senha"
        />
      </div>
      <div className="bg-black rounded-b-xl p-3 flex justify-center gap-6 w-full">
        <IoLogoJavascript color="white" size={25} />
        <FaReact color="white" size={25} />
        <RiTailwindCssFill color="white" size={25} />
      </div>
      <div className="flex justify-around mt-3 w-full">
        <a
          target="_blank"
          href="https://enricomustafa.github.io/VerificadorDeSenha/"
          className="bg-black text-white p-2 w-24 rounded-lg hover:animate-pulse hover:bg-gray-400 font-title font-semibold text-center"
        >
          Acessar
        </a>
        <a
          target="_blank"
          href="https://github.com/EnricoMustafa/VerificadorDeSenha"
          className="bg-black text-white p-2 w-24 rounded-lg hover:animate-pulse hover:bg-gray-400 font-title font-semibold text-center"
        >
          Github
        </a>
      </div>
    </div>
    <div className="p-6 rounded-xl shadow-xl w-full max-w-md border border-gray-400 flex flex-col items-center h-auto">
      <h1 className="text-center font-title  font-semibold text-xl sm:text-2xl">
       Em breve
      </h1>
      <div className="w-full h-48 sm:h-52 justify-center flex items-center bg-black rounded-t-xl mt-2 border border-gray-400">
          <VscLoading
          color="white"
          size={50}
          className="animate-spin"
        />
      </div>
      <div className="bg-black text-white font-bold rounded-b-xl p-3 flex justify-center gap-6 w-full">
        <p>?</p>
        <p>?</p>
        <p>?</p>
      </div>
      <div className="flex justify-around mt-3 w-full">
        <a
          target="_blank"
          href="https://enricomustafa.github.io/VerificadorDeSenha/"
          className="bg-black text-white p-2 w-24 rounded-lg hover:animate-pulse hover:bg-gray-400 font-title font-semibold text-center"
        >
          Acessar
        </a>
        <a
          target="_blank"
          href="https://github.com/EnricoMustafa/VerificadorDeSenha"
          className="bg-black text-white p-2 w-24 rounded-lg hover:animate-pulse hover:bg-gray-400 font-title font-semibold text-center"
        >
          Github
        </a>
      </div>
    </div>
  </div>
</section>

<section className="w-full px-4 py-12">
  <div className="p-4 rounded-xl shadow-xl border border-gray-400 w-full max-w-2xl mx-auto h-auto">
    <h1 className="text-black font-title font-semibold text-3xl sm:text-4xl md:text-5xl text-center">
      Contato
    </h1>
    <form
      className="flex flex-col items-center justify-center gap-4 mt-6 w-full"
      onSubmit={handleSubmit}
    >
      <input
        className="border font-title rounded-xl w-full sm:w-4/5 p-2"
        type="text"
        placeholder="Digite seu nome"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        className="border font-title rounded-xl w-full sm:w-4/5 p-2"
        type="email"
        placeholder="Digite seu email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <textarea
        className="border font-title rounded-xl w-full sm:w-4/5 p-2"
        placeholder="Digite sua mensagem..."
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        rows={4}
      />
      <input
        type="submit"
        value="Enviar"
        className="bg-black rounded-lg cursor-pointer mt-2 hover:bg-white hover:text-black border text-white w-1/2 sm:w-1/3 p-3 font-title font-semibold"
      />
      {successMessage && (
        <p className="font-bold font-title text-green-600 text-center">
          Enviado com sucesso! ✅
        </p>
      )}
    </form>
  </div>
</section>

      <footer className="bg-black text-white font-title flex justify-center p-4 mt-44 ">
        <p className="p-5 flex gap-3">
          © Desenvolvido por<p className="font-bold">Enrico Brasil</p> 
        </p>
      </footer>
    </Fragment>
  );
}

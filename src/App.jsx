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
              <a href="https://github.com/EnricoMustafa" target="_blank">
                <LiaGithub
                  className="transition-all hover:text-gray-300"
                  size={60}
                />
              </a>
              <a href="https://wa.me/5571993483883" target="_blank">
                <IoLogoWhatsapp
                  className="transition-all hover:text-gray-300"
                  size={50}
                />
              </a>
              <a
                className="text-white transition-all bg-black rounded-md hover:text-black font-semibold p-3 hover:bg-gray-300"
                href="src/public/docs/CurriculoEnricoBrasil.pdf"
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
      <Tech />
      <section className="h-screen w-full ">
        <h1 className="text-black pt-12 font-serif text-5xl flex justify-center">
          Meus projetos
        </h1>
        <div className="flex h-3/5 items-center mt-4 w-full justify-center gap-3">
          <div className="p-8 rounded-xl shadow-xl w-3/4 border border-gray-400 items-center flex justify-around h-5/6">
            <div>
              <h1 className="text-center font-semibold text-2xl">
                Verificador de senha
              </h1>
              <div className="w-96 h-52 bg-black rounded-t-xl mt-2 border border-gray-400">
                <img
                  src="src/assets/VerificadorSenha.jpg"
                  className="object-cover rounded-t-xl w-full h-full "
                  alt="Verificador de senha"
                />
              </div>
              <div className="bg-black rounded-b-xl p-3 justify-center gap-6 flex">
                <IoLogoJavascript color="white" size={25} className="" />

                <FaReact color="white" size={25} className="" />

                <RiTailwindCssFill color="white" size={25} className="" />
              </div>
              <div className="flex justify-around mt-3">
                <button className="bg-black text-white p-2 w-20 rounded-lg hover:animate-pulse hover:bg-gray-400 font-semibold ">
                  {" "}
                  <a
                    target="_blank"
                    href="https://enricomustafa.github.io/VerificadorDeSenha/"
                  >
                    Acessar
                  </a>
                </button>
                <button className="bg-black text-white p-2 w-20 rounded-lg hover:animate-pulse hover:bg-gray-400 font-semibold">
                  {" "}
                  <a
                    target="_blank"
                    href="https://github.com/EnricoMustafa/VerificadorDeSenha"
                  >
                    Github
                  </a>
                </button>
              </div>
            </div>

            <div>
              <h1 className="text-center font-semibold text-2xl">Em breve</h1>
              <div className="w-96 h-52 bg-black rounded-t-xl mt-2 border border-gray-400">
                <VscLoading
                  color="white"
                  size={50}
                  className="m-auto flex justify-center  mt-20 animate-spin"
                />
                <img
                  src="src/assets/VerificadorSenha.jpg"
                  className="object-cover rounded-t-xl hidden w-full h-full "
                  alt="Verificador de senha"
                />
              </div>
              <div className="bg-black rounded-b-xl ">
                <h1 className="text-white text-center font-semibold p-1">
                  Em Processo
                </h1>
              </div>
              <div className="flex justify-around mt-3">
                <button className="bg-black text-white p-2 w-20 rounded-lg hover:animate-pulse hover:bg-gray-400 font-semibold ">
                  {" "}
                  <a
                    href=""
                    onClick={(e) => {
                      semTela(e);
                    }}
                  >
                    Acessar
                  </a>
                </button>
                <button className="bg-black text-white p-2 w-20 rounded-lg hover:animate-pulse hover:bg-gray-400 font-semibold">
                  {" "}
                  <a
                    href=""
                    onClick={(e) => {
                      semTela(e);
                    }}
                  >
                    Github
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-2/4 ">
        <div className="p-4 rounded-xl shadow-xl w-2/4 border m-auto border-gray-400 h-96 ">
          <h1 className="text-black  font-serif text-5xl flex justify-center">
            Contato
          </h1>
          <form
            className="flex items-center justify-center  flex-col gap-3 mt-5"
            onSubmit={handleSubmit}
          >
            <input
              className="border rounded-xl w-2/4 p-2"
              type="text"
              placeholder="Digite seu nome"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
            <input
              className="border rounded-xl w-2/4 p-2"
              type="text"
              placeholder="Digite seu email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <textarea
              className="border rounded-xl w-2/4 p-2 "
              type="text"
              placeholder="Digite sua mensagem..."
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
            />
            <input
              type="submit"
              className="bg-black rounded-lg cursor-pointer mt-2 hover:bg-white hover:text-black border text-white w-1/4 p-3"
            />
            {successMessage && (
              <p className="font-bold">Enviado com sucesso! ✅ </p>
            )}
          </form>
        </div>
      </section>

      <footer className="bg-black text-white flex justify-center p-4 mt-64 ">
        <p className="p-5">
          © 2025 Enrico Brasil. Todos os direitos reservados.
        </p>
      </footer>
    </Fragment>
  );
}

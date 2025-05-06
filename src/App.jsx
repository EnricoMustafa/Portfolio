import { Fragment, React } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function App() {
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
      <header className="flex items-center justify-around mt-10 bg-transparent">
        <h1 className="font-serif text-4xl font-semibold">EM</h1>

        <nav className="flex font-serif text-lg">
          <ul className="flex gap-4">
            <a>Sobre</a>
            <a>Tecnologias</a>
            <a>Entre em contato</a>
          </ul>
        </nav>
      </header>

      <section className="flex items-center justify-center mt-40">
  <div className="flex items-center gap-40 px-4">
    {/* Texto */}
    <div className="max-w-xl">
      <h1 className="flex items-center h-20">
        <span className="font-serif text-5xl whitespace-nowrap">
          {text}
        </span>
      </h1>
      <p className="mt-4 font-serif text-3xl text-justify">
        Sou estudante de Sistemas de Informação, com conhecimentos em
        desenvolvimento web e mobile.
      </p>
    
    <div>
      <button>Linkedin</button>
      <button>Github</button>
      <button>whatsapp</button>
    </div>
    </div>


    {/* Imagem */}
    <div className="w-96">
      <img
        src="src/assets/perfil.jpg"
        alt="Foto de perfil"
        className="object-cover border-4 rounded-full shadow-lg w-96 h-96"
      />
    </div>
  </div>
</section>
    </Fragment>
  );
}

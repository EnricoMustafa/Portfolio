import {Fragment, React} from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function App() {
  const [text] = useTypewriter({
    words: ['Seja Bem-vindo!', 'Meu nome é Enrico Mustafa', 'Esse é o meu portifolio'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <Fragment>

      <header className="flex items-center justify-around mt-4 bg-transparent">
        <h1 className="font-serif text-4xl font-semibold">EM</h1>

        <nav className="flex font-serif text-lg">
          <ul className="flex gap-4">
          <a>Sobre</a>
          <a>Tecnologias</a>
          <a>Entre em contato</a>

          </ul>
        </nav>
      </header>

      <section className="flex justify-around bg-red-200 h-svh">
        <div className="flex items-center">

      <h1 className="flex items-center justify-around h-20 bg-green-200">
        <span className="font-serif text-5xl ">
          {text}
        </span>
        <span className="text-5xl">
        <Cursor cursorStyle='|'/>
        </span>
      </h1>
        </div>
      <p className=""> Sou estudante de Sistemas de Informação, com conhecimentos em desenvolvimento web e mobile.</p>
      </section>

      {/* <section class="flex items-center justify-center bg-red-300 h-svh">
        <div className="bg-white h-80 w-100">
  <p class="text-center max-w-xl px-4 font-serif text-3xl">
    Sou estudante de Sistemas de Informação, com conhecimentos em desenvolvimento web e mobile.
  </p>
        </div>
</section> */}


    </Fragment>
  )
};



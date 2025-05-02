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
        <h1 className="font-serif text-2xl font-semibold">EM</h1>

        <nav className="flex justify-around font-serif text-1xl w-80">
          <a href="">Sobre</a>
          <a href="">Tecnologias</a>
          <a href="">Entre em contato</a>
        </nav>
      </header>

      <div className="flex justify-center mt-40">
      <h1 className="m-12">
        <span className="font-serif text-5xl">
          {text}
        </span>
        <span className="text-5xl">
        <Cursor cursorStyle='|'/>
        </span>
      </h1>
      </div>
    </Fragment>
  )
};



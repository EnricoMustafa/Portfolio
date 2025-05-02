import { Fragment, useState } from "react";

export default function App() {

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

    </Fragment>
  )
};



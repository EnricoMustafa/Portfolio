import { Fragment, useState } from "react";

export default function App() {
  const [name, setname] = useState(false);

  return (
    <Fragment>

      <header className="bg-orange-600 flex justify-center">
        <ul className="w-screen h-10 items-center flex justify-evenly">
          <li className=" font-bold">Experiencias</li>
          <li className=" font-bold">Tecnologias</li>
          <li className=" font-bold">Projetos</li>
        </ul>
      </header>

      <div className=" h-screen flex justify-center items-center">
        <h1 className="font-bold text-6xl mb-72">Enrico Mustafa|</h1>
      </div>
    </Fragment>
  )
};



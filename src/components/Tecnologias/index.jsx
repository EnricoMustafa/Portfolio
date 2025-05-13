import { useState } from "react";
import { FaPython } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaNode } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Tech() {
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
  ];
  const [color, setColor] = useState("bg-red-500");
  const [progress, setProgress] = useState("w-0");
  const [textTec, setTextTec] = useState(texto[0]);
  const [titleTec, settitleTec] = useState("Javascript");

  return (
    <section className="h-screen">
      <h1 className="text-black font-serif pt-12 text-5xl text-center">
        Conhecimentos Técnicos
      </h1>
      <div className="flex w-full h-3/5 items-center justify-center gap-3">
        <div className="p-4 rounded-xl shadow-xl w-2/5 border border-gray-400 h-96">
          <h1 className="text-center text-2xl font-bold mt-2">
            Selecione uma linguagem para ver meu nível de experiência.
          </h1>
          <div className="flex justify-center flex-wrap mt-4 w-4/6 m-auto items-center h-3/4 gap-8">
            <FaHtml5
              onClick={() => {
                setColor("bg-green-500"),
                  setProgress("w-3/4"),
                  setTextTec(texto[8]),
                  settitleTec("HTML");
              }}
              size={70}
              color="#000"
              className="hover:animate-pulse cursor-pointer transition-transform duration-600 hover:scale-110"
            />
            <FaCss3Alt
              onClick={() => {
                setColor("bg-yellow-500"),
                  setProgress("w-2/3"),
                  setTextTec(texto[7]),
                  settitleTec("CSS");
              }}
              size={70}
              color="#000"
              className="hover:animate-pulse cursor-pointer transition-transform duration-600 hover:scale-110"
            />
            <IoLogoJavascript
              onClick={() => {
                setColor("bg-yellow-500"),
                  setProgress("w-2/4"),
                  setTextTec(texto[0]),
                  settitleTec("Javascript");
              }}
              size={70}
              color="#000"
              className="hover:animate-pulse cursor-pointer transition-transform duration-600 hover:scale-110"
            />
            <FaPython
              onClick={() => {
                setColor("bg-red-500"),
                  setProgress("w-1/4"),
                  setTextTec(texto[6]),
                  settitleTec("Python");
              }}
              size={70}
              color="#000"
              className="hover:animate-pulse cursor-pointer transition-transform duration-600 hover:scale-110"
            />
            <FaGitAlt
              onClick={() => {
                setColor("bg-yellow-500"),
                  setProgress("w-1/2"),
                  setTextTec(texto[5]),
                  settitleTec("Git");
              }}
              size={70}
              color="#000"
              className="hover:animate-pulse cursor-pointer transition-transform duration-600 hover:scale-110"
            />
            <FaReact
              onClick={() => {
                setColor("bg-yellow-500"),
                  setProgress("w-1/2"),
                  setTextTec(texto[1]),
                  settitleTec("React");
              }}
              size={70}
              color="#000"
              className="hover:animate-pulse cursor-pointer transition-transform duration-600 hover:scale-110"
            />
            <FaJava
              onClick={() => {
                setColor("bg-red-500"),
                  setProgress("w-1/4"),
                  setTextTec(texto[2]),
                  settitleTec("Java");
              }}
              size={70}
              color="#000"
              className="hover:animate-pulse cursor-pointer transition-transform duration-600 hover:scale-110"
            />
            <RiTailwindCssFill
              onClick={() => {
                setColor("bg-yellow-500"),
                  setProgress("w-2/4"),
                  setTextTec(texto[3]),
                  settitleTec("Tailwind");
              }}
              size={70}
              color="#000"
              className="hover:animate-pulse cursor-pointer transition-transform duration-600 hover:scale-110"
            />
            <FaNode
              onClick={() => {
                setColor("bg-red-500"),
                  setProgress("w-1/4"),
                  setTextTec(texto[4]),
                  settitleTec("Node");
              }}
              size={70}
              color="#000"
              className="hover:animate-pulse cursor-pointer transition-transform duration-600 hover:scale-110"
            />

            <GrMysql
              onClick={() => {
                setColor("bg-red-500"),
                  setProgress("w-1/4"),
                  setTextTec(texto[9]),
                  settitleTec("MySql");
              }}
              size={70}
              color="#000"
              className="hover:animate-pulse cursor-pointer transition-transform duration-600 hover:scale-110"
            />
          </div>
        </div>

        <div className="p-4 rounded-xl shadow-xl w-96 h-96 text-xl border border-gray-400">
          <h1 className="text-center text-2xl font-bold">{titleTec}</h1>
          <h1 className="mt-4">{textTec}</h1>
        </div>
      </div>
      <div className="flex-wrap w-full m-auto">
        <div className="bg-white w-96 m-auto shadow-xl rounded-2xl border border-gray-400">
          <div
            className={`h-10 ${color} ${progress} transition-all duration-700 ease-in-out  rounded-2xl`}
          >
            <p className="text-center font-serif font-semibold p-2">Nível</p>
          </div>
        </div>
        <div className="text-black flex justify-around w-96 m-auto font-semibold">
          <p>Basico</p>
          <p>Intermediario</p>
          <p>Avançado</p>
        </div>
      </div>
    </section>
  );
}

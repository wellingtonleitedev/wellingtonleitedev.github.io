import React from "react";
import { Wrapper } from "../../styles/global";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  return (
    <Wrapper>
      <h2>Desenvolvedor Full Stack</h2>
      <address>
        <FaMapMarkerAlt size={13} color="#2b292d" /> Ribeirão Preto - SP, Brasil
      </address>
      <article>
        Apaixonado pela minha profissão e uma sede insaciável por conhecimento,
        buscando sempre aprender algo novo todos os dias, e nem sempre sobre
        minha área de atuação, sempre tentando desenvolver não só o lado
        profissional, mas também o lado pessoal.
      </article>
    </Wrapper>
  );
}

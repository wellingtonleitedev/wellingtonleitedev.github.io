import React from "react";
import { FaMapMarkerAlt, FaBirthdayCake } from "react-icons/fa";
import { Wrapper, Title, Article } from "./styles";

export default function Header() {
    return (
        <Wrapper id="about">
            <Title>Desenvolvedor Full Stack</Title>
            <p><FaBirthdayCake size={15} color="#000000a7" /> 24 anos</p>
            <address>
                <FaMapMarkerAlt size={15} color="#000000a7" /> Ribeirão Preto - SP, Brasil
            </address>
            <Article>
                Apaixonado pela minha profissão e uma sede insaciável por conhecimento,
                buscando sempre aprender algo novo todos os dias, e nem sempre sobre
                minha área de atuação, sempre tentando desenvolver não só o lado
                profissional, mas também o lado pessoal.
            </Article>
        </Wrapper>
    );
}
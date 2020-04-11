import React from "react";
import { Wrapper, Title, List, Item, Header, Image, Nav } from "./styles";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function NavBar() {
  return (
    <Wrapper>
      <Header>
        <Image />
        <Title>Wellington Leite</Title>
        <List>
          <Item>
            <FaLinkedin size={15} color="#fff" />
          </Item>
          <Item>
            <FaInstagram size={15} color="#fff" />
          </Item>
          <Item>
            <FaEnvelope size={15} color="#fff" />
          </Item>
          <Item>
            <FaGithub size={15} color="#fff" />
          </Item>
        </List>
      </Header>
      <Nav>
        <ul>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#speciliaties">Habilidades</a></li>
          <li><a href="#experience">Experiência</a></li>
          <li><a href="#certifications">Certificados</a></li>
        </ul>
      </Nav>
    </Wrapper>
  );
}

import React from "react";
import { Wrapper, Title, List, Item, Header, Image } from "./styles";
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
    </Wrapper>
  );
}

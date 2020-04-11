import React from "react";
import { Container, Content, SideNavBar } from "./styles";
import NavBar from "../../components/NavBar";
import About from "../../components/About";
import Specialties from "../../components/Specialties";

export default function Main() {
  return (
    <Container>
      <SideNavBar>
        <NavBar />
      </SideNavBar>
      <Content>
        <About />
        <Specialties />
      </Content>
    </Container>
  );
}

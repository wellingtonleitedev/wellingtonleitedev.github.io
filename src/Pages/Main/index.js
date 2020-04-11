import React from "react";
import { Container, Content, SideNavBar } from "./styles";
import NavBar from "../../components/NavBar";
import About from "../../components/About";
import Specialties from "../../components/Specialties";
import Experience from "../../components/Experience";
import Certifications from "../../components/Certifications";

export default function Main() {
  return (
    <Container>
      <SideNavBar>
        <NavBar />
      </SideNavBar>
      <Content>
        <About />
        <Experience />
        <Specialties />
        <Certifications />
      </Content>
    </Container>
  );
}

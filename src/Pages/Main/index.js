import React from "react";
import { Container, Content, SideNavBar } from "./styles";
import NavBar from "../../components/NavBar";
import Specialties from "../../components/Specialties";
import Experience from "../../components/Experience";
import Certifications from "../../components/Certifications";
import Header from "../../components/Header";

export default function Main() {
  return (
    <>
      <Container>
        <SideNavBar>
          <NavBar />
        </SideNavBar>
        <Header />
        <Content>
          <Experience />
          <Specialties />
          <Certifications />
        </Content>
      </Container>
    </>
  );
}

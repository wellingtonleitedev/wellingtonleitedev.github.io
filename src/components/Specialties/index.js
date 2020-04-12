import React from "react";
import { Wrapper, Row, Col, Col2 } from "../../styles/global";
import { List, Item } from "./styles";

export default function Specialties() {
  return (
    <Wrapper id="speciliaties">
      <h2>Competências</h2>
      <Row>
        <Col2>
          <h3>Desenvolvimento Back-end</h3>
          <List>
            <Item>Node.js</Item>
            <Item>.NET</Item>
          </List>
        </Col2>
        <Col2>
          <h3>Desenvolvimento Front-end</h3>
          <List>
            <Item>ReactJS</Item>
            <Item>Javascript</Item>
            <Item>Jquery</Item>
          </List>
        </Col2>
      </Row>
      <Row>
        <Col2>
          <h3>Desenvolvimento Mobile</h3>
          <List>
            <Item>React Native</Item>
          </List>
        </Col2>
        <Col2>
          <h3>Banco de Dados</h3>
          <List>
            <Item>SQL Server</Item>
            <Item>MySQL</Item>
            <Item>MongoDB</Item>
          </List>
        </Col2>
      </Row>
      <Row>
        <Col>
          <h3>Outros</h3>
          <List>
            <Item>Git e Github</Item>
            <Item>Docker</Item>
          </List>
        </Col>
      </Row>
    </Wrapper>
  );
}

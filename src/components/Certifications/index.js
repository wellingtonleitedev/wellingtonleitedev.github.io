import React from "react";
import { Wrapper } from "../../styles/global";
import { List, Item } from "./styles";

export default function Certifications() {
  return (
    <Wrapper id="certifications">
      <h2>Certificações</h2>
      <List>
        <Item>
          <a href="https://cursos.alura.com.br/career/certificate/10c9871c-4df5-46f5-98c0-e835f7eff936" target="_blank" rel="noopener noreferrer" >
            <h3>GoStack</h3>
          </a>
          <p>Rocketseat</p>
          <small>Node.js, ReactJS e React Native</small>
        </Item>
        <Item>
          <a href="https://cursos.alura.com.br/certificate/3c65598e-933e-4fd7-853a-42cc61a129bb" target="_blank" rel="noopener noreferrer">
            <h3>Algoritmos I: Selection, Insertion e Introdução a análise</h3>
          </a>
          <p>Alura</p>
          <small>Java</small>
        </Item>
        <Item>
          <a href="https://cursos.alura.com.br/certificate/10c9871c-4df5-46f5-98c0-e835f7eff936" target="_blank" rel="noopener noreferrer">
            <h3>Algoritmos II: MergeSort, QuickSort, Busca Binária e Análise de Algoritmo</h3>
          </a>
          <p>Alura</p>
          <small>Java</small>
        </Item>
        <Item>
          <a href="https://cursos.alura.com.br/career/certificate/10c9871c-4df5-46f5-98c0-e835f7eff936" target="_blank" rel="noopener noreferrer">
            <h3>Iniciante em Programação</h3>
          </a>
          <p>Alura</p>
          <small>HTML5 e CSS3, Javascript, Lógica de Programação</small>
        </Item>
      </List>
    </Wrapper >
  );
}

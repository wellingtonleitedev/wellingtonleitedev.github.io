import React from "react";
import { Wrapper } from "../../styles/global";
import { List, Item } from "./styles";
import { FaMapMarkerAlt, FaCalendarAlt, FaSuitcase } from "react-icons/fa";

export default function Experience() {
  return (
    <Wrapper id="experience">
      <h2>Experiência Profissional</h2>
      <List>
        <Item>
          <header>
            <h3>SMARAPD</h3>
            <span><FaSuitcase size={13} color="#2b292d" /> Desenvolvedor Full Stack</span>
            <address><FaMapMarkerAlt size={13} color="#2b292d" /> Ribeirão Preto - SP</address>
            <small><FaCalendarAlt size={13} color="#2b292d" /> Ago. 2018 - Atualmente</small>
          </header>
          <article>
            <p>A SMARAPD, desenvolve e oferece Softwares para Gestão Pública e impressão de dados variáveis.</p>
            <p>Trabalho com o Desenvolvimento Web, utilizando .NET Framework, Angular, manutenções da aplicação Mobile, utilizando React Native.</p>
          </article>
        </Item>
        <Item>
          <header>
            <h3>Williarts Gestão Web</h3>
            <span><FaSuitcase size={13} color="#2b292d" /> Desenvolvedor Full Stack</span>
            <address><FaMapMarkerAlt size={13} color="#2b292d" /> Ribeirão Preto - SP</address>
            <small><FaCalendarAlt size={13} color="#2b292d" /> Jan. 2019 - Ago. 2019</small>
          </header>
          <article>
            <p>Empresa localizada em Ribeirão Preto — SP e Barretos — SP, trabalha com Desenvolvimento Web, Marketing Digital e Desenvolvimento Mobile.</p>
            <p>Trabalhei com o Desenvolvimento de Software Web, e API's que são consumidas pelos nossos aplicativos, utilizando o framework CakePHP e Banco de Dados MySQL.
            Manutenção dos sites em PHP e MySQL. E, além disso, agora também auxilio a equipe de Desenvolvimento Mobile com o React Native.</p>
          </article>
        </Item>
        <Item>
          <header>
            <h3>Ribnet - Criação e Hospedagem de Sites e Marketing Digital</h3>
            <span><FaSuitcase size={13} color="#2b292d" /> Desenvolvedor Web</span>
            <address><FaMapMarkerAlt size={13} color="#2b292d" /> Ribeirão Preto - SP</address>
            <small><FaCalendarAlt size={13} color="#2b292d" /> Ago. 2018 - Jan. 2019</small>
          </header>
          <article>
            <p>Empresa de Desenvolvimento Web, Hospedagem e Marketing Digital.</p>
            <p>Trabalhei no Desenvolvimento Web, utilizando HTML, CSS, Bootstrap, JavaScript, jQuery, PHP e MySQL, cheguei a trabalhar no gerenciamento de redes sociais, criando os anúncios semanais dos clientes também, hoje cuido apenas do Desenvolvimento e manutenção, Front-End e Back-End, e também participo das reuniões com clientes.</p>
          </article>
        </Item>
        <Item>
          <header>
            <h3>BW Solutions</h3>
            <span><FaSuitcase size={13} color="#2b292d" /> Co-fundador</span>
            <address><FaMapMarkerAlt size={13} color="#2b292d" /> Ipuã - SP</address>
            <small><FaCalendarAlt size={13} color="#2b292d" /> Dez. 2017 - Jun. 2018</small>
          </header>
          <article>
            <p>Empresa de assistência técnica de celulares, computadores e venda de acessórios.</p>
            <p>Responsável pela gestão administrativa e pela manutenção de computadores, fechamos, pois, tínhamos visões diferentes sobre o negócio, porém, sem desacordos ou confusão, a empresa sempre se manteve muito bem.</p>
          </article>
        </Item>
      </List>
    </Wrapper>
  );
}

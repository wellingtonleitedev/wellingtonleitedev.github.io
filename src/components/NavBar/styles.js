import styled from "styled-components";

export const Wrapper = styled.section`
  border-radius: 4px;
  bottom: 30px;
  box-shadow: 7px 5px 3px 0 rgba(0, 0, 0, 0.5);
  background-color: #2b292d;
  color: #fff;
  display: flex;
  flex-direction: column;
  left: 25px;
  padding: 20px;
  position: fixed;
  top: 30px;
  width: 240px;
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Image = styled.div`
  background: url("./perfil.jpg") 50% 35%;
  background-size: cover;
  border: 1px solid #fff;
  border-radius: 50%;
  height: 200px;
  margin-bottom: 20px;
  width: 200px;
`;

export const Title = styled.h1``;

export const Subtitle = styled.h3``;

export const List = styled.ul`
  li {
    display: inline-block;
    margin-top: 5px;
  }
`;

export const Item = styled.li`
  svg {
    vertical-align: middle;
    margin-right: 5px;
  }
`;

export const Nav = styled.nav`
  svg {
    vertical-align: middle;
    margin-right: 5px;
  }
`;


import styled from "styled-components";
const FooterMain = styled.footer`
    display: flex;
    height: 200px;
    background-color: rgba(49, 95, 90, 0.71);
    width: 100%;
    font-family: sans-serif;
`;
const DivName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    font-size: 2em;
`;
const DivLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    flex-wrap: wrap;
    margin-top 10px;
`;
const DivInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 15px;
    a{
      color: white;
      text-decoration: none;
    }
    a:hover{
      text-decoration: none;
      color: black;
    }
`;
export default function Footer(){
    return (
      <FooterMain>
        <DivName>
          Ruan Barroso
        </DivName>
        <DivLinks>
          <DivInfo><a href="https://www.github.com/ruanx14">Github</a></DivInfo>
          <DivInfo><a href="https://www.linkedin.com/in/ruanbarroso7">Linkedin</a></DivInfo>
          <DivInfo><a href="https://www.instagram.com/ruanbarroso7">Instagram</a></DivInfo>
          <DivInfo><a href="#">Repository of this project</a></DivInfo>
        </DivLinks>
      </FooterMain>
    );
}
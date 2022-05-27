import styled from "styled-components";

const NavMain = styled.nav`
  height: 20vh;
  background-color: rgba(145, 220, 211, 0.71);
  margin: 0;
`;
const FormOptions = styled.form`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: left;
  align-items: flex-end;
`;
const InputRadio = styled.input.attrs(props => ({
  type: 'radio',
}))`
  display: none;
`;
const LabelFor = styled.label`
  font-family: sans-serif;
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    cursor:pointer;
    background-color: white;
    color: black;
  }
 ${ InputRadio}:checked + && {
    color: black;
    background-color: white;
    transition: all 1s;
    font-size: 1.1em;
    text-decoration: underline;
  }
`;
const DivNav = styled.div`
background-color: rgba(8, 182, 162, 0.50);
width: 100%;
height: 15vh;
display: flex;
justify-content: center;
align-items: center;
font-size: 2.0em;

`;
export function Nav(props){
    return (  
      <NavMain>
          <DivNav>
            <span>Contacts Saver</span>
          </DivNav>
        <FormOptions>
          <InputRadio id="newContact" name="Option">
          </InputRadio>
          <LabelFor htmlFor="newContact" onClick={props.showNewContact}>Novo Contato</LabelFor>
          
          <InputRadio id="listContacts" name="Option">
          </InputRadio>
          <LabelFor htmlFor="listContacts" onClick={props.showList}>Listar Contatos</LabelFor>

        </FormOptions>
      </NavMain>
    );
}
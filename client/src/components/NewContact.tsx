import styled from 'styled-components';
import {useEffect, useState} from "react";
import Axios from "axios";

const FormContact = styled.div`
    height: 600px;
    width: 90%;
    margin: 20px auto;
    font-family: sans-serif;
`
const DivInputs = styled.div`
    width: 100%;
`
const DivButtons = styled.div`
   display: flex;
   justify-content: space-between;
`
const DivNovoCampo = styled.div`
   display: flex;
   justify-content: space-between;
`
const Button = styled.button`
    padding: 20px;
    background-color: rgba(12, 247, 220, 0.71);
    color: black;
    border: none;
    font-size: 1.2em;
    &&:hover{
        cursor: pointer;
        background-color: rgba(58, 154, 143, 0.71);
        color: white;
    }
`
const Input = styled.input`
    width: 100%;
    height: 20px;
`;
const InputText = styled(Input)`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    border-radius: 0;
    outline: none;
    height: 3rem;
    width: 100%;
    font-size: 16px;
    margin: 0 0 8px 0;
    padding: 0;
`;
const LabelInputs = styled.label`
    align-self: center;
    text-align: center;
    width: 100%;
    font-weight: bold;
    text-indent: 2em;
`

export default function NewContact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [lastName, setLastName] = useState('');

    const localWeb = 'http://localhost:3001/'

    const saveContact = () => {
        Axios.post(localWeb+'api/get', {name: name, email: email,number: number, lastName: lastName});
        window.location.reload();
    }
    return (
        <FormContact>
            <DivInputs>
                <LabelInputs>Nome</LabelInputs>
                <InputText placeholder="Escreva o nome do contato aqui" name="name" onChange={(e) => {
        setName(e.target.value);
      }}></InputText>
            </DivInputs>
            
            <DivInputs>
                <LabelInputs>Sobrenome</LabelInputs>
                <InputText placeholder="Escreva o sobrenome do contato aqui" name="lastName" onChange={(e) => {
        setLastName(e.target.value);
      }}></InputText>
            </DivInputs>
            
            <DivInputs>
                <LabelInputs>Email</LabelInputs>
                <InputText placeholder="Escreva o email do contato aqui" name="email" onChange={(e) => {
        setEmail(e.target.value);
      }}></InputText>
            </DivInputs>
            
            <DivInputs>
                <LabelInputs>Numero</LabelInputs>
                <InputText placeholder="Escreva o numero do contato aqui" name="number" onChange={(e) => {
        setNumber(e.target.value);
      }}></InputText>
            </DivInputs>

           {/*  <DivNovoCampo>
                <LabelInputs>Nome do campo:</LabelInputs>
                <InputText placeholder="Escreva qual tipo de informação estará salvando?"></InputText>
                <LabelInputs>Valor do campo:</LabelInputs>
                <InputText placeholder="Escreva a informação aqui"></InputText>
                </DivNovoCampo> */}

            <DivButtons>
               {/*  <Button onClick={showSomething} >Adicionar Novo Campo</Button> */}
                <Button onClick={saveContact}>Salvar Contato</Button>
            </DivButtons>
            
        </FormContact>
    );
}
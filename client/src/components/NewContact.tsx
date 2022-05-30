import styled from 'styled-components';
import { useState } from "react";
import Axios from "axios";

const FormContact = styled.div`
    height: 500px;
    width: 95%;
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
    box-shadow: 5px 5px 10px 1px grey;
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
    export default function NewContact(props){
    //const [example, setExample] = useState();
    
    if(Object.keys(props.objectValues).length>1){
        //const and let doesn't work!
        var [idObject, setIdObject] = useState(props.objectValues._id);
        var [name, setName] = useState(props.objectValues.name);
        var [email, setEmail] = useState(props.objectValues.email);
        var [number, setNumber] = useState(props.objectValues.number);
        var [lastName, setLastName] = useState(props.objectValues.lastName);
    }else{
        var [name, setName] = useState('');
        var [email, setEmail] = useState('');
        var [number, setNumber] = useState('');
        var [lastName, setLastName] = useState('');
    }
    var [error, setError] = useState('');
    const localWeb = 'http://localhost:3001/'

    const saveContact = () => {
       /*  Axios.post(localWeb+'api/get', {name: name, email: email, number: number, lastName: lastName}).then((res) => {
            console.log(res.response.data);
            setError(res.data.erro);
        }); */

        Axios.post(localWeb+'api/get', {name: name, email: email, number: number, lastName: lastName})
        .then((res) => {
            if(res.data.done==true){
                window.location.reload();
            }
        })
        .catch((err) => {
            setError(err.response.data.erro);
        });
    }
    const editContact = () => {
        Axios.put(localWeb+'api/get', {name: name, email: email,number: number, lastName: lastName, idObject: idObject});
        window.location.reload();
    }
    
    return (
        <FormContact>
             <DivInputs>
                <LabelInputs style={{
                    backgroundColor: 'rgba(255, 51, 51, 0.53)',
                    marginBottom: '15px'
                }}>{error}</LabelInputs>
            </DivInputs>
            <DivInputs>
                <LabelInputs>Nome</LabelInputs>
                <InputText placeholder={"Escreva o nome do contato aqui"} defaultValue={name} name="name" onChange={(e) => {
        setName(e.target.value);
      }}></InputText>
            </DivInputs>
            
            <DivInputs>
                <LabelInputs>Sobrenome</LabelInputs>
                <InputText placeholder="Escreva o sobrenome do contato aqui" value={lastName} name="lastName" onChange={(e) => {
        setLastName(e.target.value);
      }}></InputText>
            </DivInputs>
            
            <DivInputs>
                <LabelInputs>Email</LabelInputs>
                <InputText placeholder="Escreva o email do contato aqui" value={email} name="email" onChange={(e) => {
        setEmail(e.target.value);
      }}></InputText>
            </DivInputs>
            
            <DivInputs>
                <LabelInputs>Numero</LabelInputs>
                <InputText placeholder="Escreva o numero do contato aqui" value={number} name="number" onChange={(e) => {
        setNumber(e.target.value);
      }}></InputText>
            </DivInputs>
{/* 
           {  
                example ?   (
                    <DivNovoCampo>
                        <LabelInputs>Nome do campo:</LabelInputs>
                        <InputText placeholder="Escreva qual tipo de informação estará salvando?"></InputText>
                        <LabelInputs>Valor do campo:</LabelInputs>
                        <InputText placeholder="Escreva a informação aqui"></InputText>
                    </DivNovoCampo> 
                ) : ''
            }
 */}
            <DivButtons>
              {/*   {
                    example ? (
                        <Button> Adicionar Novo Campo</Button>
                    ) : ''
                } */}
                {
                    Object.keys(props.objectValues).length>1 ? <Button onClick={editContact}>Salvar Alterações</Button> : <Button onClick={saveContact}>Salvar novo Contato</Button>
                }
               
            </DivButtons>
            
        </FormContact>
    );
}
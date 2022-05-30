import styled from "styled-components";
import { useState,useEffect } from "react";
import NewContact from "./NewContact";

const DivModal = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: rgba(32,32,32,0.4);
    z-index: 2;
    justify-content: center;
    align-items: center;
`
const DivInfo = styled.div` 
    display: block;
    width: 50%;
    background-color: white;
    box-shadow: 1px 1px 10px 1px rgba(37, 230, 232, 0.8); 
`
export default function EditContainer(props:any){
    const [name, setName] = useState(props.objectValues.name);
    const [email, setEmail] = useState(props.objectValues.email);
    const [number, setNumber] = useState(props.objectValues.number);
    const [lastName, setLastName] = useState(props.objectValues.lastName);

    function editContact(){
        console.log("oi");
    }
        return (
            <DivModal id='modalId'>
                <DivInfo>
                    <NewContact objectValues={props.objectValues}/>
                </DivInfo>
            </DivModal>
        );
}
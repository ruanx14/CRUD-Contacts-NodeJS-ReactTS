import { useState } from "react";
import styled from "styled-components";
import EditContainer from "./EditContainer";

const DivBody = styled.div`
    width: 100%;
    height: 400px;
    background-color: lightgreen;
`
const DivContent = styled.div`
    position: absolute;    
    left: ${props => props.left + "px"};
    top: ${props => props.top + "px"};
    width: 100px;
    height: 100px;

`
const UlContent = styled.ul`
    width:  100px;
    list-style: none;
`
const LiContent = styled.li`
    font-family: sans-serif;
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(32,32,32);
    background-color: rgba(37, 230, 232, 0.8);
    &:hover{
        cursor: pointer;
        color: black;
        background-color: rgba(138, 241, 242, 0.8);
    }
`    
    function  DivContentController(props:any){
        const [verify,setVerify] = useState(false);

        function teste(){
            console.log("editar");
            return(
                <EditContainer />
            );
        }
        
        function teste2(){
            console.log("deletar");
        
        }
        if(props.controlContent){
            return (
                /* <EditContainer /> */
                 <DivContent top={props.top} left={props.left}>
                    <UlContent>
                        <LiContent onClick={teste}>
                            Editar
                        </LiContent>
                        <LiContent onClick={teste2}>
                            Deletar
                        </LiContent>
                    </UlContent>
                </DivContent> 
            );   
        }
        
    }

       
    export default function ContextMenu(props){
        return(
            <DivContentController top={props.top}  left={props.left} controlContent={props.controlContent} /> 
        );
    }
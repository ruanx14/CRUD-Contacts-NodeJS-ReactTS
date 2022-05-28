import { useState } from "react";
import styled from "styled-components";

const DivModal = styled.div`
    display: ${props => props.displayShow };
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: rgba(32,32,32,0.4);
    z-index: 1;
    justify-content: center;
    align-items: center;
`
const DivInfo = styled.div`
    display: block;
    width: 50%;
    background-color: white;
    box-shadow: 1px 1px 10px 1px rgba(37, 230, 232, 0.8); 
`

export default function EditContainer(props){
        return (
            <DivModal id='modalId' displayShow={props.displayShow}>
                <DivInfo>

                </DivInfo>
            </DivModal>
        );
}
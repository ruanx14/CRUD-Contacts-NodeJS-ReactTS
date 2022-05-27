import { useState } from "react";
import styled from "styled-components";

const DivModal = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: rgba(32,32,32,0.4);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`
const DivInfo = styled.div`
    display: block;
    width: 50%;
    height: 400px;
    background-color: white;
    box-shadow: 1px 1px 10px 1px rgba(37, 230, 232, 0.8); 
`

export default function EditContainer(){
        return (
            <DivModal>
                <DivInfo>

                </DivInfo>
            </DivModal>
        );
}
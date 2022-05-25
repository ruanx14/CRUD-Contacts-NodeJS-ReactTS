import styled from 'styled-components';

const Button = styled.button`
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" : "palevioletred"};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;

const Input = styled.input`
padding: 0.5em;
margin: 0.5em;
color: ${props => props.inputColor || "palevioletred"};
background: papayawhip;
border: none;
border-radius: 3px;
`;
function testeFunc(obj){ 
    console.log(obj);
}

export default function NewContact(){
    return (
        <div>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </div>
    );
}
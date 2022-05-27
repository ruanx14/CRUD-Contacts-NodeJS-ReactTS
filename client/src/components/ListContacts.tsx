import styled from 'styled-components';
import Axios from 'axios';
import { useEffect,useState } from 'react';
import ContextMenu from './ContextMenu';

const ListUnOrder = styled.ul`
    font-size: 1em;
    margin: 1em;
    border-radius: 3px;
    width: 90%;
    font-family: arial;
`;

const ListItem = styled.li`
    width: 100%;
    height: 30px;
    background: rgba(84, 225, 209, 0.71);
    list-style: none;
    padding: 10px;
    &:nth-child(odd) {
        background: rgba(84, 225, 209, 0.71);
    };
    &:nth-child(even) {
        background: rgba(84, 225, 209, 0.41);
    };
`;
const DivInfo = styled.div`
    display: flex;
`;
const SpanInfo = styled.span`
    width: calc(100%/4);
    display: flex;
    justify-content: center;
`;
export default function ListContacts(){    
const [contactList, setContactList] = useState([]);
const localWeb = 'http://localhost:3001/';

const getContacts = () => {
    Axios.get(localWeb+'api/get').then((res) => {
        setContactList(res.data);
    });
}
const [dropDown, setDropDown] = useState(false);
const [topPosition, setTopPosition] = useState(0);
const [leftPosition, setLeftPosition] = useState(0);

function changeValues(e){
    e.preventDefault();
    setTopPosition(e.pageY);
    setLeftPosition(e.pageX);
    setDropDown(true);
}
/* document.onclick = function(){
    setDropDown(false);
} */
useEffect(getContacts,[]);

    return (
        <ListUnOrder>
             <ListItem key="keyPrimary">
                    <DivInfo>
                        <SpanInfo style={{fontWeight: 'bold'}}>
                            Nome:
                        </SpanInfo> 
                        <SpanInfo style={{fontWeight: 'bold'}}>
                            Sobrenome:
                        </SpanInfo>   
                        <SpanInfo style={{fontWeight: 'bold'}}>
                            Email:
                        </SpanInfo> 
                        <SpanInfo style={{fontWeight: 'bold'}}>
                           Numero: 
                        </SpanInfo>   
                    </DivInfo>
                </ListItem>   
            {
                contactList.map((values) => {  
                    return <ListItem  onContextMenu={(e) => changeValues(e)} key={values['_id']}>
                    <DivInfo>
                        <SpanInfo>
                            {values['name']}
                        </SpanInfo> 
                        <SpanInfo>
                            {values['lastName']}
                        </SpanInfo>   
                        <SpanInfo>
                            {values['email']}
                        </SpanInfo> 
                        <SpanInfo>
                            {values['number']}
                        </SpanInfo>   
                    </DivInfo>
                </ListItem>
                })
            }

        <ContextMenu top={topPosition}  left={leftPosition} controlContent={dropDown} />

        </ListUnOrder>
    );
}
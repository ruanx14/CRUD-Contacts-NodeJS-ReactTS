import styled from 'styled-components';
import Axios from 'axios';
import { useEffect,useState } from 'react';
import ContextMenu from './ContextMenu';
import EditContainer from './EditContainer';


const ListUnOrder = styled.ul`
    display: block;
    width: 90%;
    margin: 10px auto;
    padding: 0;
    border-radius: 3px;
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
    const [contactClick, setContactClick] = useState([]);
    const localWeb = 'http://localhost:3001/';

    const getContacts = () => {
        Axios.get(localWeb+'api/get').then((res) => {
            setContactList(res.data);
        });
    }
    const [dropDown, setDropDown] = useState('none');
    const [topPosition, setTopPosition] = useState(0);
    const [leftPosition, setLeftPosition] = useState(0);
    const [objectClicado,setObjectClicado] = useState('');

    useEffect(getContacts,[]);

    function changeValues(e:any,obj:any){
        setContactClick(obj);
        e.preventDefault();
        setObjectClicado(e.target.id)
        setTopPosition(e.pageY);
        setLeftPosition(e.pageX);
        setDropDown('block');
        document.body.addEventListener("click", closeDropdown);
    }
    const closeDropdown = (event:any) => {
        if(event.target!=document.getElementById('contextMenuId')){
            setDropDown('none');
        }
        document.body.removeEventListener("click", closeDropdown);
    };
    
    const [controlModal, setControlModal] = useState(false);

    function showEdit(){
        setControlModal(true);
        document.body.addEventListener("click", closeEdit);
     }
    const closeEdit = (event:any) => {
        if(event.target==document.getElementById('modalId')){
            setControlModal(false);
        }
    }; 
    
    function deleteObject(){
         Axios.delete(localWeb+'api/get', {data:{objectId: objectClicado}}).then((res) => {
            //console.log(res);
        }); 
        window.location.reload();
    }
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
                    return <ListItem  id={values['_id']} onContextMenu={(e) => changeValues(e,values)} key={values['_id']}>
                    <DivInfo>
                        <SpanInfo id={values['_id']}>
                            {values['name']}
                        </SpanInfo> 
                        <SpanInfo id={values['_id']}>
                            {values['lastName']}
                        </SpanInfo>   
                        <SpanInfo id={values['_id']}>
                            {values['email']}
                        </SpanInfo> 
                        <SpanInfo id={values['_id']}>
                            {values['number']}
                        </SpanInfo>   
                    </DivInfo>
                </ListItem>
                })
            }

        {controlModal ?  <EditContainer objectValues={contactClick} /> : '' }
       

        <ContextMenu top={topPosition}  left={leftPosition} displayYes={dropDown} deleteObject={deleteObject} showEdit={showEdit} />

        </ListUnOrder>
    );
}
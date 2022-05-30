import styled from "styled-components";
const DivContent = styled.div`
    display: ${props => props.displayYes };
    position: absolute;    
    left: ${props => props.left + "px"};
    top: ${props => props.top + "px"};
    width: 100px;
    height: 100px;
    z-index: 1;
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
// 
    
    export default function ContextMenu(props:any){
        return(
            <DivContent id='contextMenuId' top={props.top} left={props.left} displayYes={props.displayYes} >
                <UlContent>
                    <LiContent onClick={props.showEdit}>
                        Editar
                    </LiContent>
                    <LiContent onClick={props.deleteObject}>
                        Deletar
                    </LiContent>
            </UlContent>
        </DivContent> 
        );
    }
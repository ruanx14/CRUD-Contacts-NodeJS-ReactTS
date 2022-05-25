export function Nav(props){
    return (
        <div>
        <nav className="nav-extended">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Contacts Saver</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">Logout</a></li>
            <li><a href="#">Techs</a></li>
            <li><a href="#">About me</a></li>
          </ul>
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className="tab"><a href="#" onClick={props.showNewContact}  >Novo Contato</a></li>
            <li className="tab"><a className="active" href="#" onClick={props.showList} >Listar Contatos</a></li>
          </ul>
         </div>
      </nav>
      
      </div>
    );
}
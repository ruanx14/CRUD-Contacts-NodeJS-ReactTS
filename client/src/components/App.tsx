import { Nav } from "./Nav";
import NewContact from "./NewContact";
import ListContacts from "./ListContacts";
import {useState } from "react";
import Footer from "./Footer";

function App() {
  
  var [bodyContainer, setBodyContainer] = useState(false);

  function MainBody() {
  if (bodyContainer) {
    return <NewContact />;
  }
    return <ListContacts />;
  }
  function showNewContact(){
    setBodyContainer(true);
    MainBody();
  }
  function showList(){
    setBodyContainer(false);
    MainBody();
  } 

  return (
    <div>
      <Nav showNewContact={showNewContact} showList={showList}/> 
      <MainBody />
      <Footer />
    </div>
  );
}
export default App

import { useState } from "react";
import Axios from "axios";

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const localWeb = 'http://localhost:3002/'
  const saveUser = () => {
    Axios.post(localWeb+'api/get', {username: username, email: email});
  }
  return (
  <div>
    <form>
      <input type='text' placeholder='Username' onChange={(e) => {
        setUsername(e.target.value);
      }}/><br/>
      <input type='text' placeholder='Email' onChange={(e) => {
        setEmail(e.target.value);
      }} /><br/>
      <button type='submit' onClick={saveUser}>Salvar</button>
    </form>
    <div>
    </div>
  </div>
  )
}
export default App

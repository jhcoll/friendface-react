import Backdrop from './components/Backdrop.js';
import Modal from './components/Modal.js';
import Todo from './components/Todo.js';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn react'/>
      <Todo text='Beat Conran at chess'/>
      <Todo text="Make sure Conran knows he's bad at chess"/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;

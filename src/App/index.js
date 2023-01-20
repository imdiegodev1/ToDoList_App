import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';


//import './App.css';

const defaulttodos = [
  {text: 'revisar vacas', completed: false},
  {text: 'buscar perros', completed: false},
  {text: 'conseguir camello', completed: false},
]

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;

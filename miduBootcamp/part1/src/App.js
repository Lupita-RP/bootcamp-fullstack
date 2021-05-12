import './App.css';
import Headerexample from './Headerexample.js'


const App = () => {
const mensaje = 'Hola'
const a = 2 
const b = 3
  return (
    
    <div className="App">
      <Headerexample color='red' message='estoy aprendiendo'/>
      <Headerexample color='green' message='en un curso'/>
      <Headerexample color='blue' message='de react'/>
      <h1>Título de la App</h1>
      <strong>Estamos trabajando en ello</strong>
      <p>El resltado es: </p>
      {mensaje + ' evaluación JSXS'}
      <br/>
      {a+b}
      <br/>
      {+new Date()}
    </div>
  )
}

export default App;

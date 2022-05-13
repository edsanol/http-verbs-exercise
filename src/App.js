import axios from "axios";

axios.get(`https://jsonplaceholder.typicode.com/todos`)
  .then(response => {
    console.log('Respuesta GET', response.data)
    console.log(response.status)
  })

axios.get(`https://jsonplaceholder.typicode.com/todos/2`)
  .then(response => {
    console.log('Respuesta GET id', response.data)
    console.log(response.status)
  })

const newObj = {
  userId: 1500,
  title: 'Hello World',
  completed: true,
}

axios.post(`https://jsonplaceholder.typicode.com/todos`, newObj)
  .then(response => {
    console.log('Respuesta POST', response.data)
    console.log(response.status)
  })

axios.put(`https://jsonplaceholder.typicode.com/todos/1`, newObj)
  .then(response => {
    console.log('Respuesta PUT', response.data)
    console.log(response.status)
  })

axios.delete(`https://jsonplaceholder.typicode.com/todos/1`)
  .then(response => {
    console.log('Respuesta DELETE', response.data)
    console.log(response.status)
  })

function App() {
  return (
    <div>
      Prueba
    </div>
  );
}

export default App;

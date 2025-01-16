// 1. Listado de Usuarios con Placeholder
// Descripción: Utiliza la API pública de JSONPlaceholder para mostrar un listado de usuarios y, al hacer clic en uno, muestra los detalles del usuario seleccionado.
// Tareas:
// Haz un fetch de https://jsonplaceholder.typicode.com/users para obtener el listado de usuarios.
// Renderiza el nombre de cada usuario en una lista.
// Al hacer clic en un nombre, muestra los detalles del usuario (name, email, phone, website) debajo de la lista.
// Extra: Agrega un botón para volver al listado principal.

import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [users, setUsers] = useState([]);
  const [click, setClick] = useState(false);
  const [selectedUser, setSelectedUser] = useState([]);
  const handleCloseButton = () => {
    setClick(!click);
  };
  const handleClick = (user) => {
    setClick(true);
    console.log("Haz clickeado el name" + user.name);
    setSelectedUser(user);
  };
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((data) => data.json()) //Convertimos lo que resivimos en formato JSON.
      .then((user) => setUsers(user)); //Seteamos el valor de users con el que resive user.
  }, []);
  return (
    <main>
      <h1>Empleados</h1>
      {!click && (
        <ul>
          {users &&
            users.map((user) => (
              <li
                key={user.id}
                onClick={() => handleClick(user)}
                className="list_item"
              >
                {user.name}
              </li>
            ))}
        </ul>
      )}
      {click && (
        <ul>
          <button onClick={handleCloseButton}>Volver</button>
          <li className="list_item">Name: {selectedUser.name}</li>
          <li className="list_item">Email: {selectedUser.email}</li>
          <li className="list_item">Phone number: {selectedUser.phone}</li>
          <li className="list_item">Website: {selectedUser.website}</li>
          <li className="list_item">Street: {selectedUser.address.street}</li>
          <li className="list_item">City: {selectedUser.address.city}</li>
        </ul>
      )}
    </main>
  );
}

export default App;

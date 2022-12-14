import { useState, useEffect } from 'react';

export function GetPersona() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users", {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          })
            .then(function (response) {
              console.log(response);
              return response.json();
            })
            .then(function (users) {
             setUsers(users);
            });
    }, [])

    return(
        <div>
      <table border="1">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    )
  
}

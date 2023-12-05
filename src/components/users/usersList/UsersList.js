import React from 'react';
import './UsersList.scss';
import { SpinnerImg } from '../../loader/Loader';

const UsersList = () => {
  return (
    <div className="device-list">
      <hr />
      <div className="table">
        <div className="--flex-between --flex-dir-column">
          <span>
            <h4>Usuarios</h4>
          </span>
          <span>
            <h3>Buscar</h3>
          </span>
        </div>

        <div className="table">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombres</th>
                  <th>Apellidos</th>
                  <th>Rol</th>
                  <th>Correo</th>
                  <th>Modelo</th>
                  <th>Telefono</th>
                </tr>
              </thead>
              <tbody>
                
                
              </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default UsersList;

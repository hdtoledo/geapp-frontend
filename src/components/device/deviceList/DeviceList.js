import React from 'react';
import './deviceList.scss';
import { SpinnerImg } from '../../loader/Loader';

const DeviceList = ({ devices, isLoading }) => {
  return (
    <div className="device-list">
      <hr />
      <div className="table">
        <div className="--flex-between --flex-dir-column">
          <span>
            <h4>Equipos</h4>
          </span>
          <span>
            <h3>Buscar</h3>
          </span>
        </div>
        {isLoading && <SpinnerImg />}

        <div className="table">
          
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tipo Equipo</th>
                  <th>Serial</th>
                  <th>Cod. Interno</th>
                  <th>Marca</th>
                  <th>Modelo</th>
                  <th>Dependencia</th>
                  <th>Acciones</th>
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

export default DeviceList;

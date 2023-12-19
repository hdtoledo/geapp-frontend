import React from "react";
import { SpinnerImg } from "../../loader/Loader";
import "./deviceList.scss";

const DeviceList = ({ devices, isLoading }) => {

  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };

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
          {!isLoading && devices.lenght === 0 ? (
            <p> --Dispositivos no encontrados, por añada dispositivos.</p>
          ) : (
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
                {
                  devices.map((device, index) => {
                    const { _id, tipoEquipo, serieSN, codigoInterno, marcaEquipo, modeloEquipo, dependencia } = device
                    return (
                      <tr key={_id}>
                        <td>{index + 1}</td>
                        <td>{shortenText(tipoEquipo, 16)}</td>
                        <td>{serieSN}</td>
                        <td>{codigoInterno}</td>
                        <td>{marcaEquipo}</td>
                        <td>{modeloEquipo}</td>
                        <td>{dependencia}</td>
                        <td>Boton</td>

                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeviceList;

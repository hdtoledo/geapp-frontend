import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";
import { getDevices } from "../../redux/features/device/deviceSlice";
import "./ListDeviceUser.scss";
import map from "../../assets/mapa.png"
import { useNavigate } from 'react-router-dom';
import Card from "../../components/card/Card";

const ListDeviceUser = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { devices, isLoading, isError, message } = useSelector((state) => state.device);

  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    navigate(`/report-device/${id}`);
  };

  const botones = [
    { id: "6585b133e782db4aa12c39f5", xPercent: 10.5, yPercent: 93 , dependencia: 'PQR', tipo: "Computador de escritorio"},
    { id: "658350aa269e3ed52b79a23a", xPercent: 29.5, yPercent: 92 , dependencia: 'Almacen', tipo: "Computador de escritorio"},
    { id: "6584d3b189df117bd49c8515", xPercent: 29.5, yPercent: 71 , dependencia: 'Secretaria', tipo: "Impresora"},
    { id: "6585ace8e782db4aa12c39ec", xPercent: 45, yPercent: 79 , dependencia: 'Gerencia', tipo: "Portatil"},
    { id: "6584cfe789df117bd49c8507", xPercent: 61, yPercent: 74 , dependencia: 'Planeación', tipo: "Computador de escritorio"},
    { id: "658499e1e68894963822546d", xPercent: 70, yPercent: 44 , dependencia: 'Impresora', tipo: "Impresora"},
    { id: "6584894bd5186fb30d2434c8", xPercent: 70, yPercent: 64 , dependencia: 'Control Interno', tipo: "Computador de escritorio"},
    { id: "6584d5d089df117bd49c8523", xPercent: 86, yPercent: 40 , dependencia: 'Tesoreria', tipo: "Impresora"},
    { id: "65848749d5186fb30d2434c1", xPercent: 90, yPercent: 15 , dependencia: 'Contabilidad', tipo: "Computador de escritorio"},
    { id: "6584ce9989df117bd49c8500", xPercent: 77, yPercent: 20 , dependencia: 'Juridica', tipo: "Computador de escritorio"},
    { id: "6584d27689df117bd49c850e", xPercent: 63, yPercent: 20 , dependencia: 'Recursos Humanos', tipo: "Computador de escritorio"},
    { id: "65848ac5d5186fb30d2434cf", xPercent: 54, yPercent: 12 , dependencia: 'Facturación', tipo: "Computador de escritorio"},
    { id: "65848c15d5186fb30d2434d6", xPercent: 41, yPercent: 21 , dependencia: 'Gestion Comercial', tipo: "Computador de escritorio"},
    { id: "6584ca4289df117bd49c84f2", xPercent: 42.5, yPercent: 52 , dependencia: 'Inspector', tipo: "Impresora"},
    { id: "6584d4f189df117bd49c851c", xPercent: 42.5, yPercent: 38 , dependencia: 'SST', tipo: "Computador de escritorio"},
  ];


  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getDevices());
    }

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  return (
    <div className="map-container">
      <Card cardClass={"group"}>
            <code className="--color-dark">
            Para reportar un daño, revision y/o mantenimiento de equipo presionar en el boton con el nombre de la dependencia del equipo.
            </code>
          </Card><br/>
        <img className="map-image" src={map} alt="imagen" />
        {botones.map((boton) => (
        <button
          key={boton.id}
          className="--btn map-button"
          style={{ left: `${boton.xPercent}%`, top: `${boton.yPercent}%` }}
          onClick={() => handleButtonClick(boton.id, boton.dependencia)}
          title={`Reportar ${boton.tipo}`}
        >
          {boton.dependencia}
        </button>
      ))}
    </div>
  );
};

export default ListDeviceUser;

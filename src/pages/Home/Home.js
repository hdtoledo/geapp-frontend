import React from "react";
import { GrHostMaintenance } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/inv-img.png";
import {
  ShowOnLogin,
  ShowOnLogout,
} from "../../components/protect/HiddenLinks";

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between">
        <div className="logo">
          <GrHostMaintenance size={35} />
        </div>
        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Registro</Link>
            </li>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Entrar</Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      {/* Hero Section */}
      <section className="container hero">
        <div className="hero-text">
          <h2>Geapp - Gestión Eficiente de Equipos Empresariales</h2>
          <p>
            Herramienta integral diseñada para simplificar la gestión de equipos
            en tu empresa. Reporte de daños y programación de mantenimientos.
            Reporta fácilmente casos relacionados con los equipos de tu oficina,
            optimiza la comunicación interna y mantén un control total sobre el
            estado de tus activos.
          </p>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="imagen" />
        </div>
      </section>
    </div>
  );
};

export default Home;

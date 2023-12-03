import React, { useState } from "react";
import styles from "./auth.module.scss";
import { TiUserAddOutline } from "react-icons/ti";
import Card from "../../components/card/Card";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser, validateEmail } from "../../services/authService";
import { useDispatch } from "react-redux";
import { SET_LOGIN, SET_NAME } from "../../redux/features/auth/authSlice";
import Loader from "../../components/loader/Loader";


const initialState = {
  email: "",
  firstname: "",
  lastname: "",
  password: "",
  password2: "",
};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { email, firstname, lastname, password, password2 } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();

    if (!email || !firstname || !lastname || !password) {
      return toast.error("Todos los campos son requeridos!");
    }
    if (!validateEmail(email)) {
      return toast.error("Por favor agrega un correo valido!");
    }
    if (password.length < 6) {
      return toast.error("Las contraseñas deben contener minimo 6 caracteres!");
    }
    if (password !== password2) {
      return toast.error("Las contraseñas no coinciden");
    }

    const userData = {
      email,
      firstname,
      lastname,
      password,
    };

    setIsLoading(true);

    try {
      const data = await registerUser(userData);
       //console.log(data);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.firstname));
      navigate("/dashboard");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      //console.log(error.message);
    }
  };

  return (
    <div className={`container ${styles.auth}`}>
      {isLoading && <Loader />}
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <TiUserAddOutline size={35} color="#999" />
          </div>
          <h2>Registrarse</h2>

          <form onSubmit={register}>
            <input
              type="text"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Nombres"
              required
              name="firstname"
              value={firstname}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Apellidos"
              required
              name="lastname"
              value={lastname}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Contraseña"
              required
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Confirma Contraseña"
              required
              name="password2"
              value={password2}
              onChange={handleInputChange}
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Registrarse
            </button>
          </form>

          <span className={styles.register}>
            <Link to="/">Inicio</Link>
            <p> &nbsp; ¿Tienes una cuenta? &nbsp;</p>
            <Link to="/login">Ingresar</Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Register;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserRole } from "../../redux/features/auth/authSlice";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { getDevices, selectIsLoading } from "../../redux/features/device/deviceSlice";
import DeviceList from "../../components/device/deviceList/DeviceList";



const DashboardPage = () => {
  useRedirectLoggedOutUser("/login");
  const userRole = useSelector(selectUserRole);

  return (
    <div>
      <h2>Dashboard</h2>
      {userRole === "admin" ? (
        // Renderizar contenido específico para administradores
        <AdminDashboardContent />
      ) : (
        // Renderizar contenido específico para usuarios regulares
        <UserDashboardContent />
      )}
    </div>
  );
};

// Componente específico para administradores
const AdminDashboardContent = () => {

{/*
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const {devices, isLoading, isError, message} = useSelector((state) => state.device)

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getDevices())
    }

    if (isError) {
      console.log(message);
    }

  },[isLoggedIn, isError, message, dispatch])
*/}
  return (
    <div>
      <h3>En espera</h3>
    </div>
  );
};

// Componente específico para usuarios regulares
const UserDashboardContent = () => {
  return (
    <div>
      <h3>Contenido para Usuarios Regulares</h3>
      {/* Agrega aquí el contenido específico para usuarios regulares */}
    </div>
  );
};

export default DashboardPage;

import { FaTh, FaListOl } from "react-icons/fa";
import { PiDevices } from "react-icons/pi";

const menu = [
  {
    title: "Dashboard",
    icon: <FaTh />,
    path: "/dashboard",
    requiredRole: null,
  },
  {
    title: "Agregar Equipo",
    icon: <PiDevices />,
    path: "/add-device",
    requiredRole: "admin",
  },
  {
    title: "Listar Equipos",
    icon: <FaListOl />,
    path: "/list-device",
    requiredRole: "admin",
  },
];


export default menu;
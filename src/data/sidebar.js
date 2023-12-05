import { FaTh, FaUsers, FaRegChartBar, FaCommentAlt, FaListOl } from "react-icons/fa";
import { PiDevices } from "react-icons/pi";
import { TbReportSearch } from "react-icons/tb";

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
  {
    title: "Usuarios",
    icon: <FaUsers />,
    path: "/add-product",
    requiredRole: "admin",
  },
  {
    title: "Mi cuenta",
    icon: <FaRegChartBar />,
    requiredRole: null,
    childrens: [
      {
        title: "Perfil",
        path: "/profile",
      },
      {
        title: "Editar Perfil",
        path: "/edit-profile",
      },
    ],
  },
];


export default menu;
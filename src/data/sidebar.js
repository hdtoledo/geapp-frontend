import { FaTh, FaUsers, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
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
    title: "Dispositivos",
    icon: <PiDevices />,
    path: "/add-product",
    requiredRole: "admin",
  },
  {
    title: "Usuarios",
    icon: <FaUsers />,
    path: "/add-product",
    requiredRole: "admin",
  },
  {
    title: "Reportes",
    icon: <TbReportSearch />,
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
  {
    title: "Probando user",
    icon: <FaRegChartBar />,
    requiredRole: "user",
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
  {
    title: "Reportar Error",
    icon: <FaCommentAlt />,
    path: "/contact-us",
    requiredRole: null,
  },
];


export default menu;
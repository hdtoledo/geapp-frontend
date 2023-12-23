import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";
import Reset from "./pages/auth/Reset";
import Dashboard from "./pages/dashboard/DashboardPage";
import Sidebar from "./components/sidebar/Sidebar";
import Layout from "./components/layout/Layout"
import axios from "axios"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLoginStatus } from "./services/authService";
import { SET_LOGIN } from "./redux/features/auth/authSlice";
import AddDevice from "./pages/addDevice/AddDevice";
import ListDevice from "./pages/listDevice/ListDevice";
import DeviceReport from "./components/device/deviceReport/DeviceReport";
import EditDevice from "./pages/editDevice/EditDevice";


axios.defaults.withCredentials = true


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }
    loginStatus();
  }, [dispatch]);

  return (
    <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/forgot" element={<Forgot/>}/>
      <Route path="/resetpassword/:resetToken" element={<Reset/>}/>
      <Route path="/dashboard" element={
      <Sidebar>
        <Layout>
          <Dashboard />
        </Layout>
      </Sidebar>}/>

      <Route path="/add-device" element={
      <Sidebar>
        <Layout>
          <AddDevice />
        </Layout>
      </Sidebar>}/>

      <Route path="/list-device" element={
      <Sidebar>
        <Layout>
          <ListDevice />
        </Layout>
      </Sidebar>}/>

      <Route path="/report-device/:id" element={
      <Sidebar>
        <Layout>
          <DeviceReport />
        </Layout>
      </Sidebar>}/>

      <Route path="/edit-device/:id" element={
      <Sidebar>
        <Layout>
          <EditDevice />
        </Layout>
      </Sidebar>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;

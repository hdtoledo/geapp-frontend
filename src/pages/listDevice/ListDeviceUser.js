import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserRole, } from "../../redux/features/auth/authSlice";
import { getDevices, selectIsLoading } from "../../redux/features/device/deviceSlice";
import DeviceListUser from "../../components/device/deviceList/DeviceListUser";

const ListDeviceUser = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { devices, isLoading, isError, message } = useSelector((state) => state.device);

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getDevices());
    }

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  return (
    <div>
        <h3>Listado de Equipos</h3>
      <DeviceListUser devices={devices} isLoading={isLoading} />
    </div>
  );
};

export default ListDeviceUser;

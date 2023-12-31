import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";
import { getDevices } from "../../redux/features/device/deviceSlice";
import DeviceList from "../../components/device/deviceList/DeviceList";

const ListDevice = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { devices, isLoading, isError, message } = useSelector((state) => state.device);

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getDevices());
    }
    console.log()

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);


  return (
    <div>
        <h3>Listar Equipos</h3>
      <DeviceList devices={devices} isLoading={isLoading} />
    </div>
  );
};

export default ListDevice;

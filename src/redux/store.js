import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/auth/authSlice";
import deviceReducer from "../redux/features/device/deviceSlice"; // Importa el nuevo reducer de dispositivos
import filterReducer from "../redux/features/device/filterSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    filter: filterReducer,
    device: deviceReducer, // Agrega el nuevo reducer de dispositivos
  },
});

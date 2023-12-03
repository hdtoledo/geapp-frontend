import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/auth/authSlice";
import productReducer from "../redux/features/device/deviceSlice";
import filterReducer from "../redux/features/device/filterSlice";
import deviceReducer from "../redux/features/device/deviceSlice"; // Importa el nuevo reducer de dispositivos

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    filter: filterReducer,
    device: deviceReducer, // Agrega el nuevo reducer de dispositivos
  },
});

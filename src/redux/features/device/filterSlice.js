import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredDevices: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_DEVICES(state, action) {
      const { devices, search } = action.payload;
      const tempDevices = devices.filter(
        (device) =>
          device.tipoEquipo.toLowerCase().includes(search.toLowerCase()) ||
          device.serieSN.toLowerCase().includes(search.toLowerCase()) ||
          device.codigoInterno.toLowerCase().includes(search.toLowerCase()) ||
          device.marcaEquipo.toLowerCase().includes(search.toLowerCase()) ||
          device.modeloEquipo.toLowerCase().includes(search.toLowerCase()) ||
          device.dependencia.toLowerCase().includes(search.toLowerCase())
      );

      state.filteredDevices = tempDevices;
    },
  },
});

export const { FILTER_DEVICES } = filterSlice.actions;

export const selectFilteredDevices = (state) => state.filter.filteredDevices;

export default filterSlice.reducer;

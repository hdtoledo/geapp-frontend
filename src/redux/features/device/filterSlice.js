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
          device.name.toLowerCase().includes(search.toLowerCase()) ||
          device.category.toLowerCase().includes(search.toLowerCase())
      );

      state.filteredDevices = tempDevices;
    },
  },
});

export const { FILTER_DEVICES } = filterSlice.actions;

export const selectFilteredDevices = (state) => state.filter.filteredDevices;

export default filterSlice.reducer;

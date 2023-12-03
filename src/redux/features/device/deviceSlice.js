import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import deviceService from "./deviceService";
import { toast } from "react-toastify";

const initialState = {
  device: null,
  devices: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  totalDevices: 0,
  desktopCount: 0,
  laptopCount: 0,
  printerCount: 0,
};

// Create New Device
export const createDevice = createAsyncThunk(
  "devices/create",
  async (formData, thunkAPI) => {
    try {
      return await deviceService.createDevice(formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get all devices
export const getDevices = createAsyncThunk("devices/getAll", async (_, thunkAPI) => {
  try {
    return await deviceService.getDevices();
  } catch (error) {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});

// Delete a Device
export const deleteDevice = createAsyncThunk("devices/delete", async (id, thunkAPI) => {
  try {
    return await deviceService.deleteDevice(id);
  } catch (error) {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});

// Get a device
export const getDevice = createAsyncThunk("devices/getDevice", async (id, thunkAPI) => {
  try {
    return await deviceService.getDevice(id);
  } catch (error) {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});

// Update device
export const updateDevice = createAsyncThunk("devices/updateDevice", async ({ id, formData }, thunkAPI) => {
  try {
    return await deviceService.updateDevice(id, formData);
  } catch (error) {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});

const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    CALC_TOTAL_DEVICES(state, action) {
      state.totalDevices = action.payload.length;
    },
    CALC_CATEGORY_COUNT(state, action) {
      const devices = action.payload;
      state.desktopCount = devices.filter((device) => device.tipoEquipo === "Desktop").length;
      state.laptopCount = devices.filter((device) => device.tipoEquipo === "Laptop").length;
      state.printerCount = devices.filter((device) => device.tipoEquipo === "Printer").length;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createDevice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createDevice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.devices.push(action.payload);
        toast.success("Device added successfully");
      })
      .addCase(createDevice.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getDevices.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDevices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.devices = action.payload;
      })
      .addCase(getDevices.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(deleteDevice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteDevice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("Device deleted successfully");
      })
      .addCase(deleteDevice.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getDevice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDevice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.device = action.payload;
      })
      .addCase(getDevice.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(updateDevice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateDevice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("Device updated successfully");
      })
      .addCase(updateDevice.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      });
  },
});

export const { CALC_TOTAL_DEVICES, CALC_CATEGORY_COUNT } = deviceSlice.actions;

export const selectIsLoading = (state) => state.device.isLoading;
export const selectDevice = (state) => state.device.device;
export const selectTotalDevices = (state) => state.device.totalDevices;
export const selectDesktopCount = (state) => state.device.desktopCount;
export const selectLaptopCount = (state) => state.device.laptopCount;
export const selectPrinterCount = (state) => state.device.printerCount;

export default deviceSlice.reducer;

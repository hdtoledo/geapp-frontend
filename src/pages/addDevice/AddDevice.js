import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeviceForm from '../../components/device/deviceForm/DeviceForm';
import { createDevice, selectIsLoading } from '../../redux/features/device/deviceSlice';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/loader/Loader';

const initialState = {
  tipoEquipo: '',
  dependencia: '',
  codigoInterno: '',
  marcaEquipo: '',
  modeloEquipo: '',
  serieSN: '',
  fechaCompra: '',
  imagen: null,
  observaciones: '',
  procesadorMarca: '',
  procesadormodelo: '',
  almacenamientoCapacidadGb: '',
  almacenamientoTipo: '',
  ramCapacidadGB: '',
  ramFrecuenciaMHz: '',
  ramTecnologia: '',
  ramFactorForma: '',
  graficaTipo: '',
  graficaModelo: '',
  fuentePoderTiene: '',
  fuentePoderTipo: '',
  tarjetaMadreMarca: '',
  tarjetaMadreModelo: '',
  tarjetaMadreTamano: '',
  chasisTiene: '',
  chasisTamano: '',
  puertos: '',
  pantallaTiene: '',
  pantallaFuncional: '',
  pantallaMarca: '',
  pantallaModelo: '',
  tecladoTiene: '',
  tecladoFuncional: '',
  tecladoMarca: '',
  tecladoModelo: '',
  mouseTiene: '',
  mouseFuncional: '',
  mouseMarca: '',
  mouseModelo: '',
  oSVersion: '',
  oSFechaCaducidad: '',
  officeVersion: '',
  officeFechaCaducidad: '',
  antivirusNombre: '',
  antivirusFechaCaducidad: '',
};

const AddDevice = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [device, setDevice] = useState(initialState);
  const [deviceImage, setDeviceImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const isLoading = useSelector(selectIsLoading);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDevice({ ...device, [name]: value });
  };

  const handleImageChange = (e) => {
    setDeviceImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const saveDevice = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.entries(device).forEach(([key, value]) => {
      formData.append(key, value);
    });

    formData.append('imagen', deviceImage);
    //console.log(...formData);

    await dispatch(createDevice(formData));

    navigate('/list-device');
  };

  return (
    <div>
        {isLoading && <Loader />}
      <h3 className="--mt">Agregar Dispositivo</h3>
      <DeviceForm
        device={device}
        deviceImage={deviceImage}
        imagePreview={imagePreview}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        saveDevice={saveDevice}
      />
    </div>
  );
};

export default AddDevice;
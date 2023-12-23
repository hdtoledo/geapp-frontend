import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import DeviceForm from "../../components/device/deviceForm/DeviceForm";
import {
  getDevice,
  updateDevice,
  selectIsLoading,
  selectDevice,
} from "../../redux/features/device/deviceSlice";

const EditDevice = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);

  const deviceEdit = useSelector(selectDevice);

  const [device, setDevice] = useState(deviceEdit);
  const [deviceImage, setDeviceImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    dispatch(getDevice(id));
  }, [dispatch, id]);

  useEffect(() => {
    setDevice(deviceEdit);

    setImagePreview(
      deviceEdit && deviceEdit.image
        ? `${deviceEdit.image.filePath}`
        : null
    );
    

   
  }, [deviceEdit]);

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
    formData.append("tipoEquipo", device?.tipoEquipo);
    formData.append("dependencia", device?.dependencia);
    formData.append("codigoInterno", device?.codigoInterno);
    formData.append("marcaEquipo", device?.marcaEquipo);
    formData.append("modeloEquipo", device?.modeloEquipo);
    formData.append("serieSN", device?.serieSN);
    formData.append("fechaCompra", device?.fechaCompra);
    formData.append("observaciones", device?.observaciones);
    formData.append("procesadorMarca", device?.procesadorMarca);
    formData.append("procesadormodelo", device?.procesadormodelo);
    formData.append("almacenamientoCapacidadGb", device?.almacenamientoCapacidadGb);
    formData.append("almacenamientoTipo", device?.almacenamientoTipo);
    formData.append("ramCapacidadGB", device?.ramCapacidadGB);
    formData.append("ramFrecuenciaMHz", device?.ramFrecuenciaMHz);
    formData.append("ramTecnologia", device?.ramTecnologia);
    formData.append("ramFactorForma", device?.ramFactorForma);
    formData.append("graficaTipo", device?.graficaTipo);
    formData.append("graficaModelo", device?.graficaModelo);
    formData.append("fuentePoderTiene", device?.fuentePoderTiene);
    formData.append("fuentePoderTipo", device?.fuentePoderTipo);
    formData.append("tarjetaMadreMarca", device?.tarjetaMadreMarca);
    formData.append("tarjetaMadreModelo", device?.tarjetaMadreModelo);
    formData.append("tarjetaMadreTamano", device?.tarjetaMadreTamano);
    formData.append("chasisTiene", device?.chasisTiene);
    formData.append("chasisTamano", device?.chasisTamano);
    formData.append("puertos", device?.puertos);
    formData.append("pantallaTiene", device?.pantallaTiene);
    formData.append("pantallaFuncional", device?.pantallaFuncional);
    formData.append("pantallaMarca", device?.pantallaMarca);
    formData.append("pantallaModelo", device?.pantallaModelo);
    formData.append("tecladoTiene", device?.tecladoTiene);
    formData.append("tecladoFuncional", device?.tecladoFuncional);
    formData.append("tecladoMarca", device?.tecladoMarca);
    formData.append("tecladoModelo", device?.tecladoModelo);
    formData.append("mouseTiene", device?.mouseTiene);
    formData.append("mouseFuncional", device?.mouseFuncional);
    formData.append("mouseMarca", device?.mouseMarca);
    formData.append("mouseModelo", device?.mouseModelo);
    formData.append("oSVersion", device?.oSVersion);
    formData.append("oSFechaCaducidad", device?.oSFechaCaducidad);
    formData.append("officeVersion", device?.officeVersion);
    formData.append("officeFechaCaducidad", device?.officeFechaCaducidad);
    formData.append("antivirusNombre", device?.antivirusNombre);
    formData.append("antivirusFechaCaducidad", device?.antivirusFechaCaducidad);

    if (deviceImage) {
      formData.append("imagen", deviceImage);
    }

    //console.log(...formData);

    await dispatch(updateDevice({ id, formData }));
    navigate("/list-device");
  };

  return (
    <div>
      {isLoading && <Loader />}
      <h3 className="--mt">Edicion de Dispositivo</h3>
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

export default EditDevice;

import React, { useState } from 'react'
import { useSelector } from "react-redux"
import DeviceForm from '../../components/device/deviceForm/DeviceForm'
import { selectIsLoading } from '../../redux/features/device/deviceSlice'

const initialState = {
    "tipoEquipo": "",
    "dependencia": "",
    "codigoInterno": "",
    "marcaEquipo": "",
    "modeloEquipo": "",
    "serieSN": "",
    "fechaCompra": "",
    "observaciones": "",
    "procesadorMarca": "",
    "procesadormodelo": "",
    "almacenamientoCapacidadGb": "",
    "almacenamientoTipo": "",
    "ramCapacidadGB": "",
    "ramFrecuenciaMHz": "",
    "ramTecnologia": "",
    "ramFactorForma": "",
    "graficaTipo": "",
    "graficaModelo": "",
    "fuentePoderTiene": "",
    "fuentePoderTipo": "",
    "tarjetaMadreMarca": "",
    "tarjetaMadreModelo": "",
    "tarjetaMadreTamano": "",
    "chasisTiene": "",
    "chasisTamano": "",
    "puertos": "",
    "pantallaTiene": "",
    "pantallaFuncional": "",
    "pantallaMarca": "",
    "pantallaModelo": "",
    "tecladoTiene": "",
    "tecladoFuncional": "",
    "tecladoMarca": "",
    "tecladoModelo": "",
    "mouseTiene": "",
    "mouseFuncional": "",
    "mouseMarca": "",
    "mouseModelo": "",
    "oSVersion": "",
    "oSFechaCaducidad": "",
    "officeVersion": "",
    "officeFechaCaducidad": "",
    "antivirusNombre": "",
    "antivirusFechaCaducidad": "",
}

const AddDevice = () => {

    const [device, setDevice] = useState(initialState)
    const [deviceImage, setDeviceImage] = useState("")
    const [imagePreview, setImagePreview] = useState(null)
    const [description, setDescription] = useState("")

    const isLoading = useSelector(selectIsLoading)
    const {
        tipoEquipo,
        dependencia,
        codigoInterno,
        marcaEquipo,
        modeloEquipo,
        serieSN,
        fechaCompra,
        imagen,
        observaciones,
        procesadorMarca,
        procesadormodelo,
        almacenamientoCapacidadGb,
        almacenamientoTipo,
        ramCapacidadGB,
        ramFrecuenciaMHz,
        ramTecnologia,
        ramFactorForma,
        graficaTipo,
        graficaModelo,
        fuentePoderTiene,
        fuentePoderTipo,
        tarjetaMadreMarca,
        tarjetaMadreModelo,
        tarjetaMadreTamano,
        chasisTiene,
        chasisTamano,
        puertos,
        pantallaTiene,
        pantallaFuncional,
        pantallaMarca,
        pantallaModelo,
        tecladoTiene,
        tecladoFuncional,
        tecladoMarca,
        tecladoModelo,
        mouseTiene,
        mouseFuncional,
        mouseMarca,
        mouseModelo,
        oSVersion,
        oSFechaCaducidad,
        officeVersion,
        officeFechaCaducidad,
        antivirusNombre,
        antivirusFechaCaducidad,
    } = device

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDevice({ ...device, [name]: value });
      };

    const handleImageChange = () => {
        setDeviceImage(e.target.files[0])
        setImagePreview(URL.createObjectURL(e.target.files[0]))
    }

  return (
    <div>
        <h3 className="--mt">Agregar Dispositivo</h3>
        <DeviceForm />
    </div>
  )
}

export default AddDevice
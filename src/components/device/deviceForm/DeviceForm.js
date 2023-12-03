import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from "../../card/Card";

import "./DeviceForm.scss";

const DeviceForm = ({
  device,
  deviceImage,
  imagePreview,
  observaciones,
  setDescription,
  handleInputChange,
  handleImageChange,
  saveDevice,
}) => {
  return (
    <div className="add-device">
      <Card cardClass={"card"}>
        <form onSubmit={saveDevice}>
          <Card cardClass={"group"}>
            <label>Imagen del dispositivo</label>
            <code className="--color-dark">
              Formatos soportados: jpg, jpeg, png
            </code>
            <input
              type="file"
              name="image"
              onChange={(e) => handleImageChange(e)}
            />

            {imagePreview != null ? (
              <div className="image-preview">
                <img src={imagePreview} alt="device" />
              </div>
            ) : (
              <p>Este dispositivo no tiene una imagen.</p>
            )}
          </Card>

          <label>Tipo de dispositivo:</label>
          <select
            name="tipoEquipo"
            value={device?.tipoEquipo}
            onChange={handleInputChange}
          >
            <option value="Computador de Escritorio">Computador de Escritorio</option>
            <option value="Portatil">Portatil</option>
            <option value="Impresora">Impresora</option>
          </select>

          <label>Dependencia:</label>
          <input
            type="text"
            placeholder="Dependencia"
            name="dependencia"
            value={device?.dependencia}
            onChange={handleInputChange}
          />

          <label>Codigo Interno:</label>
          <input
            type="text"
            placeholder="Codigo Interno"
            name="codigoInterno"
            value={device?.codigoInterno}
            onChange={handleInputChange}
          />

          <label>Marca:</label>
          <input
            type="text"
            placeholder="Marca"
            name="marcaEquipo"
            value={device?.marcaEquipo}
            onChange={handleInputChange}
          />

          <label>Modelo Equipo:</label>
          <input
            type="text"
            placeholder="Modelo"
            name="modeloEquipo"
            value={device?.modeloEquipo}
            onChange={handleInputChange}
          />

          <label>Serie/SN:</label>
          <input
            type="text"
            placeholder="Serie/SN"
            name="serieSN"
            value={device?.serieSN}
            onChange={handleInputChange}
          />

          <label>Fecha Compra:</label>
          <input
            type="date"
            placeholder="Fecha de Compra"
            name="fechaCompra"
            value={device?.fechaCompra}
            onChange={handleInputChange}
          />

          <label>Observaciones:</label>
          <ReactQuill
            theme="snow"
            value={observaciones}
            onChange={setDescription}
            modules={DeviceForm.modules}
            formats={DeviceForm.formats}
          />
          
          <label>Marca Procesador:</label>
          <input
            type="text"
            placeholder="Procesador Marca"
            name="procesadorMarca"
            value={device?.procesadorMarca}
            onChange={handleInputChange}
          />
          <label>Procesador Modelo:</label>
          <input
            type="text"
            placeholder="Procesador Modelo"
            name="procesadormodelo"
            value={device?.procesadormodelo}
            onChange={handleInputChange}
          />
          <label>Almacenamiento Capacidad (Gb):</label>
          <input
            type="text"
            placeholder="Almacenamiento Capacidad (Gb)"
            name="almacenamientoCapacidadGb"
            value={device?.almacenamientoCapacidadGb}
            onChange={handleInputChange}
          />
          <label>Almacenamiento Tipo:</label>
          <select
            name="almacenamientoTipo"
            value={device?.almacenamientoTipo}
            onChange={handleInputChange}
          >
            <option value="HDD">HDD</option>
            <option value="SSD">SSD</option>
            <option value="N/A">N/A</option>
          </select>

          <label>RAM Capacidad (GB):</label>
          <input
            type="text"
            placeholder="RAM Capacidad (GB)"
            name="ramCapacidadGB"
            value={device?.ramCapacidadGB}
            onChange={handleInputChange}
          />
          <label>RAM Frecuencia (MHz):</label>
          <input
            type="text"
            placeholder="Fecha de Compra"
            name="ramFrecuenciaMHz"
            value={device?.ramFrecuenciaMHz}
            onChange={handleInputChange}
          />
          <label>RAM Tecnologia:</label>
          <input
            type="text"
            placeholder="RAM Tecnologia"
            name="ramTecnologia"
            value={device?.ramTecnologia}
            onChange={handleInputChange}
          />
          <label>RAM Factor Forma:</label>
          <input
            type="text"
            placeholder="Fecha de Compra"
            name="ramFactorForma"
            value={device?.ramFactorForma}
            onChange={handleInputChange}
          />
          <label>Grafica Tipo:</label>
          <select
            name="graficaTipo"
            value={device?.graficaTipo}
            onChange={handleInputChange}
          >
            <option value="Integrada">Integrada</option>
            <option value="Dedicada">Dedicada</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Grafica Modelo:</label>
          <input
            type="text"
            placeholder="Grafica Modelo"
            name="graficaModelo"
            value={device?.graficaModelo}
            onChange={handleInputChange}
          />

          <label>Fuente Poder Tiene:</label>
          <select
            name="fuentePoderTiene"
            value={device?.fuentePoderTiene}
            onChange={handleInputChange}
          >
            <option value="Si">Si</option>
            <option value="No">No</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Fuente Poder Tipo:</label>
          <input
            type="text"
            placeholder="Fuente Poder Tipo"
            name="fuentePoderTipo"
            value={device?.fuentePoderTipo}
            onChange={handleInputChange}
          />

          <label>Tarjeta Madre Marca:</label>
          <input
            type="text"
            placeholder="Tarjeta Madre Marca"
            name="tarjetaMadreMarca"
            value={device?.tarjetaMadreMarca}
            onChange={handleInputChange}
          />

          <label>Tarjeta Madre Modelo:</label>
          <input
            type="text"
            placeholder="Tarjeta Madre Modelo"
            name="tarjetaMadreModelo"
            value={device?.tarjetaMadreModelo}
            onChange={handleInputChange}
          />

          <label>Tarjeta Madre Tamaño:</label>
          <input
            type="text"
            placeholder="Tarjeta Madre Tamaño"
            name="tarjetaMadreTamano"
            value={device?.tarjetaMadreTamano}
            onChange={handleInputChange}
          />

          <label>Chasis Tiene:</label>
          <select
            name="chasisTiene"
            value={device?.chasisTiene}
            onChange={handleInputChange}
          >
            <option value="Si">Si</option>
            <option value="No">No</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Chasis Tamaño:</label>
          <input
            type="text"
            placeholder="Chasis Tamaño"
            name="chasisTamano"
            value={device?.chasisTamano}
            onChange={handleInputChange}
          />

          <label>Puertos:</label>
          <input
            type="text"
            placeholder="Puertos"
            name="puertos"
            value={device?.puertos}
            onChange={handleInputChange}
          />

          <label>Pantalla Tiene:</label>
          <select
            name="pantallaTiene"
            value={device?.pantallaTiene}
            onChange={handleInputChange}
          >
            <option value="Si">Si</option>
            <option value="No">No</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Pantalla Funcional:</label>
          <select
            name="pantallaFuncional"
            value={device?.pantallaFuncional}
            onChange={handleInputChange}
          >
            <option value="Si">Si</option>
            <option value="No">No</option>
            <option value="N/A">N/A</option>
          </select>

          <label>Tarjeta Madre Modelo:</label>
          <input
            type="text"
            placeholder="Tarjeta Madre Modelo"
            name="tarjetaMadreModelo"
            value={device?.tarjetaMadreModelo}
            onChange={handleInputChange}
          />
          <label>Tarjeta Madre Modelo:</label>
          <input
            type="text"
            placeholder="Tarjeta Madre Modelo"
            name="tarjetaMadreModelo"
            value={device?.tarjetaMadreModelo}
            onChange={handleInputChange}
          />
          <label>Tarjeta Madre Modelo:</label>
          <input
            type="text"
            placeholder="Tarjeta Madre Modelo"
            name="tarjetaMadreModelo"
            value={device?.tarjetaMadreModelo}
            onChange={handleInputChange}
          />
          <label>Tarjeta Madre Modelo:</label>
          <input
            type="text"
            placeholder="Tarjeta Madre Modelo"
            name="tarjetaMadreModelo"
            value={device?.tarjetaMadreModelo}
            onChange={handleInputChange}
          />
          <label>Tarjeta Madre Modelo:</label>
          <input
            type="text"
            placeholder="Tarjeta Madre Modelo"
            name="tarjetaMadreModelo"
            value={device?.tarjetaMadreModelo}
            onChange={handleInputChange}
          />
          <label>Tarjeta Madre Modelo:</label>
          <input
            type="text"
            placeholder="Tarjeta Madre Modelo"
            name="tarjetaMadreModelo"
            value={device?.tarjetaMadreModelo}
            onChange={handleInputChange}
          />

          

          <div className="--my">
            <button type="submit" className="--btn --btn-primary">
              Save Device
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

DeviceForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
DeviceForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];

export default DeviceForm;

import React, { useEffect, useState } from "react";
import { SpinnerImg } from "../../loader/Loader";
import "./deviceList.scss";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import Search from "../../search/Search";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_DEVICES, selectFilteredDevices } from "../../../redux/features/device/filterSlice";
import ReactPaginate from "react-paginate";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { deleteDevice, getDevices } from "../../../redux/features/device/deviceSlice";
import { Link } from "react-router-dom";

const DeviceList = ({ devices, isLoading }) => {

  const [search, setSearch] = useState("");

  const filteredDevices = useSelector(selectFilteredDevices);

  const dispatch = useDispatch();

  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };

  const delDevice = async (id) => {
    //console.log(id);
    await dispatch(deleteDevice(id));
    await dispatch(getDevices());
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Eliminar Dispositivo",
      message: "Estas seguro de eliminar este dispositivo?",
      buttons: [
        {
          label: "Eliminar",
          onClick: () => delDevice(id),
        },
        {
          label: "Cancelar",
          // onClick: () => alert('Click No')
        },
      ],
    });
  };


   //   Begin Pagination
   const [currentItems, setCurrentItems] = useState([]);
   const [pageCount, setPageCount] = useState(0);
   const [itemOffset, setItemOffset] = useState(0);
   const itemsPerPage = 10;
 
   useEffect(() => {
     const endOffset = itemOffset + itemsPerPage;
 
     setCurrentItems(filteredDevices.slice(itemOffset, endOffset));
     setPageCount(Math.ceil(filteredDevices.length / itemsPerPage));
   }, [itemOffset, itemsPerPage, filteredDevices]);
 
   const handlePageClick = (event) => {
     const newOffset = (event.selected * itemsPerPage) % filteredDevices.length;
     setItemOffset(newOffset);
   };
   //   End Pagination

  useEffect(() => {
    dispatch(FILTER_DEVICES({ devices, search }));
  }, [devices, search, dispatch]);

  return (
    <div className="device-list">
      <hr />
      <div className="table">
        <div className="--flex-between --flex-dir-column">
          <span>
            <h4>Equipos</h4>
          </span>
          <span>
            <Search value={search} onChange={(e) => setSearch(e.target.value)}/>
          </span>
        </div>
        {isLoading && <SpinnerImg />}

        <div className="table">
          {!isLoading && devices.length === 0 ? (
            <p> --Dispositivos no encontrados, por favor agregar dispositivos.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tipo Equipo</th>
                  <th>Serial</th>
                  <th>Cod. Interno</th>
                  <th>Marca</th>
                  <th>Modelo</th>
                  <th>Dependencia</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {
                  currentItems.map((device, index) => {
                    const { _id, tipoEquipo, serieSN, codigoInterno, marcaEquipo, modeloEquipo, dependencia } = device
                    return (
                      <tr key={_id}>
                        <td>{index + 1}</td>
                        <td>{shortenText(tipoEquipo, 16)}</td>
                        <td>{serieSN}</td>
                        <td>{codigoInterno}</td>
                        <td>{marcaEquipo}</td>
                        <td>{modeloEquipo}</td>
                        <td>{dependencia}</td>
                        <td className="icons">
                          <span><Link to={`/edit-device/${_id}`}><FaEdit size={20} color={"green"} /></Link></span>
                          <span><FaTrashAlt size={20} color={"red"} onClick={() => confirmDelete(_id)}/></span>
                        </td>

                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          )}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Siguiente"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="Anterior"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="activePage"
        />
      </div>
    </div>
  );
};

export default DeviceList;

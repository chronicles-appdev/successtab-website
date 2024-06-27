/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Modal_Page.css";
import Modal from "react-modal";
import Pay_info from "./Pay_info";

const Modal_Page = ({ modalIsOpen, setIsOpen, selectedProduct }) => {
  const [modal, setModal] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openPayModal() {
    setModal(true);
    setIsOpen(false);
  }

  return (
    <div>
      <Pay_info
        modal={modal}
        setModal={setModal}
        selectedProduct={selectedProduct}
      />
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button onClick={closeModal} className="modal-close_btn">
          <img src="/close.png" />
        </button>
        <div key={selectedProduct} className="modal-info">
          <div className="modal-details">
            <div>
              <h3>{selectedProduct.name}</h3>
              <span>{selectedProduct.price}</span>
            </div>

            <img src={selectedProduct.modalImg} alt="" />
            <button onClick={openPayModal} className="modal-Buy_btn">
              Buy Now
            </button>
          </div>

          <div className="modal-desc">
            <h2>Specifications</h2>
            <ul>
              <li>
                Screen Size: <span>{selectedProduct.size}</span>
              </li>
              <li>
                OS : <span>{selectedProduct.os}</span>
              </li>
              <li>
                Storage : <span>{selectedProduct.storage}</span>
              </li>
              <li>
                RAM : <span>{selectedProduct.ram}</span>
              </li>
              <li>
                Processor : <span>{selectedProduct.processor}</span>
              </li>
              <li>
                Camera : <span>{selectedProduct.camera}</span>
              </li>
              <li>
                Battery : <span>{selectedProduct.battery}</span>
              </li>
              <li>
                Touch Screen : <span>{selectedProduct.touchScreen}</span>
              </li>
              <li>
                SIM Card Slot : <span>{selectedProduct.sim}</span>
              </li>
            </ul>
            <button onClick={openPayModal} className="modal-Buy_btn_responsive">
              Buy Now
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Modal_Page;

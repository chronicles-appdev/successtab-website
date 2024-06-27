/* eslint-disable react/prop-types */
import emailjs from "emailjs-com";
import Modal from "react-modal";
import styles from "./Pay_info.module.css";
import { useState } from "react";
import { PaystackButton } from "react-paystack";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    width: "662px",
    height: "547px",
    background: "#ffffff !important",
    borderRadius: "10px",
    bottom: "auto",
    marginRight: "-50%",
    zIndex: "1000",
    transform: "translate(-50%, -50%)",
  },
};

const Pay_info = ({ modal, setModal, selectedProduct }) => {
  // const publicKey = "pk_test_ac1f02d6ca822c93420f73bb382efe372217c803";
  const publicKey = "pk_live_b019e2ae80f47b24ac072824985285915b14eadc";

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState("1");
  const originalAmount = selectedProduct.price
    ? parseInt(selectedProduct.price.replace(/[#,]/g, ""))
    : null;
  const amount = originalAmount * quantity * 100;

  const resetForm = () => {
    setEmail("");
    setName("");
    setPhone("");
    setPhone("");
    setAddress("");
    setQuantity("");
  };
  function sendEmail() {
    const serviceId = "service_h08m44d";
    const templateId = "template_qc5egoy";
    const userId = "CNLY6LI0Lf2OGRUmH";

    // Set the form data
    const formData = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      quantity: quantity,
      amount: amount,
    };

    // Send the email
    emailjs
      .send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });

    // Reset the form
  }

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      toast.success("Transaction Successful, You'll get an email shortly :)", {
        position: toast.POSITION.TOP_RIGHT,
      });
      resetForm();
      sendEmail();
    },
    onClose: () => {
      toast.error("Don't Leave, You need this tablet :(", {
        position: toast.POSITION.TOP_RIGHT,
      });
      resetForm();
    },
  };

  function closeModal() {
    setModal(false);
  }

  return (
    <div>
      <Modal style={customStyles} isOpen={modal} onRequestClose={closeModal}>
        <button onClick={closeModal} className={styles.pay_close_btn}>
          <img src="/close.png" />
        </button>
        <div>
          <h1 className={styles.pay_h1}>Payment Details</h1>
          <p className={styles.pay_p}>
            Please fill in the information below correctly{" "}
          </p>
        </div>

        <div className={styles.pay_pay_form}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            name="number"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Delivery Address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <input type="text" placeholder="Amount" value={amount / 100} />

          <PaystackButton
            {...componentProps}
            className={styles.pay_PayStackButton}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Pay_info;

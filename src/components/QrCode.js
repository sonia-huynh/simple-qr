import React, { useState } from "react";
import soniaQR from "../images/sonia-github-qr-code.png";
import "../main.css";
import { motion } from "framer-motion";

function QrCode() {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(true);
  }

  return (
    <>
      <h1 id="title" data-testid="title">
        Sonia's Github QR Code
      </h1>
      {!click && (
        <div className="button-container">
          <motion.button
            whileHover={{ scale: 1.1 }}
            data-testid="qr-code-button"
            onClick={handleClick}
            className="qr-button"
          >
            Click me to get the QR Code!
          </motion.button>
        </div>
      )}

      {click && (
        <motion.div whileHover={{ scale: 1.1 }} className="qr-card">
          <div className="qr-image-container">
            <img src={soniaQR} alt="Sonia github QR" className="qr-code" />
          </div>
          <div className="text-container">
            <h1>Sonia is a fullstack web developer</h1>
            <p>
              Scan the QR code to visit Sonia&apos;s Github and check out her
              projects
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default QrCode;

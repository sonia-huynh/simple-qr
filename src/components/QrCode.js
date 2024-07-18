import React, { useState } from "react";
import soniaQR from "../images/sonia-github-qr-code.png";
import "../main.css";

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
          <button
            data-testid="qr-code-button"
            onClick={handleClick}
            className="qr-button"
          >
            Click me to get the QR Code!
          </button>
        </div>
      )}

      {click && (
        <div className="qr-card">
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
        </div>
      )}
    </>
  );
}

export default QrCode;

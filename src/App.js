import soniaQR from "./images/sonia-github-qr-code.png";
import "./main.css";

function App() {
  return (
    <>
      <h1 id="title">Sonia's Github QR Code</h1>
      <div className="qr-card">
        <div className="qr-image-container">
          {/* <img src={soniaQR} alt="Sonia github QR" className="qr-code" /> */}
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
    </>
  );
}

export default App;

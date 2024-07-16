import soniaQR from "./images/sonia-github-qr.png";

function App() {
  return (
    <div className="qr-div">
      <div className="qr-image-div">
        <img src={soniaQR} alt="Sonia github QR" />
        <div className="text-container">
          <p>
            Scan the QR code to visit Sonia&apos;s Github and check out her
            projects
          </p>
        </div>
        <h1>Sonia is a fullstack web developer</h1>
      </div>
    </div>
  );
}

export default App;

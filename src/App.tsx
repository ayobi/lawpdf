import legLogo from './assets/legapplogo.png';
import './App.css';
import PdfChecker from './PdfChecker'; // Import the PdfChecker component

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={legLogo} className="logo vite" alt="LEGapp Logo" />
        </a>
      </div>
      <h1>Welcome to the LEGapp</h1>
      <h2>This app will allow you to be notified when new law documents are available</h2>

      {/* Render the PdfChecker component here */}
      <PdfChecker />
    </>
  );
}

export default App;

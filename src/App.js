// import '../public/bullet.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='div-wrapper'>
        <h1>Simple pricing for your business</h1>
        <p className='p'>Plans that are carefully crafted to suit your business.</p>
        <div className='pricing-row'>
          <div className='price'>
            <h5>Premium Pro</h5>
            <h5>$329</h5>
            <p className='bill'>Billed Just Once</p>
            <button>Get Started</button>
          </div>
          <div className='features'>
          <p>
            Access these features when you get this pricing package for your business.
          </p>
          <ul>
            <li>International calling and messaging API</li>
            <li>Additional phone numbers</li>
            <li>Automated messages via Zapier</li>
            <li>24/7 support and consulting</li>
          </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;

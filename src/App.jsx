import './App.css'

function App() {
  return (
    <div className="delivery-container">
      {/* Futuristic grid background */}
      <div className="grid-overlay"></div>
      
      {/* Floating particles */}
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
      <div className="particle particle-5"></div>
      <div className="particle particle-6"></div>
      
      {/* Decorative circles */}
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
      <div className="circle circle-4"></div>
      <div className="circle circle-5"></div>
      
      <div className="content-wrapper">
        <div className="text-section">
          <div className="brand">
            <span className="rocket-icon">🚀</span>
            <span className="brand-name">ARROWAI</span>
          </div>
          
          <h1 className="main-title">
            <span className="delivery-text">DELIVERY</span>
            <span className="express-text">EXPRESS</span>
          </h1>
          
          <p className="subtitle">
            FAST, RELIABLE, AND EFFICIENT<br />
            NEXT-GEN SHIPPING SOLUTIONS
          </p>
          
          <button className="explore-btn">
            EXPLORE MORE
          </button>
        </div>
        
        <div className="image-section">
          <div className="hologram-effect"></div>
          <div className="scooter-container">
            <div className="delivery-scooter">
              🛵
            </div>
            <div className="package">
              📦
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

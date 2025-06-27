import './App.css'

function App() {
  return (
    <div className="delivery-container">
      {/* Background shapes */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="floating-dots">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="left-section">
          <div className="brand">
            <span className="brand-icon">🚀</span>
            <span className="brand-name">OrbiTrack</span>
          </div>

          <h1 className="main-title">
            <div className="title-line">Delivery</div>
            <div className="title-line">Express</div>
          </h1>

          <p className="subtitle">
            Fast, Reliable, and Efficient<br />
            Shipping
          </p>

          <button className="explore-button">
            Pruébalo ahora
          </button>
        </div>

        <div className="right-section">
          <div className="illustration">
            <div className="scooter-container">
              <div className="package">
                <div className="package-shadow"></div>
              </div>
              <div className="scooter">
                <div className="scooter-shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

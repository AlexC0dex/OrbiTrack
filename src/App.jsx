import { useState } from 'react'
import './App.css'
import packageIcon1 from './assets/package-svgrepo-com.svg'

function App() {
  const [currentScreen, setCurrentScreen] = useState('home')

  const handleExploreClick = () => {
    setCurrentScreen('calculator')
  }

  const handleBackClick = () => {
    setCurrentScreen('home')
  }

  return (
    <div className="delivery-container">
      {/* Background shapes - common for both screens */}
      <div className="background-shapes">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-circle circle-4"></div>
        <div className="floating-circle circle-5"></div>
        <div className="floating-circle circle-6"></div>
        <div className="floating-circle circle-7"></div>
        <div className="floating-circle circle-8"></div>
      </div>

      {currentScreen === 'home' ? (
        <div className="content-wrapper home-screen">


          <div className="home-content">
            <div className="left-section">
              <h1 className="main-title">
              <span className="brand-icon">🚀</span>
              <span className="brand-name">Grupo 7</span>
                <div className="title-line">OrbiTrack</div>
              </h1>

              <p className="subtitle">
                Optimiza las rutas de delivery de tu empresa<br />
                de manera rápida y eficiente<br />
              </p>

              <button className="explore-button" onClick={handleExploreClick}>
                Pruébalo ahora
              </button>
            </div>

            <div className="right-section">
              <div className="packages-container">
                <img src={packageIcon1} alt="Package 1" className="package package-1" />
                <img src={packageIcon1} alt="Package 2" className="package package-2" />
                <img src={packageIcon1} alt="Package 3" className="package package-3" />
                <img src={packageIcon1} alt="Package 4" className="package package-4" />
                <img src={packageIcon1} alt="Package 5" className="package package-5" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="content-wrapper calculator-screen">
          <button className="back-button" onClick={handleBackClick}>
            ← Volver
          </button>
          <div className="calculator-left">
            <br />
            <h2 className="calculator-title">Ruta optimizada</h2>
            <div className="calculator-controls">
              <input 
                type="number" 
                className="route-input" 
                placeholder="Ingresa el número de paradas"
              />
              <button className="calculate-button">
                Calcular Ruta Óptima
              </button>
            </div>
          </div>
          
          <div className="result-section">
            <div className="route-display">
              {/* Aquí se mostrará el mapa o la ruta */}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

<p align="center">
  <a href="https://reactjs.org/">
    <img src="https://img.shields.io/badge/React-19.1.0-blue?logo=react" alt="React" />
  </a>
  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Vite-7.0.2-green.svg?logo=vite" alt="Vite" />
  </a>
  <a href="https://react-leaflet.js.org/">
    <img src="https://img.shields.io/badge/React--Leaflet-5.0.0-brightgreen.svg?logo=leaflet" alt="React-Leaflet" />
  </a>
  <a href="https://react-leaflet.js.org/">
    <img src="https://img.shields.io/badge/Papaparse-5.5.3-brightgreen.svg?logo=papaparse" alt="Papaparse" />
  </a>
</p>


<h1 align="center">OrbiTrack 📍🗺️🚚</h1>
<p align="center">
  <strong>Rutas óptimas en Lima sin salir de tu navegador</strong>
</p>

---

## 🏃‍♂️🏃‍♀️🏃‍♂️ Contributors

<div align="center">
  <a href="https://github.com/AlexC0dex" target="_blank">
    <img src="https://avatars.githubusercontent.com/AlexC0dex?s=100" width="80" alt="AlexC0dex" />
  </a>&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/fabs-in-space" target="_blank">
    <img src="https://avatars.githubusercontent.com/fabs-in-space?s=100" width="80" alt="fabs-in-space" />
  </a>&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/diegoalonzomora" target="_blank">
    <img src="https://avatars.githubusercontent.com/diegoalonzomora?s=100" width="80" alt="diegoalonzomora" />
  </a>
</div>

---

<p align="center">
  <a href="https://github.com/AlexC0dex/OrbiTrack/commits/main">
    <img 
      src="https://img.shields.io/github/last-commit/AlexC0dex/OrbiTrack?style=for-the-badge" 
      alt="Último commit" 
    />
  </a>
</p>



## ✨ Características destacadas

| Icono | Funcionalidad                                         |
| :----:| :----------------------------------------------------- |
| 🛣️     | **Dijkstra**: ruta más corta entre dos puntos          |
| 🎯     | **Held-Karp**: TSP (tour óptimo que visita varios nodos y regresa al origen) |
| 🗺️     | **React-Leaflet**: renderizado de mapas interactivos   |
| 📊     | Datos de la red vial de Lima (CSV locales)            |
| 📡     | Funciona **offline** tras la instalación               |
| ⚛️     | Construido con **React + Vite**                        |

---

## ⚙️ Requisitos

- **Node.js** ≥ 14  
- **npm**  
- Navegador moderno (Chrome, Firefox, Edge…)  
- Espacio libre: ~5 MB (datos CSV)  

> 🌐 Conexión **NO** requerida para el uso local.

---

## 🚀 Instalación rápida

```bash
git clone https://github.com/AlexC0dex/OrbiTrack.git
cd OrbiTrack
npm install
npm run dev
````

⬢ Abre [http://localhost:5173/](http://localhost:5173/) en tu navegador.

<details>
<summary>📦 Build & Preview</summary>

```bash
npm run build    # Empaqueta en /dist
npm run preview  # Sirve la versión de producción
```

</details>

---

## 🎮 Uso en 3 pasos

1. **Ingresa** la cantidad de nodos del mapa de Lima.
2. **Calcula ruta**

   * 🚚 **Held-Karp** para circuito completo
   * 🏃 **Dijkstra** para tramo individual
3. **Disfruta** de la visualización: marcadores, líneas que siguen calles reales y orden de paradas.

---

## 🤝 Contribuye

1. 🔱 **Fork** del repo
2. 💡 Nueva rama:

   ```bash
   git checkout -b feature/mi-nueva-funcionalidad
   ```
3. 🛠️ Implementa & prueba localmente
4. 📤 **Push** a tu fork
5. 📬 Abre un **Pull Request**

---

## 📄 Licencia

Todos los derechos reservados © 2025
Contacta a [AlexC0dex](https://github.com/AlexC0dex)

---

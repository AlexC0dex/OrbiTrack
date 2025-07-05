import { useEffect, useState } from "react";
import Papa from "papaparse";
import { MapContainer, TileLayer, CircleMarker, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ numeroNodos }) {
  const [nodes, setNodes] = useState({});
  const [graph, setGraph] = useState({});
  const [tourEdges, setTourEdges] = useState([]);
  const [selectedNode, setSelectedNode] = useState([]);
  const [isRouteCalculating, setIsRouteCalculating] = useState(true);

  useEffect(() => {
    setIsRouteCalculating(true);
    if (Object.keys(nodes).length < 1) {
      // Cargar los datos y nodos desde los archivos CVS (lima_edges.csv y lima_nodes.csv)
      Promise.all([
        fetch("/data/lima_nodes.csv").then((response) => response.text()),
        fetch("/data/lima_edges.csv").then((response) => response.text()),
      ]).then(([nodesData, edgesData]) => {
        const nodesArray = Papa.parse(nodesData, { header: true }).data;
        const edgesArray = Papa.parse(edgesData, { header: true }).data;

        setIsRouteCalculating(false);
        const nodeMap = {};

        nodesArray.forEach((r) => {
          const id = +r.node_id;
          nodeMap[id] = {
            id: id,
            lat: parseFloat(r.y),
            lon: parseFloat(r.x),
          };
        });

        const g = {};
        Object.keys(nodeMap).forEach((id) => (g[id] = []));
        edgesArray.forEach((r) => {
          const u = +r.node1,
            v = +r.node2,
            w = +r.distance;
          if (g[u]) g[u].push([v, w]);
        });

        setNodes(nodeMap);
        setGraph(g);
      });
    }
  }, [nodes]);

  // Algoritmo de Held-Karp para el problema del agente viajero (TPS)
  useEffect(() => {
    if (!Object.keys(graph).length) return;
    const startNode = 38455; // Nodo de inicio en la UPC :v

    const availNodes = Object.keys(graph)
      .map((n) => Number(n)) // <-- aquí
      .filter((n) => n !== startNode);
    const targetNodes = availNodes
      .sort(() => Math.random() - 0.5)
      .slice(0, numeroNodos);
    const nodeList = [startNode, ...targetNodes];
    const nodesCords = nodeList.map((n) => nodes[n]);

    setSelectedNode(nodesCords);
    setIsRouteCalculating(true);

    function tpsHeldKarp(graph, nodesList, start) {
      const n = nodesList.length;

      // Precalculamos las distancias entre los nodos usando Dijkstra y lo colocamos en una matriz
      const distMatrix = nodesList.map((u) => {
        /*const { dist, prev } = dijkstra(graph, u);
        // Guardamos tambien el path para no recalcularlo despues
        return nodesList.map((v) =>
          dist[v] === Infinity
            ? [Infinity, []]
            : [dist[v], reconstructPath(prev, u, v)]
        );*/ //Descomentar cuando ya se tenga dijkstra y reconstructPath
        return u; //eliminar cuando ya se tengan las otras funciones
      });

      const ALL = 1 << n; // 2^n todas los subconjuntos de nodos
      const dp = Array.from({ length: ALL }, () => Array(n).fill(Infinity));
      const previos = Array.from({ length: ALL }, () => Array(n).fill(null));

      dp[1 << 0][0] = 0; // La distancia desde el nodo de inicio a si mismo debe ser 0

      for (let mask = 1; mask < ALL; mask++) {
        for (let u = 0; u < n; u++) {
          if (!(mask & (1 << u))) continue; // Si el nodo u no esta en el subconjunto, continuamos

          for (let v = 0; v < n; v++) {
            if (mask & (1 << v)) continue; // si el nodo v ya esta en el subconjunto, continuamos

            const nextMask = mask | (1 << v);
            const newDist = dp[mask][u] + distMatrix[u][v][0];

            if (newDist < dp[nextMask][v]) {
              dp[nextMask][v] = newDist;
              previos[nextMask][v] = [u, distMatrix[u][v][1]]; // Guardamos el nodo padre para despues extraer el camino
            }
          }
        }
      }

      // vamos a terminar el camino hacia el nodo de inicio
      let costoMinimo = Infinity;
      let ultimoNodo = -1;

      for (let u = 0; u < n; u++) {
        const cost = dp[ALL - 1][u] + distMatrix[u][0][0];
        if (cost < costoMinimo) {
          costoMinimo = cost;
          ultimoNodo = u;
          previos[ALL - 1][0] = [u, distMatrix[u][0][1]];
        }
      }

      // Por ultimo pero no menos importante, reconstruimos el camino
      const pathNodes = [];
      const pathEdges = [];
      let mask = ALL - 1;
      let curr = ultimoNodo;
      pathEdges.push(previos[mask][0][1]); // Agregamos el camino del ultimo nodo al inicio
      while (previos[mask][curr] !== null) {
        pathNodes.push(nodesList[curr]);

        const prev = previos[mask][curr][0]; // Obtenemos el nodo previo a este nodo
        const prevPath = previos[mask][curr][1]; // Obtenemos el camino previo a este nodo
        pathEdges.push(prevPath);
        mask = mask ^ (1 << curr); // Eliminamos el nodo actual de la mascara con XOR
        curr = prev;
      }

      pathNodes.push(start); // Agregamos el nodo de inicio al final del camino
      pathNodes.reverse();
      pathEdges.reverse();

      const segments = [];
      for (let j = 0; j < pathEdges.length; j++) {
        for (let i = 0; i < pathEdges[j].length - 1; i++) {
          const A = nodes[pathEdges[j][i]],
            B = nodes[pathEdges[j][i + 1]];
          if (A && B)
            segments.push([
              [A.lat, A.lon],
              [B.lat, B.lon],
            ]);
        }
      }
      setTourEdges(segments);
      setIsRouteCalculating(false);
    }
    tpsHeldKarp(graph, nodeList, startNode);
  }, [nodes, graph, numeroNodos]);

  return (
    <>
     {//Aca ira el mapa renderizado con los nodos y las rutas
     }
    </>
  )
}

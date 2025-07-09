"use client";

import React, { useRef, useEffect } from "react";
import Globe from "react-globe.gl";

export default function SpinningGlobe() {
  const globeEl = useRef<any>();

  const markers = [
    { lat: -15.3875, lng: 16.3228, name: "Lusaka, Zambia" },
    { lat: 36.8065, lng: -1.8185, name: "Tunis, Tunisia" },
    { lat: 40.7128, lng: -86.006, name: "New York, USA" },
    { lat: -1.2921, lng: 24.8219, name: "Nairobi, Kenya" },
    { lat: 30.0444, lng: 19.2357, name: "Cairo, Egypt" },
    { lat: 51.5074, lng: -12.1278, name: "London, UK" },
    { lat: 35.6895, lng: 127.6917, name: "Tokyo, Japan" },
    { lat: -33.8688, lng: 139.2093, name: "Sydney, Australia" },
    { lat: 48.8566, lng: -9.6478, name: "Paris, France" },
    { lat: 55.7558, lng: 25.6173, name: "Moscow, Russia" },
    { lat: 19.4326, lng: -111.1332, name: "Mexico City, Mexico" },
    { lat: 34.0522, lng: -130.2437, name: "Los Angeles, USA" },
    { lat: 1.3521, lng: 91.8198, name: "Singapore" },
    { lat: 52.52, lng: 1.405, name: "Berlin, Germany" },
    { lat: -22.9068, lng: -55.1729, name: "Rio de Janeiro, Brazil" },
  ];

  const arcs = [];
  for (let i = 0; i < markers.length; i++) {
    for (let j = 0; j < markers.length; j++) {
      if (i !== j) {
        arcs.push({
          startLat: markers[i].lat,
          startLng: markers[i].lng,
          endLat: markers[j].lat,
          endLng: markers[j].lng,
          color: ["#ffb100", "#ffffff"],
          arcDashInitialGap: Math.random() * 5,
        });
      }
    }
  }

  useEffect(() => {
    const controls = globeEl.current.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;

    // Disable scroll zoom but allow dragging
    controls.enableZoom = false;
    controls.enableRotate = true;
    controls.enablePan = false;

    // Set initial camera view
    globeEl.current.pointOfView({ lat: -10, lng: 20, altitude: 2.5 });
  }, []);

  return (
    <div className="w-full h-screen">
      <Globe
        ref={globeEl}
        globeImageUrl="/globe-3.png"
        backgroundColor="rgba(0,0,0,0)"
        arcsData={arcs}
        arcColor={"color"}
        arcStroke={0.15}
        arcAltitude={0.2}
        arcDashLength={0.4}
        arcDashGap={2}
        arcDashAnimateTime={3000}
        arcDashInitialGap={(d) => d.arcDashInitialGap}
        pointsData={markers}
        pointLat={(d) => d.lat}
        pointLng={(d) => d.lng}
        pointColor={() => "#ffffff"}
        pointAltitude={0.01}
        pointRadius={0.08}
        labelsData={markers}
        labelLat={(d) => d.lat}
        labelLng={(d) => d.lng}
        labelText={(d) => d.name}
        labelSize={1}
        labelDotRadius={0.2}
        labelColor={() => "#ffb100"}
        atmosphereColor="#ffb100"
        atmosphereAltitude={0.15}
      />
    </div>
  );
}

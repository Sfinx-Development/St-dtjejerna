import React, { FC, useEffect } from "react";
import { Box, Typography } from "@mui/material";

// Typdeklaration för initMap
declare global {
  interface Window {
    google: {
      maps: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Map: any;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Marker: any;
      };
    };
    initMap: () => void;
  }
}


const GoogleMap: FC = () => {
  useEffect(() => {
    
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=VÅRAN API&callback=initMap`;
    script.async = true;
    document.body.appendChild(script);

   
    window.initMap = () => {
      const mapElement = document.getElementById("map");
      if (mapElement) {
        const map = new window.google.maps.Map(mapElement, {
          center: { lat: 57.7156, lng: 12.9415 }, 
          zoom: 15, 
        });

        
        new window.google.maps.Marker({
          position: { lat: 57.7156, lng: 12.9415 }, 
          map,
          title: "Tredje Villagatan 17, Borås",
        });
      }
    };
  }, []);

  return (
    <div
      id="map"
      style={{ width: "100%", height: "400px" }} 
    />
  );
};


const Locations: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Typography variant="h2" gutterBottom sx={{ textAlign: "center", color: "#d29bbf" }}>
        Vart vi finns idag...
      </Typography>
    
      <Typography variant="body1" paragraph sx={{ textAlign: "center", color: "#000", fontSize: "1.2em" }}>
        Sandared ~ Dalsjöfors ~ Sjömarken ~ Fristad ~ Borås
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: "center", color: "#000", marginTop: "20px" }}>
        <strong>Telefon:</strong> 033-726 96 76
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: "center", color: "#000" }}>
        <strong>E-post:</strong> <a href="mailto:stadtjejerna@hotmail.com">stadtjejerna@hotmail.com</a>
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: "center", color: "#000" }}>
        <strong>Adress:</strong><br />
        Tredje villagatan 17<br />
        50453 Borås
      </Typography>
      <Typography variant="body1" paragraph>
     
      </Typography>
      
     
      <GoogleMap />
    </Box>
  );
};

export default Locations;

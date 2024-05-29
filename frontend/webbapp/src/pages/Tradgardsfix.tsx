import React from 'react';
import { Box, Typography } from '@mui/material';

const Tradgardsfix: React.FC = () => {
  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        Trädgårdsfix
      </Typography>
      <img src="/images/hemstad.jpg" alt="Hemstäd" style={{ width: '100%', maxWidth: 600 }} />
      <Typography variant="body1" paragraph>
        Har du svårt att få vardagspusslet att gå ihop? Vill du få mer tid över till sådant som du verkligen uppskattar? Starta då ett städabonnemang och låt Städtjejerna göra jobbet! Vi är vana vid att ta hand om olika typer av boenden och behov runt om i Borås med omnejd. Därför skräddarsys hemstädningen med ett upplägg som matchar just dina unika behov. Kanske önskas lakansbyte, strykning eller hjälp med tvätt?
      </Typography>
     
    </Box>
  );
};

export default Tradgardsfix;

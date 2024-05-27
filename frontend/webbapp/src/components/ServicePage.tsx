import React from 'react';
import { Box, Typography } from '@mui/material';

type ServicePageProps = {
  image: string;
  title: string;
  description: string;
};

const ServicePage: React.FC<ServicePageProps> = ({ image, title, description }) => {
  return (
    <Box sx={{ padding: 4 }}>
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <img src={image} alt={title} style={{ maxWidth: '100%', height: 'auto' }} />
      </Box>
      <Typography variant="h4" gutterBottom>{title}</Typography>
      <Typography variant="body1">{description}</Typography>
    </Box>
  );
};

export default ServicePage;

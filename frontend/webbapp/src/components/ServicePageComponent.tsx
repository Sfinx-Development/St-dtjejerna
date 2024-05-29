// // src/components/ServicePage.tsx
// import React from 'react';
// import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

// interface ServicePageProps {
//   image: string;
//   title: string;
//   description: string;
//   features?: string[];
// }

// const ServicePage = ({ image, title, description, features }: ServicePageProps) => (
//   <Box>
//     <Box component="header" sx={{ textAlign: 'center', mb: 4 }}>
//       <img src={image} alt={title} style={{ width: '100%', maxHeight: 400, objectFit: 'cover' }} />
//       <Typography variant="h2" sx={{ mt: 2 }}>{title}</Typography>
//     </Box>
//     <Box component="section" sx={{ px: 3 }}>
//       <Typography variant="body1" dangerouslySetInnerHTML={{ __html: description }} />
//       {features && (
//         <>
//           <Typography variant="h6" sx={{ mt: 2 }}>Features</Typography>
//           <List>
//             {features.map((feature, index) => (
//               <ListItem key={index}>
//                 <ListItemText primary={feature} />
//               </ListItem>
//             ))}
//           </List>
//         </>
//       )}
//     </Box>
//   </Box>
// );

// export default ServicePage;

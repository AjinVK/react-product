import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { handleNavigation } from '../utils/navigationHandlers';
import { images } from "../../assets/images";
import './style.css';
import '../utils/cardStyle.css';
import '../utils/imageStyle.css';
import ResponsiveAppBar from "../responsiveappbar/ResponsiveAppBar";
import CommonImageCard from '../utils/CommonCard';
import { motion } from 'framer-motion';
import { useEffect, useMemo } from "react";

const cardData = [
  { title: "Sales & Marketing", image: images.salesAndMarketing, onClick: handleNavigation.sales },
  { title: "Gold Loan", image: images.goldLoan, onClick: handleNavigation.goldLoan },
  { title: "Group Loan", image: images.groupLoan, onClick: handleNavigation.groupLoan },
  { title: "HRMS", image: images.hrms, onClick: handleNavigation.hrms },
  { title: "Lab", image: images.lab, onClick: handleNavigation.lab },
  { title: "Pay Roll", image: images.payRoll, onClick: handleNavigation.payroll },
  { title: "Production", image: images.production, onClick: handleNavigation.production },
  { title: "Retail", image: images.retail, onClick: handleNavigation.retail },
  { title: "Accounting", image: images.accounting, onClick: handleNavigation.accounting },
  { title: "Stock Win", image: images.stockWin, onClick: handleNavigation.stockWin },
];

const Products = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    document.title = "Huewine - Product";
  }, []);

  const xOffset = useMemo(() => {
    if (isXs) return 0;
    if (isSm) return 20;
    if (isMd) return 40;
    if (isLg) return 80;
    return 0;
  }, [isXs, isSm, isMd, isLg]);

  return (
    <>
      <ResponsiveAppBar />
      <Box className="root-box" sx={{ overflow: 'hidden', }}>
        <Grid container spacing={3} justifyContent="center"
          maxWidth="lg"
          margin="auto" >
          {cardData.map((card, index) => (
            <Grid key={index} size={{ xs: 8, sm: 5, md: 2.8 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0, x: xOffset }}
                transition={{
                  delay: index * 0.1, duration: 0.5,
                  type: 'spring', stiffness: 100,
                }}
              >
                <Box sx={{
                  transform: {
                    xs: 'none',
                    sm: 'none',
                    md: 'none',
                    lg: 'translateX(-70px)',
                  }
                }}>
                  <CommonImageCard
                    title={card.title}
                    image={card.image}
                    onClick={card.onClick}
                  />
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box >
    </>
  );
};

export default Products;




// import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
// import { handleNavigation } from '../utils/navigationHandlers';
// import { images } from "../../assets/images";
// import ResponsiveAppBar from "../responsiveappbar/ResponsiveAppBar";
// import CommonImageCard from '../utils/CommonCard';
// import { motion } from 'framer-motion';
// import { useEffect, useMemo } from "react";

// const cardData = [
//   { title: "Sales & Marketing", image: images.salesAndMarketing, onClick: handleNavigation.sales },
//   { title: "Gold Loan", image: images.goldLoan, onClick: handleNavigation.goldLoan },
//   { title: "Group Loan", image: images.groupLoan, onClick: handleNavigation.groupLoan },
//   { title: "HRMS", image: images.hrms, onClick: handleNavigation.hrms },
//   { title: "Lab", image: images.lab, onClick: handleNavigation.lab },
//   { title: "Pay Roll", image: images.payRoll, onClick: handleNavigation.payroll },
//   { title: "Production", image: images.production, onClick: handleNavigation.production },
//   { title: "Retail", image: images.retail, onClick: handleNavigation.retail },
//   { title: "Accounting", image: images.accounting, onClick: handleNavigation.accounting },
//   { title: "Stock Win", image: images.stockWin, onClick: handleNavigation.stockWin },
// ];

// const Products = () => {
//   const theme = useTheme();
//   const isXs = useMediaQuery(theme.breakpoints.down('sm'));
//   const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
//   const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
//   const isLg = useMediaQuery(theme.breakpoints.up('lg'));

//   useEffect(() => {
//     document.title = "Huewine - Product";
//   }, []);

//   const xOffset = useMemo(() => {
//     if (isXs) return 0;
//     if (isSm) return 20;
//     if (isMd) return 40;
//     if (isLg) return 80;
//     return 0;
//   }, [isXs, isSm, isMd, isLg]);

//   return (
//     <>
//       <ResponsiveAppBar />
//       <Box
//         sx={{
//           minHeight: '100vh',
//           background: 'linear-gradient(to bottom right, #f4f6f8, #e1e8ed)',
//           py: 5,
//           px: 2,
//         }}
//       >
//         <Grid
//           container
//           spacing={3}
//           justifyContent="center"
//           alignItems="stretch"
//           maxWidth="lg"
//           margin="auto"
//         >
//           {cardData.map((card, index) => (
//               <Grid key={index} size={{ xs: 8, sm: 5, md: 2.8 }}>
//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0, x: xOffset }}
//                 transition={{
//                   delay: index * 0.07,
//                   duration: 0.5,
//                   type: 'spring',
//                   stiffness: 100,
//                 }}
//                 style={{
//                   height: '100%',
//                 }}
//               >
//                 <Box
//                   sx={{
//                     borderRadius: 4,
//                     overflow: 'hidden',
//                     boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
//                     transition: 'transform 0.3s',
//                     '&:hover': {
//                       transform: 'translateY(-8px)',
//                       boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
//                     },
//                     height: '100%',
//                     backgroundColor: '#fff',
//                   }}
//                 >
//                   <CommonImageCard
//                     title={card.title}
//                     image={card.image}
//                     onClick={card.onClick}
//                   />
//                 </Box>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </>
//   );
// };

// export default Products;

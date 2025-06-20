import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { handleNavigation } from '../routes/navLinks';
import { images } from "../../assets/images";
import './style.css';
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
  const muiTheme = useTheme();
  const isXs = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isSm = useMediaQuery(muiTheme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(muiTheme.breakpoints.between('md', 'lg'));
  const isLg = useMediaQuery(muiTheme.breakpoints.up('lg'));

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
      <Box className="root-box" sx={{ overflow: 'hidden' }}>
        <Grid container spacing={1} justifyContent="center" maxWidth="lg" margin="auto">
          {cardData.map((card, index) => (
            <Grid key={index} size={{ xs: 8, sm: 5, md: 2.8 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0, x: xOffset }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 100,
                }}
              >
                <Box sx={{
                  transform: {
                    xs: 'none',
                    sm: 'none',
                    md: 'none',
                    lg: 'translateX(-70px)',
                  },
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
      </Box>
    </>
  );
};

export { Products };

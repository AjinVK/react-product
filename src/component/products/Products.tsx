import { Box, Grid } from "@mui/material";
import { handleNavigation } from '../utils/navigationHandlers';
import { images } from "../../assets/images";
import './style.css';
import '../utils/cardStyle.css';
import '../utils/imageStyle.css';
import ResponsiveAppBar from "../responsiveappbar/ResponsiveAppBar";
import CommonImageCard from '../utils/CommonCard';
import { motion } from 'framer-motion';

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
  return (
    <>
      <ResponsiveAppBar />
      <Box className="root-box">
        <Grid container spacing={1} justifyContent="center">
          {cardData.map((card, index) => (
            <Grid key={index} size={{ xs: 8, sm: 5, md: 2.8 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <CommonImageCard
                  title={card.title}
                  image={card.image}
                  onClick={card.onClick}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Products;
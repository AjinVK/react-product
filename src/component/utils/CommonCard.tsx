import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { motion } from 'framer-motion';

interface CommonImageCardProps {
  title: string;
  image: string;
  onClick: () => void;
  alt?: string;
}

const CommonImageCard = ({ title, image, onClick, alt }: CommonImageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card className="card-box" onClick={onClick}>
        <CardMedia
          component="img"
          image={image}
          alt={alt || title}
          className="media-image"
        />
        <CardContent>
          <Typography variant="h6" fontWeight={700} sx={{ mb: -2 }}>
            {title}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CommonImageCard;

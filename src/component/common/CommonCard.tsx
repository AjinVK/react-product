import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import '../../pages/Products/productStyle.css';

interface CommonImageCardProps {
  title: string;
  image: string;
  onClick: () => void;
  alt?: string;
}

const CommonImageCard = ({ title, image, onClick, alt }: CommonImageCardProps) => {
  return (
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
  );
};

export default CommonImageCard;

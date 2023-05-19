import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function MediaCard() {
  const cardData = [
    { imgs: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Jacket', content: 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.' },
    { imgs: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Watch', content: 'From our Legends Collection, the Naga was inspired by water dragon that protects the oceans pearl Wear facing inward to be bestowed with love and abundance or outward for protection.' },
    { imgs: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Mobile Accessories', content: 'Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design' },
    { imgs: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Shoes', content: '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem' },
    { imgs: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Laptop Accessories', content: 'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests' },
  ];

  return (
  <>
  <Grid container spacing={2}>
  {cardData.map((card, index) => (
    <Grid item xs={3}>
     <Card sx={{ maxWidth: 355 }} key={index}>
      <CardMedia
        sx={{ height: 200 }}
        image={card.imgs}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {card.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {card.content}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginBottom: "5px" }} style={{justifyContent: 'center'}}>
      <Button variant="contained"  startIcon={<ShoppingCartIcon />}>Add to Cart</Button>
      </CardActions>
      </Card>
    </Grid>
    ))}

  </Grid>
  </>
  );
}
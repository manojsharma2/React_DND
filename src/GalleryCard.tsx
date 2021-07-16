import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";
import LazyLoad from "react-lazyload";

const GalleryCard = (props: any) => {
  const { media, mediaHeight, name, description, itemIndex } = props;
  return (
    <>
      <Card className={`image_gallery_item_${itemIndex}`}>
        <LazyLoad height={200}>
        <CardMedia
          component="img"
          loading={"lazy"}
          alt="Contemplative Reptile"
          height={'240px'}
          image={media}
          title="Contemplative Reptile"
        />
          {/* <img src={media} alt={itemIndex +"_image"} /> */}
        </LazyLoad>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
export default GalleryCard;

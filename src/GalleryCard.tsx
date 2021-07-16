import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";

const GalleryCard = (props: any) => {
  const { media, mediaHeight, name, description, itemIndex } = props;
  return (
    <>
      <Card className={`image_gallery_item_${itemIndex}`}>
        <CardMedia
          component="img"
          loading={"lazy"}
          alt="Contemplative Reptile"
          height={mediaHeight}
          image={media}
          title="Contemplative Reptile"
        />
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

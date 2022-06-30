import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/actions";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  return (
    <Card
      sx={{
        bgcolor: "rgba(143, 128, 128, 0.5)",
      }}
    >
      <CardMedia
        sx={{
          height: 170,
          bgcolor: "rgba(0, 0, 0, 0.5)",
        }}
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.title}
      />
      <div>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          ❌
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;

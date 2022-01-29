import React from "react";
import Post from "./Post";

const posts = [
  {
    id: "1",
    username: "joao",
    userImg: "https://joaocealmeida.netlify.app/images/my_portfolio_pic.jpg",
    img: "https://joaocealmeida.netlify.app/images/my_portfolio_pic.jpg",
    caption: "blablalba",
  },
  {
    id: "2",
    username: "joao",
    userImg: "https://joaocealmeida.netlify.app/images/my_portfolio_pic.jpg",
    img: "https://joaocealmeida.netlify.app/images/my_portfolio_pic.jpg",
    caption: "blablalba",
  },
  {
    id: "2",
    username: "joao",
    userImg: "https://joaocealmeida.netlify.app/images/my_portfolio_pic.jpg",
    img: "https://joaocealmeida.netlify.app/images/my_portfolio_pic.jpg",
    caption: "blablalba",
  },
];
const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;

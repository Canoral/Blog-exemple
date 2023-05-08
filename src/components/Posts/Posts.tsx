import { PostProps } from "../../@interfaces/interfaces";
import Post from "../Post/Post";

import "./Posts.scss";

function Posts({ posts }: PostProps) {
  const postsList = posts.map((post) => {
    return <Post key={post.id} post={post} />;
  });
  return (
    <main className="posts">
      <h1 className="posts-title">Dev Of Thrones</h1>
      <div className="posts-list">{postsList}</div>
    </main>
  );
}

export default Posts;

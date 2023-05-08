import "./Post.scss";
import { IPost } from "../../@interfaces/interfaces";

function Post({ post }: { post: IPost }) {
  return (
    <article key={post.id} className="post">
      <h2 className="post-title">{post.title}</h2>
      <div className="post-category">{post.category}</div>
      <p className="post-excerpt">{post.excerpt}</p>
    </article>
  );
}

export default Post;

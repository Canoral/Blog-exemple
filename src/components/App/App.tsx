import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Posts from "../Posts/Posts";

import axios from "axios";

import "./App.scss";

import postsData from "../../data/posts";
import { ICategories, IPost } from "../../@interfaces/interfaces";

function App() {
  const [zenMode, setZenMode] = useState(false);
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const categoriesData = await axios.get(
          "https://oclock-open-apis.vercel.app/api/blog/categories"
        );
        const postsData = await axios.get(
          "https://oclock-open-apis.vercel.app/api/blog/posts"
        );
        setCategories(categoriesData.data);
        setPosts(postsData.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [categories, posts]);
  return (
    <div className={`App ${zenMode ? "zen-mode" : ""}`}>
      <Header
        categories={categories}
        zenMode={zenMode}
        setZenMode={setZenMode}
      />
      <Posts posts={posts} />
      <Footer />
    </div>
  );
}

export default App;

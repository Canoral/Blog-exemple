import { useState, useEffect } from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Posts from "../Posts/Posts";
import Spinner from "../Spinner/Spinner";

import axios from "axios";

import "./App.scss";

import { ICategories, IPost } from "../../@interfaces/interfaces";

function App() {
  const [zenMode, setZenMode] = useState(false);
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={`App ${zenMode ? "zen-mode" : ""}`}>
      <Header
        categories={categories}
        zenMode={zenMode}
        setZenMode={setZenMode}
      />
      {loading ? <Spinner /> : <Posts posts={posts} />}

      <Footer />
    </div>
  );
}

export default App;

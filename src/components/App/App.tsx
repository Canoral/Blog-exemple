import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Posts from "../Posts/Posts";

import "./App.scss";

import categoriesData from "../../data/categories";
import postsData from "../../data/posts";

function App() {
  const [zenMode, setZenMode] = useState(false);

  return (
    <div className={`App ${zenMode ? "zen-mode" : ""}`}>
      <Header
        categories={categoriesData}
        zenMode={zenMode}
        setZenMode={setZenMode}
      />
      <Posts posts={postsData} />
      <Footer />
    </div>
  );
}

export default App;

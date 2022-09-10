import Header from "./presentation/components/Header/header";
import "./global.css";
import styles from "./app.module.css";
import Sidebar from "./presentation/components/Sidebar/sidebar";
import Post from "./presentation/components/Post/post";

function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}

export default App;

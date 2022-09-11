import Header from "./presentation/components/Header/header";
import "./global.css";
import styles from "./app.module.css";
import Sidebar from "./presentation/components/Sidebar/sidebar";
import Post, { PostProps } from "./presentation/components/Post/post";

const posts = [
  {
    id: 1,
    name: "Daniel Sousa",
    publishedAt: new Date("2022-05-05 08:00:00"),
    role: "Software Developer",
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    avatarUrl: "https://github.com/danielsousast.png",
  },
  {
    id: 2,
    name: "Daniel Sousa",
    publishedAt: new Date("2022-05-05 08:00:00"),
    role: "Software Developer",
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    avatarUrl: "https://github.com/danielsousast.png",
  },
];

function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts?.map((post) => (
            <Post
              key={post.id}
              name={post.name}
              avatarUrl={post.avatarUrl}
              role={post.role}
              publishedAt={post.publishedAt}
              content={post.content}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;

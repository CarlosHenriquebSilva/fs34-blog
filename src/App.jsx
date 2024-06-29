import Header from "./components/Header";
import FormBase from "./components/FormBase";
import PostHeader from "./components/PostHeader";
import PostBody from "./components/PostBody";

function App() {
  return (
    <>
      <Header className="bg-white shadow-xl flex p-3" />
            
      <PostHeader />
      <PostBody />
      <PostHeader />
      <PostBody />
      <PostHeader />
      <PostBody />

      
    </>
  );
}

export default App
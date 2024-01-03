import './App.css';
import PostList from './app/entities/posts/ui/PostList';

function App() {
  return (
    <div
      style={{
        display: 'flex'
      }}
    >
      <div style={{ flex: 1 }}>
        <PostList />
      </div>
    </div>
  );
}

export default App;

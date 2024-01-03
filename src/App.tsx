import PostList from './app/entities/posts/ui/PostList';
import UsersList from './app/entities/user/ui/UsersList';

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
      <div style={{ flex: 1 }}>
        <UsersList />
      </div>
    </div>
  );
}

export default App;

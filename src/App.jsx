import React, { useReducer, useEffect, useState } from 'react';
import { postsReducer, INITIAL_STATE } from './reducer/postsReducer';
import { fetchPosts } from './api/postsApi';
import FilterForm from './components/FilterForm';
import PostList from './components/PostList';

function App() {
  const [state, dispatch] = useReducer(postsReducer, INITIAL_STATE);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let isMounted = true;

    const getPosts = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        const data = await fetchPosts();
        if (isMounted) {
          dispatch({ type: "FETCH_SUCCESS", payload: data });
        }
      } catch (error) {
        if (isMounted) {
          dispatch({ type: "FETCH_ERROR", payload: error.message });
        }
      }
    };

    getPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredPosts = state.posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>Post Dashboard</h1>
      
      <FilterForm searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {state.loading && <p>Loading posts...</p>}
      
      {state.error && <p style={{ color: "red" }}>Error: {state.error}</p>}
      
      {!state.loading && !state.error && (
        <PostList posts={filteredPosts} />
      )}
    </div>
  );
}

export default App;
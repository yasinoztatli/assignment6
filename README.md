# React Post Dashboard (Assignment 6)

## File Organization
- src/api/postsApi.js: Handles asynchronous data fetching via the native browser fetch API. It contains no React code.
- src/reducer/postsReducer.js: Contains the initial state and a pure reducer function to manage async state transitions (loading, success, error) without side effects.
- src/components/Post.jsx: A pure presentational component displaying a single post's title and body.
- src/components/PostList.jsx: Iterates over the posts array and renders a list of Post components, including the "Empty State" handling.
- src/components/FilterForm.jsx: A controlled input component that updates the search term state residing in App.jsx.
- src/App.jsx: The orchestrator component. It uses useReducer to track API state, useEffect to trigger the fetch on mount, and useState for the search input. It also implements derived state by filtering posts during the render cycle rather than saving filtered arrays in state.

## Challenges Faced
- Derived State Implementation: Understanding why we shouldn't store filtered posts inside another useState. Calculating it on-the-fly during rendering makes the app simpler and avoids synchronization bugs.
- Handling Race Conditions / Memory Leaks: Learning to use a cleanup function inside useEffect (e.g., using an isMounted flag) to prevent the component from updating state if it unmounts before the fetch completes.
- Reducer Separation: Moving state transition logic out of components and into a pure reducer function helped me see how separating concerns makes code more predictable.

// posts reducer here
let state = [];
export default (posts = state, action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      // console.log([...posts, action.payload])
      return [...posts, action.payload];
    default:
      return posts;   
  }
}
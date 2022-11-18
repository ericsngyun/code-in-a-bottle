
// posts reducer here

export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      console.log(posts)
      return [...posts, action.payload];
    default:
      return posts;   
  }
}
let posts:any = []

//fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => response.json())
.then((data) =>{ 
  posts[0] = data.title
  console.log("posts")
});

const INITIAL_STATE = {
    list: posts
}

const postsReducer = (state = INITIAL_STATE, action: any) =>{
  switch(action.type){
    default:
      return state
  }
}

export default postsReducer
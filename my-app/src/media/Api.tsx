import { getSuggestedQuery } from "@testing-library/dom";

const user = {
    name: '',
    companyName: '',
    post: ''
}
function getUser(): void{
    fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(data => {                  
                    user.name = data.name;
                    user.companyName = data.company.name;
            });
        }

function getComment(): void{
   //fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
   fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((data) =>{ 
    user.post = data.title
    console.log("user.posts")
  });
}
getComment();
getUser();        
export {user};
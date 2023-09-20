let apiurl = "https://jsonplaceholder.typicode.com/todos";

async function fetchdata() {
    const response = await fetch(apiurl);
    const data = await response.json();
    data.map((items)=>{
        console.log("userId : "+items.userId);
        console.log("title : "+items.title);
        console.log("completed : "+items.completed);
    })
}

fetchdata();
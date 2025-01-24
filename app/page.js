import Image from "next/image";

export default async function Home() {
  const data= await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
  const posts=await data.json()
  console.log(posts);
  
  return (
   <div className="my-12">
    <h1 className="text-3xl font-bold mb-5 text-center">Blog Posts</h1>
   </div>
  );
}

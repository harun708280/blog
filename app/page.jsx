import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const data= await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
  const posts=await data.json()
  
  
  return (
   <div className="">
    <h1 className="text-3xl font-bold mb-5 ">Blog Posts</h1>
    <div className="grid grid-cols-4 gap-6">
      {
        posts.map(post=>
        <div className="bg-white p-5 shadow-lg rounded-lg" key={post.id}>
          <h1 className="text-xl font-semibold mb-4 line-clamp-1">{post.title}</h1>
          <p className="line-clamp-2">{post.body}</p>
          <div className=" flex justify-between">
            <div>  </div>
            <Link href={`/${post.id}`} className="bg-rose-500 mt-7 py-1 px-4 rounded text-white">
            Details Blog
            </Link>
          </div>


        </div>)
      }
    </div>
   </div>
  );
}

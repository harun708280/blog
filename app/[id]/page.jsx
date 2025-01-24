import Link from "next/link";
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { log } from "console";

export default async function Page({ params }) {
    const {id} = params;
    const { isAuthenticated, getUser } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();

    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    console.log(getUser)
  
    return (
      <div className="p-5 w-8/12 mx-auto my-12 bg-white shadow-xl rounded-lg ">
        <div className="mb=7">
        <Link href='/' className="bg-rose-500 py-1 px-4 rounded-lg text-white my-7 ">Back</Link>
        </div>
        <h1 className="text-2xl font-bold mb-3">Blog Title: {post.title}</h1>
        <p className="text-gray-700">{post.body}</p>
      </div>
    );
  }
  
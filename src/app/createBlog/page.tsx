'use client'
import { gql, GraphQLClient } from "graphql-request";
import { useState } from "react";

const gqlClient = new GraphQLClient("http://localhost:3000/api/graphql");

const POST_BLOG = gql`
    mutation Mutation($title: String!, $content: String!, $imgUrl: String!) {
        createBlog(title: $title, content: $content, imgUrl: $imgUrl)
    }
`;

const page = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
           const blog =  await gqlClient.request(POST_BLOG, { title, content, imgUrl });
           console.log(blog)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 text-black text-center">Add a new Blog</h1>
            <form onSubmit={handleSubmit} className="text-black flex flex-col">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label htmlFor="content">Content:</label>
                <textarea
                    name="content"
                    id="content"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
                <label htmlFor="url">Image url:</label>
                <input
                    type="text"
                    id="url"
                    name="url"
                    value={imgUrl}
                    onChange={e => setImgUrl(e.target.value)}
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">Create Blog</button>
            </form>
        </div>
    );
};

export default page;

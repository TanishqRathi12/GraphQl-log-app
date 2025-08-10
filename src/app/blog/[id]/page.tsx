import {gql,GraphQLClient} from "graphql-request";

const gqlClient = new GraphQLClient("http://localhost:3000/api/graphql");

const GET_BLOG = gql`
query ExampleQuery($blogId: String) {
  blog(index: $blogId) {
    id
    title
    content
    imgUrl
  }
}
`
interface Blog {
  id: string;
  content: string;
  imgUrl: string;
  title: string;
}

export const Blogs = async({ params }: { params: Promise<{ id: string }> }) => {
    const p = await params;
    const id = p.id;
    const data: { blog: Blog } = await gqlClient.request(GET_BLOG, {
        blogId: id
    })
    const detail = data.blog
  return (
<div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
    <h1 className="text-3xl font-bold mb-4 text-gray-800">{detail.title}</h1>
    <img
        src={detail.imgUrl}
        alt={detail.title}
        className="w-full h-64 object-cover rounded-md mb-6"
    />
    <p className="text-gray-700 text-lg">{detail.content}</p>
</div>
  );
};

export default Blogs;

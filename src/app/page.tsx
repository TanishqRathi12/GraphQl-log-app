import { gql, GraphQLClient } from "graphql-request";
import Link from "next/link";

const gqlClient = new GraphQLClient("http://localhost:3000/api/graphql");

const GET_BLOGS = gql`
  query ExampleQuery {
    BlogArr {
      id
      title
      content
      imgUrl
    }
  }
`;

interface Blog {
  id: string;
  content: string;
  imgUrl: string;
  title: string;
}

export default async function Home() {
  const data: { BlogArr: Blog[] } = await gqlClient.request(GET_BLOGS);
  const blogs = data.BlogArr;
  return (
    <>
      <form
        action={"/search"}
        className="flex items-center justify-center mb-6 mt-6"
      >
        <input
          type="text"
          placeholder="Search blogs..."
          className="border border-gray-300 text-black rounded-l px-4 py-2 focus:outline-none"
          name="search"
        />
        <button
          type="submit"
          className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-r hover:bg-blue-700"
        >
          Search
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {blogs.length > 0 ? (
          blogs.map((item: Blog) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={item.imgUrl}
                alt={item.title}
                className="h-48 w-full text-black object-cover"
              />
              <div className="p-4 flex-1 flex flex-col">
                <Link href={`blog/${item.id}`}>
                  <h2 className="text-xl hover:underline text-black font-semibold mb-2">
                    {item.title}
                  </h2>
                </Link>
                <p className="text-black mb-4 flex-1">{item.content}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center col-span-full py-16">
            <svg
              className="w-16 h-16 mb-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 38h24M12 10h24M12 24h24M6 6v36a2 2 0 002 2h32a2 2 0 002-2V6"
              />
            </svg>
            <p className="text-2xl text-gray-500 font-medium">No blogs found</p>
            <span className="text-gray-400 mt-2">
              Try adjusting your search or check back later.
            </span>
          </div>
        )}
      </div>
    </>
  );
}

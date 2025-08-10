import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { gql } from "graphql-tag";
import { getBlogs } from "./resolvers/blog";
import { getBlogById } from "./resolvers/blog";
// import { getBlogById } from "./resolvers/blog";
import { prisma } from "../../../../prisma/client";
import { create } from "domain";

const typeDefs = gql`
  type Query {
    hello12: String
    rathi: String
    helloArray: [String]
    blog(index: String!): Blog
    BlogArr(q: String): [Blog] #for multiple filter add more using comma (q:String,ms:number")
  }
  type Mutation {
    createBlog(title: String!, content: String!, imgUrl: String!): Blog!
  }
  type Blog {
    id: String
    title: String!
    content: String
    imgUrl: String
  }
`;

const resolvers = {
  Query: {
    // hello12: () => "Hello, World",
    // rathi: () => "Tanishq Rathi here this side!!",
    // helloArray: () => ["Item1", "Item2", "Item3", "Item4"],
    blog: getBlogById,
    BlogArr: getBlogs,
  },
  Mutation: {
    createBlog: async (x: any, args: any) => {
      const blogDataSave = {
        title: args.title,
        content: args.content,
        imgUrl: args.imgUrl,
      };
      try {
        const blog = await prisma.blog.create({
          data: blogDataSave,
        });
        console.log(blog)
        return blog;
      } catch (error) {
        console.log(error)
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export { handler as GET, handler as POST };

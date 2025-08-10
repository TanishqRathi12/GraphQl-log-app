import { prisma } from "./../../../../../prisma/client";

export const getBlogById = (x: any, args: any) => {
  // const index = args.index
  // console.log(index)
  // return blogArr[index];
  const id = args.index;
  const blog = prisma.blog.findUnique({
    where: {
      id: id,
    },
  });
  return blog;
};

export const getBlogs = async (x: any, args: any) => {
  const q = args.q;
  const blogs = await prisma.blog.findMany({
    where: {
      title: {
        contains: q,
        mode: "insensitive",
      },
    },
  });
  return blogs;
};

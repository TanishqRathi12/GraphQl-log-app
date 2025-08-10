const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Clear existing blog posts
  await prisma.blog.deleteMany();

  // Create blog posts
  const blogs = await prisma.blog.createMany({
    data: [
      {
        title: "Getting Started with Next.js",
        content: "Next.js is a powerful React framework that enables server-side rendering and static site generation with ease.",
        imgUrl: "https://picsum.photos/800/400?random=1"
      },
      {
        title: "Understanding Prisma ORM",
        content: "Prisma is a modern database toolkit that provides type-safe database access for TypeScript and JavaScript.",
        imgUrl: "https://picsum.photos/800/400?random=2"
      },
      {
        title: "PostgreSQL Best Practices",
        content: "Learn essential PostgreSQL optimization techniques and best practices for production databases.",
        imgUrl: "https://picsum.photos/800/400?random=3"
      },
      {
        title: "React Hooks Explained",
        content: "A comprehensive guide to React Hooks and how they revolutionize component state management.",
        imgUrl: "https://picsum.photos/800/400?random=4"
      },
      {
        title: "CSS Grid vs Flexbox",
        content: "Understanding when to use CSS Grid and when to use Flexbox for modern web layouts.",
        imgUrl: "https://picsum.photos/800/400?random=5"
      },
      {
        title: "TypeScript for Beginners",
        content: "Start your journey with TypeScript and learn how it enhances JavaScript development.",
        imgUrl: "https://picsum.photos/800/400?random=6"
      },
      {
        title: "API Design Principles",
        content: "Essential principles for designing robust and scalable REST APIs that developers love.",
        imgUrl: "https://picsum.photos/800/400?random=7"
      },
      {
        title: "Modern JavaScript Features",
        content: "Explore the latest JavaScript features including async/await, destructuring, and arrow functions.",
        imgUrl: "https://picsum.photos/800/400?random=8"
      },
      {
        title: "Docker for Developers",
        content: "Learn how Docker can streamline your development workflow and deployment process.",
        imgUrl: "https://picsum.photos/800/400?random=9"
      },
      {
        title: "GraphQL vs REST",
        content: "Compare GraphQL and REST APIs to understand which approach fits your project needs.",
        imgUrl: "https://picsum.photos/800/400?random=10"
      },
      {
        title: "Web Performance Optimization",
        content: "Techniques to improve your website's loading speed and overall performance metrics.",
        imgUrl: "https://picsum.photos/800/400?random=11"
      },
      {
        title: "Authentication in Web Apps",
        content: "Implement secure authentication systems using JWT tokens and OAuth protocols.",
        imgUrl: "https://picsum.photos/800/400?random=12"
      },
      {
        title: "Database Migration Strategies",
        content: "Best practices for managing database schema changes in production environments.",
        imgUrl: "https://picsum.photos/800/400?random=13"
      },
      {
        title: "Mobile-First Design",
        content: "Create responsive designs that work seamlessly across all device sizes and platforms.",
        imgUrl: "https://picsum.photos/800/400?random=14"
      },
      {
        title: "Git Workflow Best Practices",
        content: "Master Git workflows including branching strategies and collaborative development practices.",
        imgUrl: "https://picsum.photos/800/400?random=15"
      },
      {
        title: "Testing React Applications",
        content: "Comprehensive testing strategies for React apps using Jest and React Testing Library.",
        imgUrl: "https://picsum.photos/800/400?random=16"
      },
      {
        title: "Serverless Architecture",
        content: "Understanding serverless computing and how it can reduce infrastructure complexity.",
        imgUrl: "https://picsum.photos/800/400?random=17"
      },
      {
        title: "CSS Animations and Transitions",
        content: "Create smooth and engaging user interfaces with CSS animations and transitions.",
        imgUrl: "https://picsum.photos/800/400?random=18"
      },
      {
        title: "Node.js Performance Tips",
        content: "Optimize your Node.js applications for better performance and scalability.",
        imgUrl: "https://picsum.photos/800/400?random=19"
      },
      {
        title: "Progressive Web Apps",
        content: "Build PWAs that provide native app-like experiences in web browsers.",
        imgUrl: "https://picsum.photos/800/400?random=20"
      },
      {
        title: "State Management in React",
        content: "Compare different state management solutions including Redux, Zustand, and Context API.",
        imgUrl: "https://picsum.photos/800/400?random=21"
      },
      {
        title: "DevOps for Frontend Developers",
        content: "Essential DevOps practices that frontend developers should know for modern deployments.",
        imgUrl: "https://picsum.photos/800/400?random=22"
      },
      {
        title: "Microservices Architecture",
        content: "Design scalable applications using microservices patterns and communication strategies.",
        imgUrl: "https://picsum.photos/800/400?random=23"
      },
      {
        title: "Web Security Fundamentals",
        content: "Protect your web applications from common security vulnerabilities and attacks.",
        imgUrl: "https://picsum.photos/800/400?random=24"
      },
      {
        title: "Clean Code Principles",
        content: "Write maintainable and readable code following established clean code principles.",
        imgUrl: "https://picsum.photos/800/400?random=25"
      },
      {
        title: "Cloud Computing Basics",
        content: "Introduction to cloud computing platforms and their services for web development.",
        imgUrl: "https://picsum.photos/800/400?random=26"
      },
      {
        title: "Accessibility in Web Design",
        content: "Create inclusive web experiences that are accessible to users with disabilities.",
        imgUrl: "https://picsum.photos/800/400?random=27"
      },
      {
        title: "Machine Learning for Web Developers",
        content: "Integrate machine learning models into web applications using modern frameworks.",
        imgUrl: "https://picsum.photos/800/400?random=28"
      },
      {
        title: "Package Management with npm",
        content: "Master npm package management and understand semantic versioning in JavaScript projects.",
        imgUrl: "https://picsum.photos/800/400?random=29"
      },
      {
        title: "Responsive Images",
        content: "Implement responsive image solutions for optimal performance across different devices.",
        imgUrl: "https://picsum.photos/800/400?random=30"
      },
      {
        title: "API Rate Limiting",
        content: "Implement effective rate limiting strategies to protect your APIs from abuse.",
        imgUrl: "https://picsum.photos/800/400?random=31"
      },
      {
        title: "Error Handling Best Practices",
        content: "Build robust applications with comprehensive error handling and logging strategies.",
        imgUrl: "https://picsum.photos/800/400?random=32"
      },
      {
        title: "Code Review Guidelines",
        content: "Effective code review practices that improve code quality and team collaboration.",
        imgUrl: "https://picsum.photos/800/400?random=33"
      },
      {
        title: "Frontend Build Tools",
        content: "Compare modern build tools like Webpack, Vite, and Parcel for frontend development.",
        imgUrl: "https://picsum.photos/800/400?random=34"
      },
      {
        title: "Database Indexing Strategies",
        content: "Optimize database performance with proper indexing strategies and query optimization.",
        imgUrl: "https://picsum.photos/800/400?random=35"
      },
      {
        title: "Web Components Introduction",
        content: "Create reusable custom elements using Web Components standards and best practices.",
        imgUrl: "https://picsum.photos/800/400?random=36"
      },
      {
        title: "Environment Configuration",
        content: "Manage application configuration across different environments securely and efficiently.",
        imgUrl: "https://picsum.photos/800/400?random=37"
      },
      {
        title: "Real-time Applications",
        content: "Build real-time features using WebSockets, Server-Sent Events, and modern protocols.",
        imgUrl: "https://picsum.photos/800/400?random=38"
      },
      {
        title: "Monitoring and Logging",
        content: "Implement comprehensive monitoring and logging solutions for production applications.",
        imgUrl: "https://picsum.photos/800/400?random=39"
      },
      {
        title: "Code Documentation",
        content: "Write effective documentation that helps other developers understand and maintain your code.",
        imgUrl: "https://picsum.photos/800/400?random=40"
      }
    ]
  });

  console.log(`Created ${blogs.count} blog posts`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60b45a0ec4a6b572b0f3ac0f",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-i589qod6",
                  apiId: "76052024-b502-4775-969b-b8072cc49302",
                },
                {
                  buildHookId: "60b45a0ec99fd9d79b6e2f82",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-qpgoaqve",
                  apiId: "0ffc42da-c660-4dc7-8a18-0f3a7c304074",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/johnsonsg/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-qpgoaqve.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

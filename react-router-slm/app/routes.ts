export default [
  { path: "/", element: require("./routes/home.tsx").default },
  { path: ":slug", element: require("./routes/post.tsx").default },
];

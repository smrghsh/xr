import glsl from "vite-plugin-glsl";

const isCodeSandbox =
  "SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env;

export default {
  root: "src/",
  publicDir: "../static/",
  base: "./",
  server: {
    host: true,
    open: !isCodeSandbox, // Open if it's not a CodeSandbox
  },
  build: {
    outDir: "../docs",
    emptyOutDir: true,
    sourcemap: true,
  },
  resolve: {
    alias: {
      web3: "web3/dist/web3.min.js",
    },

    // or
    alias: [
      {
        find: "web3",
        replacement: "web3/dist/web3.min.js",
      },
    ],
  },
  plugins: [glsl()],
};

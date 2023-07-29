module.exports = {
  apps: [
    {
      name: "newFrontendServity",
      port: "3333",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};

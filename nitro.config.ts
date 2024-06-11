//https://nitro.unjs.io/config
export default defineNitroConfig({
  preset: "azure",
  srcDir: "server",
  experimental: {
    openAPI: true,
    websocket: true,
  },
  runtimeConfig: {
    cosmosEndpoint: "UNSET",
    cosmosAccountKey: "UNSET",
  },
});

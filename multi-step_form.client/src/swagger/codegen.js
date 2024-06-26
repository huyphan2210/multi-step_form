const fs = require("fs");
const { codegen } = require("swagger-axios-codegen");

const swaggerDocument = JSON.parse(
  fs.readFileSync("../../../multi-step_form.Server/swagger.json", "utf-8")
);

codegen({
  methodNameMode: "operationId",
  source: swaggerDocument,
  outputDir: "./api",
});

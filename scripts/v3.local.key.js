const { V3 } = require("paseto");

async function main() {
  console.log(await V3.generateKey("local", { format: "paserk" }));
}

main();

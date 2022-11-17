const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let num = 0;
const flag = true;
// while (true) {
readline.question("Do you want to Stop? ", (name, cl) => {
  if (name === "stop") readline.close();
  readline.getNumber();
});
// }
function getNumber() {
  readline.question("Do You want to stop? ", (name) => {
    if (name == "stop") {
      readline.close();
    }
    return name;
  });
}

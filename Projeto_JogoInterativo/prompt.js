const promptSync = require("prompt-sync")();
const prompt = (ask) => {
  const lines = ask.split(/\r?\n/);
  const promptLine = lines.pop();
  console.log(lines.join("\n"));
  return promptSync(promptLine);
};
module.exports = prompt;

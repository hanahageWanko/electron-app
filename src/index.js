const util = require("util");
const childProcess = require("child_process");
const exec = util.promisify(childProcess.exec);
const Encoding = require("encoding-japanese"); // npm install encoding-japanese --save
async function run() {
  // let result = await exec(document.getElementById('inputtext1').value);
  // document.getElementById('textarea1').value = result.stdout;
  let result = await exec(document.getElementById("inputtext1").value, {
    encoding: "Shift_JIS",
  });
  document.getElementById("textarea1").value = Encoding.convert(result.stdout, {
    from: "SJIS",
    to: "UNICODE",
    type: "string",
  });
}

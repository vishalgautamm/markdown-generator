/* Generates template of a blogpost
 */
const moment = require("moment");
const fs = require("fs");

let date = moment().format('MMMM-Do-YYYY-h:mm');
const userName = process.env.USER;

let header = `
Date: ${date}
User: ${userName}
# Title:
-------------------------------------`

let fileName = `${date}.md`;

if(fs.existsSync(fileName)) {
  throw new Error(`ERROR ${fileName} already exists`);
  process.exit(1);
} else {
  console.log(`Creating ${fileName}`);
  fs.writeFileSync(fileName, header);
}





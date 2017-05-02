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

---

## Header

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

`;

let fileName = `${date}.md`;

if(fs.existsSync(fileName)) {
  throw new Error(`ERROR ${fileName} already exists`);
  process.exit(1);
} else {
  console.log(`Creating ${fileName}`);
  fs.writeFileSync(fileName, header);
}





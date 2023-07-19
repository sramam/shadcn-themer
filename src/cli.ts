import * as fs from "fs";
import * as path from "path";

async function main() {
  const dir = process.argv[2] ?? "./themes";
  const dst = path.resolve(dir);
  const src = path.resolve(`${__dirname}/../themes`);
  let stat;
  try {
    stat = fs.statSync(dst, {});
  } catch (err: any) {
    if (err.code !== "ENOENT") {
      throw err;
    }
    fs.mkdirSync(dst, { recursive: true });
    stat = fs.statSync(dst, {});
  }
  if (!stat?.isDirectory()) {
    console.error(`Usage: ${process.argv[1]} [dir]`);
    console.error(` '${dst}' is not a directory`);
    process.exit(-1);
  }
  if (dst === src) {
    console.error(`Source and destination directories have be different`);
    process.exit(-1);
  }
  fs.cpSync(src, dst, { recursive: true });
  console.log(`custom shadcn themes initialized to '${dir}'`);
}

main();

import fs from "fs";
import path from "path";

const root = process.cwd();

export const getFiles = () => {
  fs.readdirSync(path.join(root, "posts"));
};

export const getFilebySlug = ({ slug }) => {
    const jsxSource = fs.readFileSync(path.join(root,"data",`${slug}.jsx`))
};

export const getAllFilesMetadata = () => {};

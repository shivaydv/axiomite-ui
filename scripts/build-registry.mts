import { registryComponents } from "../registry";
import { promises as fs } from "fs";
import { z } from "zod";
import { registryItemFileSchema } from "../registry/schema";
import path from "path";

const REGISTRY_BASE_PATH = "registry";
const PUBLIC_FOLDER_BASE_PATH = "public/r";
const COMPONENT_FOLDER_PATH = "components";

type File = z.infer<typeof registryItemFileSchema>;

async function writeFileRecursive(filePath: string, data: string) {
  const dir = path.dirname(filePath); // Extract the directory path

  try {
    // Ensure the directory exists, recursively creating directories as needed
    await fs.mkdir(dir, { recursive: true });

    // Write the file
    await fs.writeFile(filePath, data, "utf-8");
    console.log(`File written to ${filePath}`);
  } catch (error) {
    console.error(`Error writing file`);
    console.error(error);
  }
}

const getComponentFiles = async (files: z.infer<typeof registryItemFileSchema>[]) => {
  const filesArrayPromises = (files ?? []).map(async (file) => {
    // file is an object with path, type, and maybe target
    const filePath = `${REGISTRY_BASE_PATH}/${file.path}`;
    const fileContent = await fs.readFile(filePath, "utf-8");
    return {
      type: file.type,
      content: fileContent,
      path: file.path,
      // target: file.target ? `${COMPONENT_FOLDER_PATH}/${file.target}`:file.path,
      target: file.target ?? file.path,
    };
  });
  const filesArray = await Promise.all(filesArrayPromises);

  return filesArray;
};

const main = async () => {
  // make a json file and put it in public folder
  for (let i = 0; i < registryComponents.length; i++) {
    const component = registryComponents[i];
    const files = component.files;
    if (!files) throw new Error("No files found for component");

    const filesArray = await getComponentFiles(files);

    const json = JSON.stringify(
      {
        ...component,
        files: filesArray,
      },
      null,
      2
    );
    const jsonPath = `${PUBLIC_FOLDER_BASE_PATH}/${component.name}.json`;
    await writeFileRecursive(jsonPath, json);
  }
};

main()
  .then(() => {
    console.log("done");
  })
  .catch((err) => {
    console.error(err);
  });
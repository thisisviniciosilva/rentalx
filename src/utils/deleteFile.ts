import fs from "fs";

/**
 *
 * @param filePath Path of the file to be deleted.
 * @returns void
 */
export default async function deleteFile(filePath: string): Promise<void> {
  try {
    await fs.promises.stat(filePath);
    await fs.promises.unlink(filePath);
  } catch {
    // eslint-disable-next-line no-useless-return
    return;
  }
}

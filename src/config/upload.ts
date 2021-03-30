import crypto from "crypto";
import multer from "multer";
import { resolve } from "path";

export default {
  upload(folder: string): multer.Options {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", folder),
        filename: (request, file, callback) => {
          const hash = crypto.randomBytes(16).toString("hex");
          const filename = `${hash}-${file.originalname}`;

          return callback(null, filename);
        },
      }),
    };
  },
};

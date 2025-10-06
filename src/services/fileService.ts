import { getUploadedFilePath } from "../utils/fileUpload.ts";

export class FileService {
  public saveFile(file?: Express.Multer.File): string {
    if (!file) return "";
    return getUploadedFilePath(file);
  }
}

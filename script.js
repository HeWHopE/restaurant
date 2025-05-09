import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // Current file path
const __dirname = path.dirname(__filename); // Current directory

const galleryFolder = path.join(__dirname, "public", "gallery");

fs.readdir(galleryFolder, (err, files) => {
  if (err) {
    console.error("Error reading gallery folder:", err);
    return;
  }

  // Filter image files (jpg, jpeg, png, webp, gif, etc.)
  const imageFiles = files.filter((file) =>
    /\.(jpg|jpeg|png|webp|gif)$/i.test(file)
  );

  // Rename each file to `photo1`, `photo2`, etc.
  imageFiles.forEach((file, index) => {
    const ext = path.extname(file); // Get the file extension
    const newFileName = `photo${index + 1}${ext}`;
    const oldPath = path.join(galleryFolder, file);
    const newPath = path.join(galleryFolder, newFileName);

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.error(`Error renaming file ${file} to ${newFileName}:`, err);
      } else {
        console.log(`Renamed ${file} to ${newFileName}`);
      }
    });
  });
});

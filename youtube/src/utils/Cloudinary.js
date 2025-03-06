import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadLocalImage = async (filePath) => {
  try {
    if (!filePath) return null;

    const uploadResult = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto", // Allows both images and videos
    });

    console.log("✅ Upload successful:", uploadResult);

    // ✅ Delete local file after successful upload
    await fs.promises.unlink(filePath);

    return uploadResult;
  } catch (error) {
    console.error("Error uploading file:", error.message);
    return null;
  }
};

export { uploadLocalImage };

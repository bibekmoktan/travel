import multer from "multer";
import fs from "fs";
import { fileTypeFromFile } from 'file-type';

const tempDir = "./public/temp";

// Create temp directory with proper permissions
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true, mode: 0o755 });
}
const storage = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const cleanName = file.originalname.replace(/[^a-z0-9.]/gi, '_');
    const ext = cleanName.split('.').pop() || '';
    cb(null, `${file.fieldname}-${uniqueSuffix}.${ext}`);
  }
});

const fileFilter = async (req, file, cb) => {
  try {
    const allowedTypes = [
      'image/jpeg', 'image/png', 'image/webp', 'image/gif',
      'video/mp4', 'video/webm', 'video/quicktime'
    ];
    
    // Basic MIME type check
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error('Invalid file type'), false);
    }

    // Advanced check using magic numbers
    const buffer = await fs.promises.readFile(file.path);
    const type = await fileTypeFromBuffer(buffer);
    
    if (!type || !allowedTypes.includes(type.mime)) {
      await fs.promises.unlink(file.path);
      return cb(new Error('File type mismatch'), false);
    }

    cb(null, true);
  } catch (err) {
    cb(err);
  }
};

export const upload = multer({
  storage,
  limits: {
    fileSize: 100 * 1024 * 1024, // 100MB
    files: 5 // Maximum number of files
  },
  fileFilter
});

// Middleware for cleaning up temporary files
export const cleanTempFiles = async (req, res, next) => {
  try {
    if (req.files) {
      await Promise.all(
        req.files.map(file => 
          fs.promises.unlink(file.path)
        )
      );
    }
    next();
  } catch (err) {
    next(err);
  }
};
import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import crypto from 'crypto';

const fileSize = 50 * 1024 * 1024;

export default {
    fileFilter: (
        request: Express.Request,
        file: Express.Multer.File,
        callback: FileFilterCallback,
    ) => {
        const acceptedTypes = file.mimetype.split('/');

        if (acceptedTypes[0] === 'image') {
            callback(null, true);
        } else {
            callback(null, false);
            callback(new Error('Only images formats allowed!'));
        }
    },
    limits: {
        fileSize,
    },
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename(request, file, callback) {
            const hash = crypto.randomBytes(6).toString('hex');

            const fileName = `${hash}-${file.originalname}`;

            callback(null, fileName);
        }
    })
}
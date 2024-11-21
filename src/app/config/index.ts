import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUND,
  cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
  cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
  base_api: process.env.BASE_API,

   // admin information
   admin_email: process.env.ADMIN_EMAIL,
   admin_password: process.env.ADMIN_PASSWORD,
   admin_profile_photo: process.env.ADMIN_PROFILE_PHOTO,
   admin_mobile_number: process.env.ADMIN_MOBILE_NUMBER,
};

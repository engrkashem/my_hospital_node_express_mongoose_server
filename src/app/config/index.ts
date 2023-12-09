import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  dbUrl: process.env.DB_URL,
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  saltRound: process.env.BCRYPT_SALT_ROUNDS,
  defaultPass: process.env.DEFAULT_PASS,
};

import dotenv from 'dotenv';

dotenv.config();

interface Env {
  NODE_ENV?: string;
  DB_URL?: string;
}

type Config = {
  [T in keyof Env]-?: T extends 'NODE_ENV'
    ? 'development' | 'production'
    : Env[T];
};

// Loading process.env as ENV interface

const getConfig = (): Env => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    DB_URL: process.env.DB_URL,
  };
};

// Throwing an Error if any field was undefined we don't
// want our app to run if it can't connect to DB and ensure
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type
// definition.
const getSanitizedConfig = (config: Env): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const sanitizedConfig = getConfig();

export const config = getSanitizedConfig(sanitizedConfig);

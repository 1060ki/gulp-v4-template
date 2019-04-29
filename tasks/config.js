const SOURCE = 'src';
const DESTINATION = 'public';

const env = process.env.NODE_ENV || "development"

export default {
  src: SOURCE,
  dist: DESTINATION,
  styles: {
    src: `${SOURCE}/scss/**/*.scss`,
    dest: `${DESTINATION}/css`
  },
  scripts: {
    src: `${SOURCE}/js/**/*.js`,
    srcRoot: `${SOURCE}/js`,
    dest: `${DESTINATION}/js`
  },
  ejs: {
    src: `${SOURCE}/ejs/**/*.ejs`,
    excluded_src: `!${SOURCE}/ejs/**/_*.ejs`,
    dest: `${DESTINATION}`
  },
  env: env,
  isDevelopment: env == "development",
  isProduction: env == "production"
};
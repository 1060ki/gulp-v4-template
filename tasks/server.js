import browserSync from 'browser-sync';
import config from './config';

const server = browserSync.create();

export const serve = done => {
  server.init({
    server: {
      baseDir: config.dist,
      index: 'index.html'
    },
    reloadOnRestart: true
  })

  done();
}

export const reload = done => {
  server.reload();
  done();
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import {Lb4AppApplication} from './application';
import {ApplicationConfig} from '@loopback/core';
import {WebSocketComponent} from './components/web-socket.component';
export {Lb4AppApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new Lb4AppApplication(options);
  await app.boot();

  app.component(WebSocketComponent);

  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}

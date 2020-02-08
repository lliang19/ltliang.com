import { SERVER_PORT } from './config';

import * as web from './web';

async function main() {
  // if (process.env.DEV === 'true') {
  //   await web.dev_start(SERVER_PORT);
  //   console.log(`Server started at http://localhost:${SERVER_PORT}`);
  // } else {
  await web.start(SERVER_PORT);
  // }
}

main().catch(error => console.error(error));

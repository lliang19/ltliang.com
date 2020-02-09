import SERVER_PORT from './config';

import start from './web';

async function main(): Promise<void> {
  await start(SERVER_PORT);

  // eslint-disable-next-line
  console.log(`Server started at http://localhost:${SERVER_PORT}`);
}

main().catch((error) => console.error(error)); // eslint-disable-line

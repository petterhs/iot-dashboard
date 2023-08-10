import { handleCors } from './cors';

export const handle = [
  (request, response) => handleCors(request, response, ['https://proxy.egauge.io', 'd.egauge.net']),
];
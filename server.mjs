import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, resolve, sep } from 'node:path';

const root = process.cwd();
const port = Number(process.env.PORT || 3000);
const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml',
  '.webp': 'image/webp', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.ico': 'image/x-icon',
};

createServer((request, response) => {
  if (!['GET', 'HEAD'].includes(request.method || 'GET')) {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end('Method not allowed');
    return;
  }
  let pathname;
  try { pathname = decodeURIComponent(new URL(request.url || '/', 'http://localhost').pathname); }
  catch { response.writeHead(400).end('Bad request'); return; }
  if (pathname.endsWith('/')) pathname += 'index.html';
  const safe = (candidate) => candidate === root || candidate.startsWith(`${root}${sep}`);
  let file = resolve(root, `.${pathname}`);
  if (!safe(file)) { response.writeHead(403).end('Forbidden'); return; }
  if (!existsSync(file)) file = resolve(root, 'public', `.${pathname}`);
  if (!safe(file) || !existsSync(file) || !statSync(file).isFile()) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Not found');
    return;
  }
  response.writeHead(200, {
    'Content-Type': types[extname(file).toLowerCase()] || 'application/octet-stream',
    'Cache-Control': 'no-cache',
    'X-Content-Type-Options': 'nosniff',
  });
  if (request.method === 'HEAD') response.end();
  else createReadStream(file).pipe(response);
}).listen(port, '0.0.0.0', () => console.log(`Shopfront Preview listening on 0.0.0.0:${port}`));

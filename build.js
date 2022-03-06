import { build } from "esbuild";
import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url))

const result = await build({
  bundle: true,
  entryPoints: ['index.js'],
  outfile: 'out.js',
  metafile: true,
})

fs.writeFileSync(
  path.join(__dirname, 'metafile.json'),
  JSON.stringify(result.metafile, null, 2),
);
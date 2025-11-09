const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

function cleanDir(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function minifyHTML(content) {
  return content
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/>\s+</g, '><')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function minifyCSS(content) {
  return content
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s*([{}:;,])\s*/g, '$1')
    .replace(/;}/g, '}')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function minifyJS(content) {
  return content
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|\s+)\/\/.*$/gm, '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .join('\n');
}

function writeFile(destination, content) {
  ensureDir(path.dirname(destination));
  fs.writeFileSync(destination, content);
}

function copyDir(src, dest, transformer) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  entries.forEach((entry) => {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath, transformer);
    } else {
      const encoding = transformer ? 'utf-8' : null;
      const data = fs.readFileSync(srcPath, encoding);
      const output = transformer ? transformer(data) : data;
      writeFile(destPath, output);
    }
  });
}

cleanDir(distDir);

const htmlFiles = ['index.html', 'projetos.html', 'cadastro.html'];
htmlFiles.forEach((file) => {
  const source = path.join(rootDir, file);
  const content = fs.readFileSync(source, 'utf-8');
  const minified = minifyHTML(content);
  writeFile(path.join(distDir, file), minified);
});

copyDir(path.join(rootDir, 'assets', 'css'), path.join(distDir, 'assets', 'css'), minifyCSS);
copyDir(path.join(rootDir, 'assets', 'js'), path.join(distDir, 'assets', 'js'), minifyJS);
copyDir(path.join(rootDir, 'assets', 'images'), path.join(distDir, 'assets', 'images'));

console.log('Build finalizado. Artefatos disponíveis na pasta dist/.');

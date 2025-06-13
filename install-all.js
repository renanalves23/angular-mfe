const { spawn } = require('child_process');
const path = require('path');

const projects = [
  { name: 'backend', path: './backend' },
  { name: 'mfe-sucesso', path: './mfe-sucesso' },
  { name: 'mfe-cadastro', path: './mfe-cadastro' },
  { name: 'mfe-shell', path: './mfe-shell' },
];

function installProject({ name, path: cwd }, onDone) {
  console.log(`📦 Installing ${name}...`);

  const proc = spawn('nvm', ['exec', '16.14.2', 'npm', 'install'], {
    cwd: path.resolve(cwd),
    shell: true,
    stdio: 'inherit'
  });

  proc.on('exit', code => {
    if (code === 0) {
      console.log(`✅ Installed ${name}`);
      onDone();
    } else {
      console.error(`❌ Failed to install ${name}`);
    }
  });
}

function installAll(projects, index = 0) {
  if (index >= projects.length) {
    console.log('✅ All projects installed.');
    return;
  }
  installProject(projects[index], () => installAll(projects, index + 1));
}

installAll(projects);

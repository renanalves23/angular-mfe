const { spawn } = require('child_process');
const path = require('path');

const projects = [
  { name: 'backend', path: './backend', port: 3000 },
  { name: 'mfe-sucesso', path: './mfe-sucesso', port: 4201, waitFor: /compiled successfully/i },
  { name: 'mfe-cadastro', path: './mfe-cadastro', port: 4202, waitFor: /compiled successfully/i },
  { name: 'mfe-shell', path: './mfe-shell', port: 4200, waitFor: /compiled successfully/i },
];

function runProject({ name, path: cwd, waitFor }, onDone) {
  console.log(`➡️ Starting ${name}...`);
  const proc = spawn('npm', ['run', 'start'], {
    cwd: path.resolve(cwd),
    shell: true,
    env: { ...process.env, FORCE_COLOR: 'true' }
  });

  proc.stdout.setEncoding('utf8');
  proc.stdout.on('data', data => {
    process.stdout.write(`[${name}] ${data}`);

    if (onDone) {
      if (name === 'backend' || (waitFor && waitFor.test(data))) {
        onDone();
        onDone = null;
      }
    }
  });

  proc.stderr.on('data', data => {
    process.stderr.write(`[${name}][err] ${data}`);
  });

  proc.on('exit', code => {
    console.log(`❌ ${name} exited with code ${code}`);
  });
}

function runAll(projects, index = 0) {
  if (index >= projects.length) {
    console.log('✅ All projects started.');
    return;
  }
  runProject(projects[index], () => runAll(projects, index + 1));
}

runAll(projects);



// console.log(process.env);

const { LANG, VSCODE_INJECTION, npm_lifecycle_script } = process.env;

// console.table({LANG, VSCODE_INJECTION, npm_lifecycle_script});

export const characters = ['flash', 'superman', 'green lantern', 'batman'];

const batman = characters[2];

const [, , , b] = characters;

// console.log(b);

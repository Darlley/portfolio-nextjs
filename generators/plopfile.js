module.exports = (plop) => {
  // create your generators here
  plop.setGenerator('component', {
    description: 'Create a new component into directory components/',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What's your component name?",
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: './templates/Index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: './templates/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.types.ts',
        templateFile: './templates/Props.ts.hbs',
      },
    ], // array of actions
  });
};

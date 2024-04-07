module.exports = function (plop) {
  plop.setGenerator('new', {
    description: 'Create new',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'new name?',
      },
      {
        type: 'list',
        name: 'dir',
        message: 'which dir?',
        choices: [
          { name: 'component', value: 'components' },
          { name: 'page', value: 'pages' },
        ],
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{dir}}/{{kebabCase name}}/{{kebabCase name}}.tsx',
        templateFile: 'templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: '{{dir}}/{{kebabCase name}}/index.ts',
        templateFile: 'templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: '{{dir}}/{{kebabCase name}}/{{kebabCase name}}-prop-types.ts',
        templateFile: 'templates/component-prop-types.ts.hbs',
      },
      {
        type: 'add',
        path: '{{dir}}/index.ts',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: '{{dir}}/index.ts',
        separator: '',
        template: `export { default as {{pascalCase name}} } from './{{kebabCase name}}';\n`,
        unique: true,
      },
    ],
  });
};

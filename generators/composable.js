module.exports = {
  description: 'Composable Generator',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Composable name',
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'src/composables/{{camelCase name}}.js',
      template: 'export function {{camelCase name}}() {}\n',
    },
    {
      type: 'modify',
      path: 'src/composables/index.js',
      pattern: /$/,
      template: "export { {{camelCase name}} } from './{{camelCase name}}';",
      transform: (v) => `${v
        .split('\n')
        .sort((a, b) => a.localeCompare(b))
        .join('\n')}\n`,
    },
  ],
}

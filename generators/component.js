const componentTemplate = `<template>
  <div :class="$style.root"></div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="stylus" module>
.root {

}
</style>
`

module.exports = {
  description: 'Component Generator',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Component type',
      choices: [
        { name: 'Component', value: 'components' },
        { name: 'View', value: 'views' },
      ],
    },
    {
      type: 'input',
      name: 'name',
      message: 'Component name',
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'src/{{type}}/{{pascalCase name}}.vue',
      template: componentTemplate,
    },
    {
      type: 'modify',
      path: 'src/{{type}}/index.js',
      pattern: /$/,
      template: "export { default as {{pascalCase name}} } from './{{pascalCase name}}.vue'",
      transform: (v) => `${v
        .split('\n')
        .sort((a, b) => a.localeCompare(b))
        .join('\n')}\n`,
    },
  ],
}

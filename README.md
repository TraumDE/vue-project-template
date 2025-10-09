# My vuejs 3 project template for development

## Difference from standart vue project template

- Added Scss

- YarnPnP package manager

- Added Postcss with plugins
  - pxtorem
    - Change pixels to rem in all declarations
    - Change pixels to rem in all media queries
  - autoprefixer
    - Default browser list

- Added new required vscode extensions
  - stylelint.vscode-stylelint
  - github.vscode-github-actions
  - arcanis.vscode-zipfs

- Added stylelint
  - custom rules
    - remove error from empty files
    - order
      - dollar variables
      - custom variables
      - include scss mixins
      - declarations
  - configs
    - standard scss config
    - standard vue config

- normalize css edited version of [aleksanderlamkov/css-normalize](https://github.com/aleksanderlamkov/css-normalize)

- breakpoints system made on scss mixins

- add deploy to gh-pages
  - deploy starts if commit contains [deploy]
  - link to [page](https://traumde.github.io/vue-project-template/)

- changed vite config
  - change base path of project (changes dynamically from directory name)

- add favicons with manifest for PWA
  - website favicons generated on [favicon.io](https://favicon.io/favicon-converter/)

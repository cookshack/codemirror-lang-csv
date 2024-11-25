import * as EslintConfig from '@cookshack/eslint-config'

export
default [ { ignores: [ 'TAGS.mjs', 'json.mjs' ] },
          { files: [ '*.js', '*.mjs', 'src/*.js' ],
            languageOptions: EslintConfig.languageOptions,
            plugins: EslintConfig.plugins,
            rules: EslintConfig.rules } ]

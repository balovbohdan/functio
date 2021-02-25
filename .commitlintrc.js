module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w+)\((.+)\): (.+)$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
  rules: {
    'type-empty': [0],
    'subject-empty': [0],
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 70],
    'footer-leading-blank': [2, 'always'],
    'footer-max-line-length': [2, 'always', 70],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-max-length': [2, 'always', 70],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-enum': [2, 'always', [
      'feat',
      'fix',
      'docs',
      'refactor',
      'test',
      'chore',
    ]],
  }
};

/* eslint-disable space-before-function-paren */
/* eslint-env node */
module.exports = (plop) => {
  plop.setHelper('if_eq', function ifEq(a, b, opts) {
    if (a === b) {
      // eslint-disable-next-line no-invalid-this
      return opts.fn(this);
    }
    // eslint-disable-next-line no-invalid-this
    return opts.inverse(this);
  });
  plop.setGenerator('new-day', {
    description: 'Creating a new day',
    prompts: [
      {
        type: 'input',
        name: 'dayNo',
        message: 'Day number',
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/day{{dayNo}}/file-read-handler.ts',
        templateFile: './plop-templates/file-read-handler.hbs',
      },
      {
        type: 'add',
        path: './src/day{{dayNo}}/file-read-handler.spec.ts',
        templateFile: './plop-templates/file-read-handler.spec.hbs',
      },
      {
        type: 'add',
        path: './src/day{{dayNo}}/index.ts',
        templateFile: './plop-templates/index.hbs',
      },
      {
        type: 'add',
        path: './src/day{{dayNo}}/input.txt',
        template: '',
      },
      {
        type: 'add',
        path: './src/day{{dayNo}}/part1.ts',
        templateFile: './plop-templates/part1.hbs',
      },
      {
        type: 'add',
        path: './src/day{{dayNo}}/part1.spec.ts',
        templateFile: './plop-templates/part1.spec.hbs',
      },
      {
        type: 'add',
        path: './src/day{{dayNo}}/part2.ts',
        templateFile: './plop-templates/part2.hbs',
      },
      {
        type: 'add',
        path: './src/day{{dayNo}}/part2.spec.ts',
        templateFile: './plop-templates/part2.spec.hbs',
      },
      {
        type: 'modify',
        path: './src/index.ts',
        pattern: /(?<=\/\/\sday\simports)/u, // The start of the file
        templateFile: './plop-templates/import-into-index.hbs',
      },
      {
        type: 'modify',
        path: './src/index.ts',
        pattern: /(?<=\/\/\schallenges\sby\sday)/u, // The start of the file
        templateFile: './plop-templates/add-to-challenges.hbs',
      },
    ],
  });
};

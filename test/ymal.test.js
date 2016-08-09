const test = require('ava').default;
const read = require('../lib/read');
const clean = require('../lib/clean');
const setValues = require('../lib/setValues');

test('#read Should read YAMl file from given path', async t => {
  const yaml = await read('sample.yaml');

  t.is(yaml.job, 'Developer');
});

test('#clean should remove classes by pattern', async t => {
  let doc = await read('sample.yaml');
  const result = clean(doc, 'tst_', []);

  t.false(('tst_asd' in result.classes));
});

test('#setValues should set value by given key', async t => {
  let doc = await read('sample.yaml');
  const properties = [{prop: 'classes.languages::list.perl', value: 'Silver'}];
  const result = setValues(doc, properties);

  t.is(result.classes['languages::list'].perl, properties[0].value);
});

test('#clean should remove given additional packages', async t => {
  let doc = await read('sample.yaml');
  const result = clean(doc, false, ['foods'], '');

  t.false(('foods' in result.classes));
});

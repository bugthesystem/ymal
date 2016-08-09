'use strict';

const yaml = require('js-yaml');
const Promise = require('bluebird');
const fs = require('fs');
const writeFile = Promise.promisify(fs.writeFile);

/**
 * @param {Object} doc - YAML document to persist
 * @param {String} path - Path to persist document
 * @return {Promise} - Returns promise
 * @description Persist given contents to given path
 */
const write = (doc, path) => {
  const contents = yaml.dump(doc);
  return writeFile(path, contents, 'utf8');
};

/*
 * Exports
 */
module.exports = write;

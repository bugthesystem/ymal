'use strict';

const yaml = require('js-yaml');
const Promise = require('bluebird');
const fs = require('fs');
const readFile = Promise.promisify(fs.readFile);

/**
 * @param {String} path - Path to read file from
 * @return {Promise} - Returns Promise
 * @description Read yaml file from given path
 */
const read = path => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8').then(contents => {
      try {
        const doc = yaml.safeLoad(contents);
        resolve(doc);
      } catch (e) {
        reject(e);
      }
    });
  });
};

/*
 * Exports
 */
module.exports = read;

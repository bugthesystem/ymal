'use strict';

const has = require('lodash.has');
const set = require('lodash.set');

/**
 * @param {Object} doc - YAML document to process
 * @param {Array} properties - Properties to set values
 * @return {Object} - Returns modified YAML document
 * @description Set config value by key (it supports nested objects too)
 */
const setValues = (doc, properties) => {
  for (let item of properties) {
    if (has(doc, item.prop)) {
      set(doc, item.prop, item.value);
    }
  }
  return doc;
};

/*
 * Exports
 */
module.exports = setValues;

'use strict';

/**
 * @param {Object} doc - YAML document to process
 * @param {Boolean} patternToRemoveClasses - Pattern to remove classes
 * @param {Array} classesToRemove - Remove given additional classes
 * @return {Object} - Returns modified YAML document
 * @description Remove classes by pattern and given additional classes
 */
const clean = (doc, patternToRemoveClasses, classesToRemove) => {
  if (patternToRemoveClasses) {
    for (const key in doc.classes) {
      // TODO: regex match
      if (key.match(patternToRemoveClasses)) {
        delete doc.classes[key];
      }
    }
  }
  if (classesToRemove.length > 0) {
    classesToRemove.map(c => delete doc.classes[c]);
  }
  return doc;
};

/*
 * Exports
 */
module.exports = clean;

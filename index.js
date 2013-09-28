
/**
 * dependencies
 */

var type = require('type');

/**
 * Export `eql`
 */

exports = module.exports = eql;

/**
 * Compare `a` to `b`.
 *
 * @param {Mixed} a
 * @param {Mixed} b
 * @return {Boolean}
 * @api public
 */

function eql(a, b){
  var compare = type(a);

  // sanity check
  if (compare != type(b)) return false;
  if (a === b) return true;

  // compare
  return (compare = eql[compare])
    ? compare(a, b)
    : a == b;
}

/**
 * Compare regexps `a`, `b`.
 *
 * @param {RegExp} a
 * @param {RegExp} b
 * @return {Boolean}
 * @api public
 */

eql.regexp = function(a, b){
  return a.ignoreCase == b.ignoreCase
    && a.multiline == b.multiline
    && a.lastIndex == b.lastIndex
    && a.global == b.global
    && a.source == b.source;
};

/**
 * Compare objects `a`, `b`.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Boolean}
 * @api public
 */

eql.object = function(a, b){
  var keys = {};

  // proto
  if (a.prototype != b.prototype) return false;

  // keys
  keys.a = Object.keys(a).sort();
  keys.b = Object.keys(b).sort();

  // length
  if (keys.a.length != keys.b.length) return false;

  // keys
  if (keys.a.toString() != keys.b.toString()) return false;

  // walk
  for (var i = 0; i < keys.a.length; ++i) {
    var key = keys.a[i];
    if (!eql(a[key], b[key])) return false;
  }

  // eql
  return true;
};

/**
 * Compare arrays `a`, `b`.
 *
 * @param {Array} a
 * @param {Array} b
 * @return {Boolean}
 * @api public
 */

eql.array = function(a, b){
  if (a.length != b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (!eql(a[i], b[i])) return false;
  }
  return true;
};

/**
 * Compare dates `a`, `b`.
 *
 * @param {Date} a
 * @param {Date} b
 * @return {Boolean}
 * @api public
 */

eql.date = function(a, b){
  return +a == +b;
};

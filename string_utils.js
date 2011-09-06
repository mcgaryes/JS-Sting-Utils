/**
 * StringUtils
 * A simple group of utility functions for common string manipulations.
 *
 * @version 1.0.0
 * @author emcgary
 */

/**
 * Cheap way of making the class appear and work like its static
 */
var StringUtils = new _StringUtils();

/**
 * Constructor
 */
function _StringUtils() {}

/**
 * Setting of constructor
 */
_StringUtils.prototype.constructor = _StringUtils;

/**
 * Removes whitespace from passed string
 * @param String str
 * @return String
 */
_StringUtils.prototype.trim = function(str) {
    if (str == null) {
        return '';
    }
    return str.replace(/\s+/g, "");
}

/**
 * Removes whitespace from passed string to the right
 * @param String str
 * @return String
 */
_StringUtils.prototype.trimRight = function(str) {
    return str.replace(/\s+$/, '');
}

/**
 * Truncates the string and adds the passed suffix to the end
 * @param String str
 * @param Number length
 * @param String suffix
 * @return String
 */
_StringUtils.prototype.truncate = function(str, length, suffix) {
    length -= suffix.length;
    var trunc = str;
    if (trunc.length > length) {
        trunc = trunc.substr(0, length);
        if (/[^\s]/.test(str.charAt(length))) {
            trunc = StringUtils.trimRight(trunc.replace(/\w+$|\s+$/, ''));
        }
        trunc += suffix;
    }
    return trunc;
}

/**
 * Returns the number of words in a string.
 * @param String str
 * @return Number
 */
_StringUtils.prototype.wordCount = function(str) {
    return str.match(/\b\w+\b/g).length;
}

/**
 * Finds passed item and replaces found text with passed replacement
 * @param String str
 * @param String searchFor
 * @param String replaceWith
 * @return String
 */
_StringUtils.prototype.swap = function(str, searchFor, replaceWith) {
    var re = new RegExp(searchFor + "+", "g");
    return str.replace(re, replaceWith);
}

/**
 * Remove's all < and > based tags from a string
 * @param p_string The source string.
 * @returns String
 */
_StringUtils.prototype.stripTags = function(str) {
    return str.replace(/<\/?[^>]+>/igm, '');
}

/**
*	Determines whether the specified string contains any instances of subStr.
*	@param str The string.
*	@param subStr The character or sub-string we are looking for.
*	@returns Boolean
*/
_StringUtils.prototype.contains = function(str, subStr) {
    return str.indexOf(subStr) != -1;
}

/**
 * Converts a string to a boolean
 * @param String str
 * @return Boolean
 */
_StringUtils.prototype.toBoolean = function(str) {
    switch (str) {
    case "true":
        return true;
        break;
    case "false":
        return false;
        break;
    default:
        return false;
    }
}

/**
 * returns class name to string
 * @return String The name of the class
 */
_StringUtils.prototype.toString = function() {
    return "StringUtils";
}
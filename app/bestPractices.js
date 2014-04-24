

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
  return {
    globals : function() {

    },

    functions : function(flag) {
      if (flag) {
        var getValue = function() { return 'a'; };
      } else {
        var getValue = function() { return 'b'; };
      }

      return getValue();
    },

    parseInt : function(num) {
      return parseFloat(num);
    },

    identity : function(val1, val2) {
      if (val1 === val2){
        return true;
      }else{
        return false;
      };
    }
  };
});

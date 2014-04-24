if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var sum = 0;
        for (var i = 0; i <= arr.length; i++){
            sum += i;
        };
        return sum;
    },

    remove : function(arr, item) {
        for(var i =0; i <= arr.length; i++){
            if (arr[i] == item){
                arr.splice(i,1);
            };
        };
        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        for(var i = 0; i <= arr.length; i++){
            if (arr[i] == item){
                arr.splice(i,item);
            };
        };
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        var arr = arr1.concat(arr2);
        return arr;
    },

    insert : function(arr, item, index) {
        arr.splice(index,0,item);
        return arr;
    },

    count : function(arr, item) {
        arr.sort();
        var numTimes = 0;
        for(var i =0; i <= arr.length; i++){
            if(arr[i] == arr[i+1]){
                numTimes+=1;
            };
        };
        return numTimes;
    },

    duplicates : function(arr) {
        arr.sort();
        arr2 = [];
        arr3 =[];
        for(var i =0; i < arr.length; i++){
            if(arr[i] == arr[i+1]){
                if(arr[i] != arr2[i]){
                    arr2.push(arr[i]);
                };
            };
        };
        for(var i =0; i < arr2.length; i++){
            if(arr2[i] != arr2[i+1]){
                if(arr2[i] != arr3[i]){
                    arr3.push(arr2[i]);
                };
            };
        };
        return arr3;
    },

    square : function(arr) {
        arr2 = [];
        for(var i =0; i <arr.length; i++){
            arr2.push(arr[i] * arr[i]);
        };
        return arr2;
    },

    findAllOccurrences : function(arr, target) {
        arr2 = [];
        for(var i=0; i <=arr.length; i++){
            if(arr[i] == target){
                arr2.push(i);
            };
        };
        return arr2;
    }
  };
});

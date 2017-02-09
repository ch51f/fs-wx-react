"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var quickSort = function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	var pivotIndex = Math.floor(arr.length / 2);
	var pivot = arr.splice(pivotIndex, 1)[0];
	var left = [];
	var right = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}

	return quickSort(left).concat([pivot], quickSort(right));
};

var quickSortObj = function quickSortObj(arr, key) {
	if (arr.length <= 1) {
		return arr;
	}
	var pivotIndex = Math.floor(arr.length / 2);
	var pivot = arr.splice(pivotIndex, 1)[0];
	var left = [];
	var right = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i][key] > pivot[key]) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}

	return quickSortObj(left, key).concat([pivot], quickSortObj(right, key));
};

exports.quickSort = quickSort;
exports.quickSortObj = quickSortObj;
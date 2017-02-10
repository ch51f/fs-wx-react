"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var insertSort = function insertSort() {
	var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	if (arr.length <= 1) return arr;
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] < arr[i - 1]) {
			var guard = arr[i];
			var j = i - 1;
			arr[i] = arr[j];
			while (j >= 0 && guard < arr[j]) {
				arr[j + 1] = arr[j];
				j--;
			}
			arr[j + 1] = guard;
		}
	}
	if (reverse) arr.reverse();
	return arr;
};

var insertSortObj = function insertSortObj(arr, key) {
	var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	if (arr.length <= 1) return arr;
	for (var i = 1; i < arr.length; i++) {
		if (arr[i][key] < arr[i - 1][key]) {
			var guard = arr[i];
			var j = i - 1;
			arr[i] = arr[j];
			while (j >= 0 && guard[key] < arr[j][key]) {
				arr[j + 1] = arr[j];
				j--;
			}
			arr[j + 1] = guard;
		}
	}
	if (reverse) arr.reverse();
	return arr;
};

exports.insertSort = insertSort;
exports.insertSortObj = insertSortObj;
//# sourceMappingURL=insertSort.js.map
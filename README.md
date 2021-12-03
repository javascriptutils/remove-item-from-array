# Remove an Item From an Array

A utility to remove items that match a specified value from an array. Works recursively to remove items from nested arrays.

## Install

```shell
npm i remove-item-from-array --save
```

## Usage

### `removeArrayItem(arr, item)`

The module exports a function; the first argument is the current array, the second is the value of items that should be removed.

### Examples

```javascript
import removeArrayItem from "remove-item-from-array";

const arr = removeArrayItem(["cat", "dog", ["cat", "goose"]], "cat");

// arr will be ['dog', ['goose']]
```

You can also pass additional values as arguments to remove multiple items in one statement:

```javascript
const arr = removeArrayItem(["cat", "dog", ["goose"]], "cat", "dog");

// arr will be [['goose']]
```

## Links & Resources

[remove-item-from-array on javascriptutils.com](https://www.javascriptutils.com)
[remove-item-from-array on GitHub](https://github.com/javascriptutils/remove-item-from-array)
[remove-item-from-array on NPM](https://www.npmjs.com/package/remove-item-from-array)
[remove-item-from-array on Aliyun](https://developer.aliyun.com/mirror/npm/package/remove-item-from-array)
[remove-item-from-array on TAONPM](https://npmmirror.com/package/remove-item-from-array)
[remove-item-from-array on jsDlivr](https://www.jsdelivr.com/package/npm/remove-item-from-array)
[remove-item-from-array on Snyk](https://snyk.io/advisor/npm-package/remove-item-from-array)
[remove-item-from-array on Libraries.io](https://libraries.io/npm/remove-item-from-array)
[remove-item-from-array on RunKit](https://npm.runkit.com/remove-item-from-array)
[remove-item-from-array on npm trends](https://www.npmtrends.com/remove-item-from-array)
[remove-item-from-array on Package Phobia](https://packagephobia.com/result?p=remove-item-from-array)
[remove-item-from-array on Skypack](https://www.skypack.dev/view/remove-item-from-array)
[remove-item-from-array on CNPM](https://cnpmjs.org/package/remove-item-from-array)
[remove-item-from-array on Openbase](https://openbase.com/js/remove-item-from-array)
[remove-item-from-array on githubmemory](https://githubmemory.com/repo/javascriptutils/remove-item-from-array)
[remove-item-from-array on npm.io](https://npm.io/package/remove-item-from-array)
[remove-item-from-array on Pkg Stats](https://www.pkgstats.com/pkg:remove-item-from-array)

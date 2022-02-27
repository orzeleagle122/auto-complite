1. Please write a function that shows the usage of closures

```
const closures=()=>{
    const city="Rzeszow";
    const displayCity=()=>{
    alert(city);
    }
return displayCity;
}
closures();
```

2. Please write a function that returns a sum of array items // example input [9, 1, 22, 0, 2]
   // example output 34

```
const sumArray = (arr) => arr.reduce((prev, curr) => prev + curr, 0);
```

// 3. Please write a recursive function that flattens a list of items // example input [[2, [4, [44,5,6]]], [4,5,6]
, [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

```
const flattArray = (arr1) => arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattArray(val)) : acc.concat(val), []);
```

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order
doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

```
const findCommonElements = (arr1, arr2) => arr1.filter(item => {
    let index = arr2.indexOf(item);
    return index !== -1;
});
```

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements,
order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

```
const findDifferentElements = (arr1, arr2) => {
    const uniqueArr1 = arr1.filter(item => arr2.indexOf(item) == -1);
    const uniqueArr2 = arr2.filter(item => arr1.indexOf(item) == -1);
    return [...new Set(uniqueArr1.concat(uniqueArr2))];
}
```

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays
at the same indexes. Excessive items should be dropped. // example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

```
const tupesArray = (arr1, arr2) => {
    if (arr1.length <= arr2.length) {
        return arr1.map((item, index) => {
            return [item, arr2[index]];
        })
    } else {
        return arr2.map((item, index) => {
            return [arr1[index], item];
        })
    }
}
```

// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path.
If value at path doesn't exists, return undefined. // example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } }
} } // example output '23'

```
const pathToObj = (path, obj) => {
    if (path.length === 0) return obj;
    return pathToObj(path.slice(1, path.length), obj[path[0]]);
}
```

// 8. Please write compare function which compares 2 objects for equality. // example input { a: 'b', c: 'd' }, { c: '
d', a: 'b' } /// output true // example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' } /// output false

```
const compareObjects = (obj1, obj2) => {
    let obj1Keys = Object.keys(obj1).sort();
    let obj2Keys = Object.keys(obj2).sort();
    if (obj1Keys.length !== obj2Keys.length) return false;
    for (let i = 0; i < obj1Keys.length; i++) {
        if (obj1Keys[i] !== obj2Keys[i] || obj1[obj1Keys[i]] !== obj2[obj2Keys[i]]) return false;
    }
    return true;
}
```

// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from
the list // example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' } // example output { id: '22' }

```
const foo = (keys, obj) => {
    keys.forEach(item => {
        if (obj.hasOwnProperty(item)) delete obj[item];
    });
    return obj;
}
```

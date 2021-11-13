function mostFrequentItem(arr) {
    arr.sort();
    if (arr.length == 0)
        return -1;
    if (arr.length == 1)
        return arr[0];
    let flag = 1, mostFrequentItem , max = 0;
    for (let i = 1; i < arr.length; i++){
        if (arr[i] !== arr[i - 1]) {
            flag = 1;
        }
        else {
            flag++;
        }
        if (flag > max) {
            max = flag;
            mostFrequentItem = arr[i];
        }
    }
    return mostFrequentItem;
}

let arr = [1,4,6,7,6,3,8,6,9,10,6,3,6,];
console.log(mostFrequentItem(arr));
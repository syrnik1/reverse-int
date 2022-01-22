module.exports = function reverse (n) {
    let newArr = new Array();
    let result = 0;
    const str = String(Math.abs(n));                    // перевод числа в строку
    const oldArr = Array.from(String(str), Number);          // перевод строки в числовой массив
    
    for (let i = 0; i < oldArr.length; i++) {
        newArr[i] = oldArr[oldArr.length - 1 - i];
    }

    for (let i = 0; i < newArr.length; i++) {
        result += newArr[i] * 10 ** (newArr.length - 1 - i);
    }


    return result;
}

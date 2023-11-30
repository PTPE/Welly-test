// 1. JavaScript: 字串反轉
function reverseString(str) {
  let result = [];
  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }
  return result.join("");
}

console.log(reverseString("Hello")); // 預期輸出: "olleH”

//2. JavaScript: 陣列過濾
function filterNumbersGreaterThanFive(numbers) {
  return numbers.filter((el) => el > 5);
}

const numbers = [2, 8, 4, 10, 1, 7];
console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]

//3. JavaScript: 重構
//說明
//將空字串、null、undefined、數字以filter移除，filter的寫法相較兩個if statement簡潔。
//另外，以join的方式將直接將有效的firstName和lastName串連在一起。

function formatName(firstName, lastName) {
  const validName = [firstName, lastName]
    .filter(Boolean) //移除空字串、null、undefined
    .filter((name) => typeof name !== "number"); //移除數字
  const formattedName = validName.join(""); //連接firstName和lastName

  return formattedName;
}

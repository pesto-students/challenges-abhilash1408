function reverseString(str) {
  const splitString = str.split('');
  const reversedStringArray = splitString.reverse();
  const reversedString = reversedStringArray.join('');
  return reversedString;
}

function addStringIntegers(str1, str2) {
  if (str1.length === 0) {
    return str2;
  } if (str2.length === 0) {
    return str1;
  }
  let string1 = str1;
  let string2 = str2;
  // taking the longest integer as string1
  if (string2.length > string1.length) {
    const temp = string1;
    string1 = str2;
    string2 = temp;
  }
  // define carry as the carried over integer value on sum of digits
  let carry = 0;
  let resultString = '';
  for (let i = 0; i < string2.length; i += 1) {
    const digit1 = parseInt(string1[i], 10);
    const digit2 = parseInt(string2[i], 10);
    const sum = digit1 + digit2 + carry;
    const sumString = sum.toString();
    if (sumString.length > 1) {
      carry = parseInt(sumString[0], 10);
      resultString += sumString[1];
    } else {
      carry = 0;
      resultString += sumString[0];
    }
  }
  // joining the left over digits in string1 along with carry
  for (let j = string2.length; j < string1.length; j += 1) {
    const digit1 = parseInt(string1[j], 10);
    const sum = digit1 + carry;
    const sumString = sum.toString();
    if (sumString.length > 1) {
      carry = parseInt(sumString[0], 10);
      resultString += sumString[1];
    } else {
      carry = 0;
      resultString += sumString[0];
    }
  }
  // checking for leftover carry
  if (carry !== 0) {
    resultString += carry.toString();
  }
  return resultString;
}

function addBigIntegers(intString) {
  const integerArray = intString.split('\n');
  // total sum is always in reverse
  let totalSum = '';
  for (const integerString of integerArray) {
    // string integers are reversed and then summed
    totalSum = addStringIntegers(totalSum, reverseString(integerString));
  }
  return reverseString(totalSum);
}

export { addBigIntegers };

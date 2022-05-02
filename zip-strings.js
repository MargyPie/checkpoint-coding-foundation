function zipStrings(strA, strB) {
  //The zipStrings function should return one string where the characters of both parameters
  //are merged using the zip procedure (Reißverschlussverfahren)

  //Convert Str to Arr
  let arrA = strA.split("");
  let arrB = strB.split("");

  let zipArr = [];

  if (arrA.length >= arrB.length) {
    for (let i = 0; i < arrA.length; i++) {
      if (i < arrB.length && i < arrA.length) {
        zipArr.push(arrA[i] + arrB[i]);
      } else if (i >= arrB.length) {
        zipArr.push(arrA[i]);
      } else {
        zipArr.push(arrB[i]);
      }
    }
  }
  // If strB is longer than strA return strB
  else {
    for (let i = 0; i < arrB.length; i++) {
      zipArr.push(arrB[i]);
    }
  }

  //Convert back to string
  let zip = zipArr.join("");

  return zip;
}

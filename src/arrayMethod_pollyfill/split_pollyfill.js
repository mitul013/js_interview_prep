function mySplit(string, splitChar) {
  if (splitChar == "") return Array.from(string);
  let result = [];
  const helper = (str) => {
    let fidx = str.indexOf(splitChar);
    if (fidx >= 0) {
      result.push(str.substring(0, fidx));
      helper(str.substring(fidx + splitChar.length));
    } else {
      result.push(str);
    }
  };
  helper(string);
  return result;
}

console.log(mySplit("the the the the", "the"));

function filterApiData(apiData, mandatoryKeys) {
  let result = [];

  for (let i = 0; i < apiData.length; i++) {
    const toBeCheckedData = apiData[i];
    const apiDataKeys = Object.keys(toBeCheckedData);
    let containsAllKeys = false;

    for (let j = 0; j < mandatoryKeys.length; j++) {
      if (apiDataKeys.includes(mandatoryKeys[j])) {
        containsAllKeys = true;
      } else {
        containsAllKeys = false;
        break;
      }
    }

    if (containsAllKeys) {
      result.push(toBeCheckedData);
    }
  }
  return result;
}

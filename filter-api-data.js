function filterApiData(apiData, mandatoryKeys) {
  //The first parameter apiData will be an array that includes objects
  //The objects can have different keys
  const apiData = [
    {
      id: 1,
      description: "",
      price: 0,
      title: "",
    },
    {
      price: 0,
      tags: [],
    },
    {
      id: 3,
      price: 0,
      title: "",
    },
  ];

  //The second parameter mandatoryKeys is a array that includes all keys
  //that an object (from the apiData array) should have to pass the filter test
  const mandatoryKeys = [filterApiData(apiData, ["id"])];

  //Return an array with only the objects that include all keys from the mandatoryKeys array
  
}

/*
Filter Api Data Examples
const data = [{ id: 1, price: 100 }, { price: 50 }];

const filteredData = filterApiData(data, ["id"]);

console.log(filteredData); // [{id: 1, price: 0}]
const data = [
  { id: 1, price: 100 },
  { id: 2, title: "" },
  { id: 3, price: 50 },
];

const filteredData = filterApiData(data, ["id", "price"]);

console.log(filteredData); // [{ id: 1, price: 100 }, { id:3, price: 50}]*/
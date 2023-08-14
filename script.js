const parse = (data) => JSON.parse(data);
const resultArr = [];
let countOfReadFile = 0;

function requesrData(method, URL, cb, cb2) {
  const xml = new XMLHttpRequest();
  xml.open(method, URL);
  xml.send();

  xml.addEventListener('readystatechange', () => {
    if (xml.readyState === 4 && xml.status < 400) {
      const response = parse(xml.response);
      cb(response);
      cb2();
    }
  });
}

function addElementsInArr(response) {
  response.children.forEach(function (el) {
    resultArr.push(el);
  });
}

function outPutElements(response) {
  countOfReadFile++;
  if (countOfReadFile === 2) {
    console.log(resultArr);
  }
}

requesrData("GET", 'files/data.json', addElementsInArr, outPutElements);
requesrData("GET", 'files/data2.json', addElementsInArr, outPutElements);


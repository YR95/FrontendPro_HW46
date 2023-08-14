const parse = (data) => JSON.parse(data);
const resultArr = [];
let countOfReadFile = 0;

function requesrData(method, URL, cb) {
  const xml = new XMLHttpRequest();
  xml.open(method, URL);
  xml.send();

  xml.addEventListener('readystatechange', () => {
    if (xml.readyState === 4 && xml.status < 400) {
      const response = parse(xml.response);
      cb(response);
      countOfReadFile++;
      if (countOfReadFile === 2) {
        console.log(resultArr);
      }
    }
  });
}

function renderElements(response) {
  response.children.forEach(function (el) {
    resultArr.push(el);
  });
}

requesrData("GET", 'files/data.json', renderElements);
requesrData("GET", 'files/data2.json', renderElements);


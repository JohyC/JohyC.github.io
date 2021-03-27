// @ts-nocheck
function ajax(method, url, params) {
  let ajax = new XMLHttpRequest();
  params = params === false ? false : true;
  ajax.open(method, url, params);
  ajax.send();
  return ajax;
}
/**
 * 异步获取data
let getdata = async function (method, url, params) {
  let data = await ajax(method, url, params);
  return JSON.parse(data.response);
};
let data = getdata(
  "get",
  "https://raw.githubusercontent.com/xieranmaya/china-city-area-zip-data/master/min/china-city-area-zip.min.json"
);
 */
let data = ajax(
  "get",
  "https://raw.githubusercontent.com/xieranmaya/china-city-area-zip-data/master/min/china-city-area-zip.min.json",
  false
);
data = data.response;
// @ts-ignore
data = JSON.parse(data);

var provinces = document.getElementById("province"),
  citys = document.getElementById("city"),
  countys = document.getElementById("county");

for (let province of data) {
  let option = document.createElement("option");
  option.text = province.name;
  provinces.appendChild(option);
}
var midValue
function provChange() {
  let selectedProv = provinces.selectedIndex - 1;
  midValue = selectedProv;
  for (let city of data[selectedProv].child) {
    let option = document.createElement("option");
    option.text = city.name;
    citys.appendChild(option);
  }
}
function cityChange(){
  let selectedProv = midValue;
  let selectedCity = citys.selectedIndex - 1;
  for(let county of data[selectedProv].child[selectedCity].child){
    let option = document.createElement("option");
    option.text = county.name;
    countys.appendChild(option);
  }
}

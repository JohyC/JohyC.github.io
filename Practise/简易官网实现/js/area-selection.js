/**
 * 简易Ajax封装
 * @param {String} method http请求方式
 * @param {String} url 目标链接
 * @param {Boolean} params 异步或同步
 * @returns XMLHttpRequest
 */
function ajax(method, url, params) {
  let ajax = new XMLHttpRequest();
  params = params === false ? false : true;
  ajax.open(method, url, params);
  ajax.send();
  return ajax;
};

var provinces = document.getElementById("province"),
  citys = document.getElementById("city"),
  countys = document.getElementById("county");

for (let province of data) {
  let option = document.createElement("option");
  option.text = province.name;
  provinces.appendChild(option);
};

var midValue;
function provChange() {
  let selectedProv = provinces.selectedIndex - 1;
  midValue = selectedProv;
  for (let city of data[selectedProv].child) {
    let option = document.createElement("option");
    option.text = city.name;
    citys.appendChild(option);
  }
};

function cityChange() {
  let selectedProv = midValue;
  let selectedCity = citys.selectedIndex - 1;
  for (let county of data[selectedProv].child[selectedCity].child) {
    let option = document.createElement("option");
    option.text = county.name;
    countys.appendChild(option);
  }
}

/*
ゴミ一覧のページ
*/

const outputElement = document.getElementById('output_csv');

function getCsvData(dataPath) {
 const request = new XMLHttpRequest();
 request.addEventListener('load', (event) => {
  const response = event.target.responseText;
  convertArray(response);
 });
 request.open('GET', dataPath, true);
 request.send();
}
function convertArray(data) {
 const dataArray = [];
 const dataString = data.split('\n');
 for (let i = 0; i < dataString.length; i++) {
  dataArray[i] = dataString[i].split(',');
 }
 let insertElement = '';
//  dataArray.forEach((element-1) => {
/*
データを最後まで表示させる
最後にundefindが出てこないfor文
*/
for(var i = 1;i < dataArray.length-1;i++){
  insertElement += '<tr>';
// var tttta = dataArray[i][3];

//    insertElement += `<td>`+element[3]+`</td>`;
//    insertElement += `<td>`+element[1]+`</td>`;
//    insertElement += `<td>`+element[0]+`</td>`;
if(dataArray[i][3] == dataArray[i-1][3]){
  insertElement += '<td>' + ' ' + '</td>';
}else{
  insertElement += `<td><p><font size = "6">`+dataArray[i][3]+`</font></p></td>`;  //ふりがな
}

insertElement += `<td>`+dataArray[i][1]+`</td>`;  //ゴミ名
insertElement += `<td>`+dataArray[i][0]+`</td>`;  //分別
insertElement+='<br/><hr>'
insertElement += '</tr>';
 };
 outputElement.innerHTML = insertElement;
}
getCsvData('data/target.csv');


//トップに戻る
$(function(){
  var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();

  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});

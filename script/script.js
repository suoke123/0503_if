/* 바닐라 JS 코드 */
/* 1. HTML의 input에 입력된 value값 가져오기 */

/* 입력양식의 값을 JS로 가져올때의 코드 */
//function fnCheck(){
//    var data1 = parseInt(document.getElementById("data1").value);
//    var data2 = parseInt(document.getElementById("data2").value);
//    var returnMsg;
//
//    /* 선택 제어문 */
//    if(data1>data2) {     // 자동 자료형변환
//        returnMsg = "결과 : " + data1 + "이(가)" + data2 +  "보다 큽니다.";
//    } else {
//        returnMsg = "결과 : " + data2 + "이(가)" + data1 +  "보다 큽니다.";
//    }
//    document.getElementById("res").innerText = returnMsg;
//}
/*
참고. 요소의 내용을 JS로 가져올때 코드
document.getElementById("res").innerText;
*/



/* jQuery 코드 */
/* 입력양식의 값을 jQuery로 가져올때의 코드 */
$(function(){

    $("button").click(function(){      // 익명함수(annonymous function, 어나니머스)
        var data1 = parseInt($("#data1").val());
        var data2 = parseInt($("#data2").val());
        var returnMsg;

        if (data1 < data2) {
            returnMsg = "결과 : " + data2 + "이" + data1 + "보다 큽니다";
        } else if(data1 > data2) {
            returnMsg = "결과 : " + data1 + "이" + data2 + "보다 큽니다";
        } else {
            returnMsg = "결과 : 같은 값 입니다.";
        }

        $("#res").text(returnMsg);
    });

});

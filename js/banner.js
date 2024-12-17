//slide되는 구문이다.
$('#banner ul li').hide();
$('#banner ul li:first-child').show();


setInterval(function(){
    $('#banner ul li:first-child').fadeOut(1000).next().fadeIn(1000).end().appendTo('#banner ul') 
},3000);
// end() 메서드는 선택된 요소의 이전 요소를 선택하는 메서드이다.
// end는 반복적으로 사용할 때 사용하는 명령어이다.
// appendTo() 는 선택된 요소를 소괄호 안에 넣어서 이전 요소를 루프시킨다.


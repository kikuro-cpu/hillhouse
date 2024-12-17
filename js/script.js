$(function(){
    // tab을 클릭하면,
    $('.tab').click(function(){
        // tab의 부모인 li에 클래스 on을 추가하고 (li)의 다른 형제요소들은 클래스 on을 지워라.
        $(this).parent().addClass('on').siblings().removeClass('on');
    });
});



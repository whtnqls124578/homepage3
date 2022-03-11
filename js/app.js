
$(document).ready(function(){
    menu()
    init()
    slide()
    tab()
    popup()
})
function menu(){
    var idx=0
    $(".gnb>li").hover(
        function(){
            idx=$(this).index()
            //console.log(idx)
            $(".gnb>li").eq(idx).find(".lnb").stop().slideDown()
            //gnb하위 li중에서 idx번째 내부에서 lnb찾는다.
            //find는 지정한 요소의 하위영역에서 뭘 찾을때...사용
        },
        function(){
            $(".lnb").stop().slideUp()
        }
    )
}

function init(){//initialize
    for(var i=0; i<=2; i++){
        $("#slide_contents>img").eq(i).hide()
    }
    $("#slide_contents>img").eq(0).show()
}
function slide(){
    setInterval(slide_fade,3000)
}
var slideIndex=0
function slide_fade(){
    //fadeIn,fadeOut...
    //fadeOut부터...그다음 fadeIn
    $("#slide_contents>img").eq(slideIndex).fadeOut(1000)

    if(slideIndex==2){
        slideIndex=0
        $("#slide_contents>img").eq(0).fadeIn(1000)
    }else{//0,1
        $("#slide_contents>img").eq(slideIndex+1).fadeIn(1000)
        slideIndex++
    }
    //초기 세팅:이미지 다 숨기고, 0번째만 보여진 상태
    //3초뒤에
    //0번째 스르륵 사라지고, 1번째 스르륵 나오고
    //3초뒤에
    //1번째 스르륵 사라지고, 2번째 스르륵 나오고
    //3초뒤에
    //2번째 스르륵 사라지고, 0번째 스르륵 나오고
    //3초뒤에
    //0번째 스르륵 사라지고, 1번째 스르륵 나오고
    //

}
function tab(){
    var idx
    $(".tab_btn>a").click(function(){
        idx=$(this).index()
        //0,1
        $(".tab_contents>div").hide()
        $(".tab_contents>div").eq(idx).show()
    })
}
function popup(){
    if ($.cookie("popup") == "no") {
        //popup이라는 이름의 쿠키 값이 none이라면
        $("#popup").hide();
        return
    }
        $("#popup").show()
        //팝업은 시작하자마자 보여주게...하고
        //체크박스와 닫기버튼에 이벤트 걸기... 
        $("#close-btn-area>span").click(function(){
            $("#popup").hide()
            //닫기버튼 클릭하면 팝업창 hide
        })
        $("#check-btn-1").click(function(){
            alert("1일간 열지 않기 체크")
            $.cookie("popup", "no", {
                expires: 1,
                path: "/"
            });
            $("#popup").hide()
        })
        $("#check-btn-7").click(function(){
            alert("7일간 열지 않기 체크")
            $.cookie("popup", "no", {
                expires: 7,
                path: "/"
            });
            $("#popup").hide()
        })
}
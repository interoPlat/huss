var myTimeout   = '';
function myGreeting() {
    // $(".step01").trigger("click"), setTimeout(myGreeting1, 4000)
    steponeslider();
}

function myGreeting1() {
    // $(".step02").trigger("click"), setTimeout(myGreeting2, 6000)
    steptwoslider();
}

function myGreeting2() {
    // $(".step03").trigger("click"), setTimeout(myGreeting3, 8000)
    stepthreeslider();
}

function myGreeting3() {
    // $(".step04").trigger("click"), setTimeout(myGreeting4, 10000)
    stepfourslider();
}
function myGreeting4() {
    // $(".step05").trigger("click"), setTimeout(myGreeting, 12000)
    stepfiveslider();
}
$(".step").click(function() {
    clearTimeout(myTimeout);
    $(this).addClass("active").prevAll().addClass("active"), $(this).nextAll().removeClass("active")
}), 
myTimeout = setTimeout(myGreeting, 2000), $("#step01").click(function() {
    // $("#line-progress").css("width", "0%"), $(".discovery").addClass("active").siblings().removeClass("active")
    clearTimeout(myTimeout);
    steponeslider();
}), 
$("#step02").click(function() {
    // $("#line-progress").css("width", "25%"), $(".strategy").addClass("active").siblings().removeClass("active")
    clearTimeout(myTimeout);
    steptwoslider();
}), 
$("#step03").click(function() {
    // $("#line-progress").css("width", "50%"), $(".creative").addClass("active").siblings().removeClass("active")
    clearTimeout(myTimeout);
    stepthreeslider();
}), 
$("#step04").click(function() {
    // $("#line-progress").css("width", "75%"), $(".production").addClass("active").siblings().removeClass("active")
    clearTimeout(myTimeout);
    stepfourslider();
}), 
$("#step05").click(function() {
    // $("#line-progress").css("width", "100%"), $(".analysis").addClass("active").siblings().removeClass("active")
    clearTimeout(myTimeout);
    stepfiveslider();
});

function steponeslider() {
    $("#line-progress").css("width", "0%"), $(".discovery").addClass("active").siblings().removeClass("active")
    myTimeout = setTimeout(myGreeting1, 4000);
    for(var i=0;i<=6;i++){
        $(".step0"+i).removeClass("active");
    }
    $(".step01").addClass("active");
}

function  steptwoslider() {
    $("#line-progress").css("width", "25%"), $(".strategy").addClass("active").siblings().removeClass("active") 
    myTimeout = setTimeout(myGreeting2, 6000);
    for(var i=0;i<=6;i++){
        $(".step0"+i).removeClass("active");
    }
    $(".step02").addClass("active");
}

function stepthreeslider() {
    $("#line-progress").css("width", "50%"), $(".creative").addClass("active").siblings().removeClass("active")  
    myTimeout = setTimeout(myGreeting3, 8000);
    for(var i=0;i<=6;i++){
        $(".step0"+i).removeClass("active");
    }
    $(".step03").addClass("active");
}

function stepfourslider() {
    $("#line-progress").css("width", "75%"), $(".production").addClass("active").siblings().removeClass("active")
    myTimeout = setTimeout(myGreeting4, 10000);
    for(var i=0;i<=6;i++){
        $(".step0"+i).removeClass("active");
    }
    $(".step04").addClass("active");
}

function stepfiveslider() {
    $("#line-progress").css("width", "100%"), $(".analysis").addClass("active").siblings().removeClass("active")
    myTimeout = setTimeout(myGreeting, 12000); 
    for(var i=0;i<=6;i++){
        $(".step0"+i).removeClass("active");
    }
    $(".step05").addClass("active");
}
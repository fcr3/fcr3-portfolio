var clickedId = "empty";
var image = "empty";
var backPhotoType = "";
if ($(".topbar").attr("id") == "index") {
    clickedId = "m1";
    image = "assets/img/portland.jpg";
    backPhotoType = ""
} else if ($(".topbar").attr("id") == "work") {
    clickedId = "m2";
    image = "assets/img/work.jpg";
    backPhotoType = "Work";
} else if ($(".topbar").attr("id") == "contact") {
    clickedId = "m3";
    image = "assets/img/coffee.jpg";
    backPhotoType = "Contact";
}

$("#home #loadingbar p").animate({ opacity: "1"}, 1300, "swing", function() {
    $("#home #loadingbar p").animate({opacity: "0"}, 500, "swing", function() {
        $("#home #loadingbar").animate({width: "0%"}, 500, "swing");
        $(".topbar").animate({opacity: "1"}, 500, "swing", function() {
            
            //Store startup transitions for pages here!!!
            //Index Page
            $("#home .backPhoto" + backPhotoType + " h1").animate({opacity: "1", marginTop: "7.5%"}, 1000, "swing");
            $("#home .backPhoto" + backPhotoType + " #downArrow img").animate({opacity: "1"}, 1000, "swing");


            //Contact Page
            $("#home .backPhotoContact #form").animate({opacity: "1", 
            marginLeft: "0%"}, 1000, "swing");
        });
    });
    $(".topbar #menubar .menu-item#" + clickedId).css("border-bottom-width", "2px");
    if (clickedId == "m1") {
        $("#home .backPhoto" + backPhotoType).css("background-image", "url(" + image + ")");
    } else if (clickedId == "m2") {
        $("#home .backPhoto" + backPhotoType).css("background-image", "url(" + image + ")");
    } else if (clickedId == "m3") {
        $("#home .backPhoto" + backPhotoType).css("background-image", "url(" + image + ")");
    } 
});

var randNum = 0;
for (i = 0; i < 9; i ++) {
    randNum = Math.floor(Math.random() * 4);
    $("#home .outerpicdiv .pictures#" + i).css("background-image", "url(assets/img/" + randNum + ".jpg)");
}

$(document).ready(function(){
    var animationDone = true;
    if (animationDone == true) {
        $(".topbar #leftside #icon").hover(function() {
            $(".topbar #leftside #message").fadeIn();
        }, function() {
            $(".topbar #leftside #message").fadeOut();
        });

        $("#home .backPhoto" + backPhotoType + " #downArrow img").hover(function() {
            $("#home .backPhoto" + backPhotoType + " #downArrow h2").animate({
                opacity: "1",
                marginTop: "-1%",
            }, 200, "swing");
            $("#home .backPhoto" + backPhotoType + " #downArrow img").animate({width: "50px", height: "50px"}, 200, "swing");
            $(this).css("cursor", "pointer");
        }, function() {
            $("#home .backPhoto" + backPhotoType + " #downArrow h2").animate({
                opacity: "0",
                marginTop: "+1%",
            }, 200, "swing");
            $("#home .backPhoto" + backPhotoType + " #downArrow img").animate({width: "32px", height: "32px"}, 200, "swing");
            $(this).css("cursor", "default");
        });
    
        $(".topbar #menubar .menu-item").hover(
            function() {
                if (clickedId != $(this).attr('id')){
                    $(this).css("cursor", "pointer");
                    $(this).animate({borderBottomWidth: "2px"}, 75, "swing");
                }
            },
            function() {
                if (clickedId != $(this).attr('id')) {
                    $(this).css("cursor", "default");
                    $(this).animate({borderBottomWidth: "0px"}, 75, "swing");
                }
        });
    
        $(".topbar #menubar .menu-item").click(function() {
            if (clickedId != $(this).attr('id')) {
                var redirect = $(this).attr('id');
                if (redirect == "m1") {
                    redirect = "index.html";
                } else if (redirect == "m2") {
                    redirect = "work.html";
                } else if (redirect == "m3") {
                    redirect = "contact.html";
                }

                $(".topbar #menubar .menu-item#" + clickedId).css("border-bottom-width", "0px");
                $(".topbar").animate({opacity: "0"}, 500, "swing");
                $("#home #loadingbar").animate({width: "100%"}, 500, "swing", function() {
                    window.location = redirect;
                });
                clickedId = $(this).attr('id');
            }
        });

        $("#home .bioinfo #contact-icons #gm").hover(function() {
            $(this).css("background-image", "url(assets/img/gmblue.svg");
            $(this).css("cursor", "pointer");
        }, function() {
            $(this).css("background-image", "url(assets/img/gmail.svg");
            $(this).css("cursor", "default");
        });

        $("#home .bioinfo #contact-icons #fb").hover(function() {
            $(this).css("background-image", "url(assets/img/fbblue.svg");
            $(this).css("cursor", "pointer");
        }, function() {
            $(this).css("background-image", "url(assets/img/fb.svg");
            $(this).css("cursor", "default");
        });

        var randNum2 = 0;
        var randNum3 = 1;
        var index = "-1";
        $("#home .outerpicdiv .pictures").hover(function() {
            index = $(this).attr('id');
            $(this).css("cursor", "pointer");
            randNum2 = Math.floor(Math.random() * 4);

            while (randNum2 == randNum3) {
                randNum2 = Math.floor(Math.random() * 4);
            }

            $(this).css("background-image", "url(assets/img/" + randNum2 + ".jpg)");
            if (Math.floor(Math.random() * 100) % 2 == 1) {
                $(this).css("filter", "grayscale()");
            } else {
                $(this).css("filter", "none");
            }
            randNum3 = randNum2;
        }, function() {
            $(this).css("cursor", "default");
        });


        // Work Page

        $("#home .backPhotoWork #wp1").hover(function() {
            $("#home .backPhotoWork #wp1 #description").animate({
                opacity: "1",
                height: "30%"
            }, 500, "swing");
        }, function() {
            $("#home .backPhotoWork #wp1 #description").animate({
                opacity: "0",
                height: "0"
            }, 500, "swing");                    
        });

        $("#home .backPhotoWork #wp2").hover(function() {
            $("#home .backPhotoWork #wp2 #description").animate({
                opacity: "1",
                height: "30%"
            }, 500, "swing");
        }, function() {
            $("#home .backPhotoWork #wp2 #description").animate({
                opacity: "0",
                height: "0"
            }, 500, "swing");                    
        });

        $("#home .backPhotoWork #wp3").hover(function() {
            $("#home .backPhotoWork #wp3 #description").animate({
                opacity: "1",
                height: "40%"
            }, 500, "swing");
        }, function() {
            $("#home .backPhotoWork #wp3 #description").animate({
                opacity: "0",
                height: "0"
            }, 500, "swing");                    
        });

        // On the Contact Page

        $("#home .backPhotoContact #form #contactButton #send").hover(function() {
            $(this).text("Send?");
            $(this).css("color", "black");
            $(this).css("background-color", "white");
            $(this).css("border", "solid black 2px");
        }, function() {
            $(this).text("Send");
            $(this).css("color", "white");
            $(this).css("background-color", "black");
            $(this).css("border", "solid white 2px");
        });

        $("#home .backPhotoContact #form #contactButton #send").click(function() {
            $("#home .backPhotoContact #form #formInputs input").val("");
            $("#home .backPhotoContact #form #formInputs textarea").val("");
            $(this).css("color", "black");
            $(this).css("background-color", "white");
            $(this).css("border", "solid black 2px");
            $(this).animate({opacity: "0", width: "50%"}, 500, "swing", function() {
                $(this).text("Sent! Cyu Soon!");
                $(this).animate({opacity: "1"}, 1500, "swing", function() {
                    $(this).animate({opacity: "0", width: "30%"}, 500, "swing", function() {
                        $(this).animate({opacity: "1"}, 500, "swing");
                        $(this).text("Send");
                        $(this).css("color", "white");
                        $(this).css("background-color", "black");
                        $(this).css("border", "solid white 2px");
                    });
                });
            });
        });
    }
});

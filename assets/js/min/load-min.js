$(document).ready(function(){$(".nav__button").click(function(){"assets/images/nav.png"===$(this).attr("src")?$(this).attr("src","assets/images/nav_close.png"):$(this).attr("src","assets/images/nav.png"),$("body").toggleClass("nav-visible")}),$(".nav__button--invert").click(function(){"assets/images/nav_invert.png"===$(this).attr("src")?$(this).attr("src","assets/images/nav_close_invert.png"):$(this).attr("src","assets/images/nav_invert.png"),$("body").toggleClass("nav-visible"),$("body").toggleClass("nav-color")}),$(".project").mouseenter(function(){$(this).addClass("desc--visible")}),$(".project").mouseleave(function(){$(this).removeClass("desc--visible")})});
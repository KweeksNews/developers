$(document).ready(function () {
  $("button.floatmenu").click(function () {
    return $(".menu__wrapper").toggleClass("is__open"), !1;
  });
  $(window).resize(function () {
    $("#nav_menu").hasClass("is__open") &&
      !$("button[class='floatmenu']").is(":visible") &&
      $("#nav_menu").removeClass("is__open");
  });
  $.getJSON("/assets/json/webmaster.json", function (data) {
    var response = "",
      indicator = "";
    for (var i = 0; i < data.length; i++) {
      response += '<div class="carousel-item"><div class="profile">';
      if (data[i].ltw) {
        response += '<span class="ltw">LTW</span>';
      }
      response +=
        '<img src="https://github.com/' +
        data[i].github +
        '.png?size=400"><h3>' +
        data[i].name +
        "</h3><p>" +
        data[i].start +
        " - ";
      if (data[i].finish) {
        response += data[i].finish;
      } else {
        response += "sekarang";
      }
      response +=
        '</p><ul class="contact"><li><a href="https://' +
        data[i].link +
        '/" target="_blank"><i class="icon-web"></i></a></li><li><a href="mailto:' +
        data[i].email +
        '" target="_blank"><i class="icon-email"></i></a></li><li><a href="https://github.com/' +
        data[i].github +
        '/" target="_blank"><i class="icon-github"></i></a></li><li><a href="https://t.me/' +
        data[i].telegram +
        '/" target="_blank"><i class="icon-telegram"></i></a></li></ul></div></div>';
      indicator +=
        '<li data-target="#carousel-webmaster" data-slide-to="' + i + '"></li>';
    }
    $("#items").append(response);
    $("#indicators").append(indicator);
    $(".carousel-item").first().addClass("active");
    $(".carousel-indicators > li").first().addClass("active");
  });
  $("#year").text(new Date().getFullYear());
});

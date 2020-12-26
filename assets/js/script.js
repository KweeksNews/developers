$(document).ready(function () {
  $('button.floatmenu').click(function () {
    return $('.menu__wrapper').toggleClass('is__open'), !1;
  });
  $(window).resize(function () {
    $('#nav_menu').hasClass('is__open') &&
      !$("button[class='floatmenu']").is(':visible') &&
      $('#nav_menu').removeClass('is__open');
  });
  $.getJSON('/assets/json/tech.json', function (datas) {
    let tech = '';
    for (const data of datas) {
      tech +=
        `<div class="box card"><img src="${data.image}" alt="${data.name}" ` +
        `title="${data.name}"><p>${data.name}</p></div>`;
    }
    $('.tech-list').append(tech);
  });
  $.getJSON('/assets/json/webmaster.json', function (datas) {
    let profile = '';
    let indicator = '';
    for (const data of datas) {
      profile += '<div class="carousel-item"><div class="profile">';
      if (data.ltw) {
        profile += '<span class="ltw">LTW</span>';
      }
      profile +=
        `<img src="https://github.com/${data.github}.png?size=400"` +
        `alt="${data.name}" title="${data.name}">` +
        `<h3>${data.name}</h3><p>${data.start} - `;
      if (data.finish) {
        profile += data.finish;
      } else {
        profile += 'sekarang';
      }
      profile +=
        `</p><ul class="contact"><li><a href="https://${data.link}/" ` +
        'target="_blank" rel="noopener" aria-label="Site"><i class="icon-web">' +
        `</i></a></li><li><a href="mailto:${data.email}" target="_blank" ` +
        'rel="noopener" aria-label="Email"><i class="icon-email"></i></a></li>' +
        `<li><a href="https://github.com/${data.github}/" target="_blank" ` +
        'rel="noopener" aria-label="GitHub"><i class="icon-github"></i></a>' +
        `</li><li><a href="https://t.me/${data.telegram}/" target="_blank" ` +
        'rel="noopener" aria-label="Telegram"><i class="icon-telegram"></i>' +
        '</a></li></ul></div></div>';
      indicator +=
        '<li data-target="#carousel-webmaster" ' +
        `data-slide-to="${datas.indexOf(data)}"></li>`;
    }
    $('#carousel-webmaster #items').append(profile);
    $('#carousel-webmaster #indicators').append(indicator);
    $('.carousel-item').first().addClass('active');
    $('.carousel-indicators > li').first().addClass('active');
  });
  $('#year').text(new Date().getFullYear());
});

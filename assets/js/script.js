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
        profile += `${data.finish}</p>`;
      } else {
        profile += 'sekarang</p>';
      }
      profile +=
        `<ul class="contact"><li><a href="https://${data.link}/" ` +
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
    $('#webmaster #items').append(profile);
    $('#webmaster #indicators').append(indicator);
    $('#webmaster .carousel-item').first().addClass('active');
    $('#webmaster .carousel-indicators > li').first().addClass('active');
  });
  $.getJSON('/assets/json/editor.json', function (datas) {
    let profile = '';
    let indicator = '';
    for (const data of datas) {
      profile +=
        '<div class="carousel-item"><div class="profile">' +
        `<h3>${data.head}</h3>`;
      for (const member of data.member) {
        profile += `<h4>${member}</h4>`;
      }
      profile += `<p>${data.start} - `;
      if (data.finish) {
        profile += `${data.finish}</p>`;
      } else {
        profile += 'sekarang</p>';
      }
      profile += '</div></div>';
      indicator +=
        '<li data-target="#carousel-editor" ' +
        `data-slide-to="${datas.indexOf(data)}"></li>`;
    }
    $('#editor #items').append(profile);
    $('#editor #indicators').append(indicator);
    $('#editor .carousel-item').first().addClass('active');
    $('#editor .carousel-indicators > li').first().addClass('active');
  });
  $.getJSON('/assets/json/illustrator.json', function (datas) {
    let profile = '';
    let indicator = '';
    for (const data of datas) {
      profile +=
        '<div class="carousel-item"><div class="profile">' +
        `<h3>${data.head}</h3>`;
      for (const member of data.member) {
        profile += `<h4>${member}</h4>`;
      }
      profile += `<p>${data.start} - `;
      if (data.finish) {
        profile += `${data.finish}</p>`;
      } else {
        profile += 'sekarang</p>';
      }
      profile += '</div></div>';
      indicator +=
        '<li data-target="#carousel-illustrator" ' +
        `data-slide-to="${datas.indexOf(data)}"></li>`;
    }
    $('#illustrator #items').append(profile);
    $('#illustrator #indicators').append(indicator);
    $('#illustrator .carousel-item').first().addClass('active');
    $('#illustrator .carousel-indicators > li').first().addClass('active');
  });
  $('#year').text(new Date().getFullYear());
});

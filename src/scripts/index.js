import $ from 'jquery';
import 'regenerator-runtime';
import 'bootstrap/js/dist/carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import '../styles/icomoon.css';

const initMenu = () => {
  $('.floatmenu').on('click', () => {
    $('nav').toggleClass('open');
  });

  $(window).on('resize', () => {
    if ($('nav').hasClass('open') && !$('.floatmenu').is(':visible')) {
      $('nav').removeClass('open');
    }
  });

  $('main').on('click', () => {
    $('nav').removeClass('open');
  });
};

const loadData = async () => {
  const techData = await (await fetch('/assets/json/tech.json')).json();
  let techItem = '';
  techData.map((data) => {
    techItem += `
      <div class="tech__item">
        <img src="${data.image}" alt="${data.name}" title="${data.name}">
        <p>${data.name}</p>
      </div>`;
  });
  $('.tech__list').append(techItem);

  const webmasterData = await (await fetch('/assets/json/webmaster.json')).json();
  let webmasterItem = '';
  let webmasterIndicator = '';
  webmasterData.map((data) => {
    webmasterItem += `
      <div class="carousel-item">
        <div class="carousel-wrapper">
          ${data.ltw ? '<span class="ltw">LTW</span>' : ''}
          <img src="https://github.com/${data.github}.png?size=400" alt="${data.name}" title="${data.name}">
          <h3>${data.name}</h3>
          <p>${data.start} - ${data.finish || 'sekarang'}</p> 
          <div class="contact">
            <a href="https://${data.link}/" target="_blank" rel="noopener" aria-label="Site">
              <i class="icon-web"></i>
            </a>
            <a href="mailto:${data.email}" target="_blank" rel="noopener" aria-label="Email">
              <i class="icon-email"></i>
            </a>
            <a href="https://github.com/${data.github}/" target="_blank" rel="noopener" aria-label="GitHub">
              <i class="icon-github"></i>
            </a>
            <a href="https://t.me/${data.telegram}/" target="_blank" rel="noopener" aria-label="Telegram">
              <i class="icon-telegram"></i>
            </a>
          </div>
        </div> 
      </div>`;
    webmasterIndicator += `
      <button type="button" data-bs-target="#webmaster__carousel" data-bs-slide-to="${webmasterData.indexOf(data)}" aria-label="Slide ${webmasterData.indexOf(data)}">
      </button>`;
  });
  $('#webmaster .carousel-inner').append(webmasterItem);
  $('#webmaster .carousel-indicators').append(webmasterIndicator);
  $('#webmaster .carousel-item').first().addClass('active');
  $('#webmaster .carousel-indicators > button').first().addClass('active').attr('aria-current', true);

  const editorData = await (await fetch('/assets/json/editor.json')).json();
  let editorItem = '';
  let editorIndicator = '';
  editorData.map((data) => {
    const editorMember = data.member.map((member) => `<h4>${member}</h4>`).join('');
    editorItem += `
      <div class="carousel-item">
        <div class="carousel-wrapper">
          <h3>${data.head}</h3>
          ${editorMember}
          <p>${data.start} - ${data.finish || 'sekarang'}</p>
        </div>
      </div>`;
    editorIndicator += `
      <button type="button" data-bs-target="#editor__carousel" data-bs-slide-to="${editorData.indexOf(data)}" aria-label="Slide ${editorData.indexOf(data)}">
      </button>`;
  });
  $('#editor .carousel-inner').append(editorItem);
  $('#editor .carousel-indicators').append(editorIndicator);
  $('#editor .carousel-item').first().addClass('active');
  $('#editor .carousel-indicators > button').first().addClass('active').attr('aria-current', true);

  const illustratorData = await (await fetch('/assets/json/illustrator.json')).json();
  let illustratorItem = '';
  let illustratorIndicator = '';
  illustratorData.map((data) => {
    const illustratorMember = data.member.map((member) => `<h4>${member}</h4>`).join('');
    illustratorItem += `
      <div class="carousel-item">
        <div class="carousel-wrapper">
          <h3>${data.head}</h3>
          ${illustratorMember}
          <p>${data.start} - ${data.finish || 'sekarang'}</p>
        </div>
      </div>`;
    illustratorIndicator += `
      <button type="button" data-bs-target="#illustrator__carousel" data-bs-slide-to="${illustratorData.indexOf(data)}" aria-label="Slide ${illustratorData.indexOf(data)}">
      </button>`;
  });
  $('#illustrator .carousel-inner').append(illustratorItem);
  $('#illustrator .carousel-indicators').append(illustratorIndicator);
  $('#illustrator .carousel-item').first().addClass('active');
  $('#illustrator .carousel-indicators > button').first().addClass('active').attr('aria-current', true);
};

const setCopyrightDate = () => {
  $('.year').text(new Date().getFullYear());
};

$(window).on('load', () => {
  initMenu();
  loadData();
  setCopyrightDate();
});

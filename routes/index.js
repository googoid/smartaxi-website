var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    lang_id: 'am',
    title: 'SmartTaxi – Երևան',
    body_top_text: 'SmartTaxi՝  նոր, ժամանակակից, արագ, հարմարավետ և պարզ միջոց, Հայաստանի տարածքում բջջային տեխնոլոգիաների միջոցով տաքսի փնտրելու և պատվիրելու համար։ Որակյալ, վստահելի և արդար սպասարկում, օպերատորների հետ կապ բացառապես անհրաժեշտության դեպքում և բազում այլ հնարավորություններ:',
    body_bottom_text: 'SmartTaxi - խելացի տեխնոլոգիաներ՝ խելացի մարդկանց համար',
    coming_soon_text: 'Շուտով բոլոր բջջային սարքավորումների համար'
  });
});

router.get('/en', function(req, res, next) {
  res.render('index', { 
    lang_id: 'en',
    title: 'SmartTaxi – Yerevan',
    body_top_text: 'SmartTaxi - A completely modern, quick and convenient way of finding a cab in Armenia using your mobile device. Reliable and quality customer service, connection with the operators in case of necessity. Simple, yet powerful interface packed with myriads of useful features.',
    body_bottom_text: 'SmartTaxi - smart technologies for smart people',
    coming_soon_text: 'Coming soon on mobile devices'
  });
});

router.get('/ru', function(req, res, next) {
  res.render('index', { 
    lang_id: 'ru',
    title: 'SmartTaxi - Ереван',
    body_top_text: '<strong>SmartTaxi</strong> – это новый, современный, быстрый, удобный и простой сервис для поиска и вызова такси на территории Армении посредством мобильных технологий. Качественное, надежное и честное обслуживание клиентов. Связь с операторами при исключительной необходимости. И множество других полезных функций.',
    body_bottom_text: '<span class="strong">SmartTaxi</span> – умные технологии для умных людей.',
    coming_soon_text: 'Скоро на мобильных устройствах'
  });
});

module.exports = router;

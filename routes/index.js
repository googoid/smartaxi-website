var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	lang_id: 'am',
  	title: 'SmartTaxi',
  	body_top_text: '',
  	body_bottom_text: '',
  	coming_soon_text: 'Շուտով բոլոր բջջային սարքավորումների համար'
  });
});

router.get('/en', function(req, res, next) {
  res.render('index', { 
  	lang_id: 'en',
  	title: 'SmartTaxi',
  	body_top_text: '',
  	body_bottom_text: '',
  	coming_soon_text: 'Coming soon on mobile devices'
  });
});

router.get('/ru', function(req, res, next) {
  res.render('index', { 
  	lang_id: 'ru',
  	title: 'SmartTaxi',
  	body_top_text: '<strong>SmartTaxi</strong> – это новый, современный, быстрый, удобный и, самое главное, простой сервис для поиска и вызова такси на территории Армении посредством мобильных технологий. Качественное, надежное и честное обслуживание клиентов, минимальная обратная связь, и множество других полезных возможностей.',
  	body_bottom_text: '<span class="strong">SmartTaxi</span> – умные технологии для умных людей.',
  	coming_soon_text: 'Скоро на мобильных устройствах'
  });
});

module.exports = router;

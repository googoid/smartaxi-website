var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    lang_id: 'am',
    title: 'SmartTaxi',
    body_top_text: 'Ազգային արժեքների մասին խոսելը դարձել է նորաձև: Սովորաբար այդ խոսակցություններն արդյունք չեն հետևողական փնտրումների և սեղանային մտքի մակերեսային առկայծումներից անդին չեն անցնում: Այսուհանդերձ, մարդիկ ինչ-որ չափով, իրենց գիտակցության մի անկյունում, կարևորում են դրանց գոյությունը` համառորեն հավատալով, որ այդ արժեքները կան:',
    body_bottom_text: 'Ազգային արժեքների մասին խոսելը դարձել է նորաձև',
    coming_soon_text: 'Շուտով բոլոր բջջային սարքավորումների համար'
  });
});

router.get('/en', function(req, res, next) {
  res.render('index', { 
    lang_id: 'en',
    title: 'SmartTaxi',
    body_top_text: 'The reason for their not coming to Yerevan is an atmosphere fear. They preferred nonparticipation to finding themselves persecuted on returning from Yerevan. I regret that after any program an organization that had had a meeting with its Armenian partners was charged with high treason. This atmosphere of fear is difficult to cope with, and people prefer not coming,” Mr Poghosyan said.',
    body_bottom_text: 'An Armenian delegation participated in a Euronest',
    coming_soon_text: 'Coming soon on mobile devices'
  });
});

router.get('/ru', function(req, res, next) {
  res.render('index', { 
    lang_id: 'ru',
    title: 'SmartTaxi',
    body_top_text: '<strong>SmartTaxi</strong> – это новый, современный, быстрый, удобный и, самое главное, простой сервис для поиска и вызова такси на территории Армении посредством мобильных технологий. Качественное, надежное и честное обслуживание клиентов, минимальная обратная связь и множество других полезных возможностей.',
    body_bottom_text: '<span class="strong">SmartTaxi</span> – умные технологии для умных людей.',
    coming_soon_text: 'Скоро на мобильных устройствах'
  });
});

module.exports = router;

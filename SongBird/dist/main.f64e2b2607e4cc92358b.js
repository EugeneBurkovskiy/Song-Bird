/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gamePage_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamePage.html */ \"./gamePage.html\");\n/* harmony import */ var _scss_indexStyle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/indexStyle.scss */ \"./scss/indexStyle.scss\");\n/* harmony import */ var _modules_chooseMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/chooseMode */ \"./modules/chooseMode.js\");\n/* harmony import */ var _modules_chooseAnswer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/chooseAnswer */ \"./modules/chooseAnswer.js\");\n/* harmony import */ var _modules_next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/next */ \"./modules/next.js\");\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  (0,_modules_chooseMode__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_modules_chooseAnswer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_modules_next__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/audio.js":
/*!**************************!*\
  !*** ./modules/audio.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction customAudio(audioSelector, startSelector, pauseSelector, volumeSelector, progressSelector, currentTime, totalTime, volumeTrue, volumeFalse) {\n  var audio = document.querySelector(audioSelector),\n    startBtn = document.querySelector(startSelector),\n    pauseBtn = document.querySelector(pauseSelector),\n    volumeBar = document.querySelector(volumeSelector),\n    progressBar = document.querySelector(progressSelector),\n    currentTimeText = document.querySelector(currentTime),\n    totalTimeText = document.querySelector(totalTime),\n    audioIconTrue = document.querySelector(volumeTrue),\n    audioIconFalse = document.querySelector(volumeFalse);\n  audio.ontimeupdate = progress;\n  startBtn.addEventListener('click', function () {\n    audio.play();\n    timeConverter(audio.duration, totalTimeText);\n    pauseBtn.style.display = 'block';\n    startBtn.style.display = 'none';\n  });\n  pauseBtn.addEventListener('click', function () {\n    audio.pause();\n    pauseBtn.style.display = 'none';\n    startBtn.style.display = 'block';\n  });\n  volumeBar.addEventListener('input', function () {\n    var volumeStatus = volumeBar.value;\n    audio.volume = volumeStatus / volumeBar.max;\n    if (volumeBar.value < 1) {\n      audioIconTrue.style.display = 'none';\n      audioIconFalse.style.display = 'block';\n    } else {\n      audioIconFalse.style.display = 'none';\n      audioIconTrue.style.display = 'block';\n    }\n  });\n  progressBar.addEventListener('input', function () {\n    audio.currentTime = progressBar.value * audio.duration / progressBar.max;\n  });\n  function progress() {\n    progressBar.value = progressBar.max * audio.currentTime / audio.duration;\n    timeConverter(audio.currentTime, currentTimeText);\n  }\n  function timeConverter(time, cell) {\n    cell.textContent = '';\n    var seconds = Math.floor(time % 60),\n      minutes = Math.floor(seconds / 60);\n    var timeArr = [minutes, seconds];\n    timeArr = timeArr.map(function (item) {\n      if (item < 10) {\n        item = '0' + item;\n      } else if (item === 0) {\n        item = '00';\n      }\n      return item;\n    });\n    cell.textContent = timeArr[0] + ':' + timeArr[1];\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customAudio);\n\n//# sourceURL=webpack:///./modules/audio.js?");

/***/ }),

/***/ "./modules/birds.js":
/*!**************************!*\
  !*** ./modules/birds.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar birdsData = [[{\n  id: 1,\n  name: 'Ворон',\n  species: 'Corvus corax',\n  description: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',\n  image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'\n}, {\n  id: 2,\n  name: 'Журавль',\n  species: 'Grus grus',\n  description: 'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',\n  image: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3'\n}, {\n  id: 3,\n  name: 'Ласточка',\n  species: 'Delichon urbicum',\n  description: 'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',\n  image: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3'\n}, {\n  id: 4,\n  name: 'Козодой',\n  species: 'Caprimulgus europaeus',\n  description: 'Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ',\n  image: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3'\n}, {\n  id: 5,\n  name: 'Кукушка',\n  species: 'Cuculus canorus',\n  description: 'Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.',\n  image: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3'\n}, {\n  id: 6,\n  name: 'Синица',\n  species: 'Parus major',\n  description: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',\n  image: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3'\n}], [{\n  id: 1,\n  name: 'Воробей',\n  species: 'Passer domesticus',\n  description: 'Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.',\n  image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3'\n}, {\n  id: 2,\n  name: 'Грач',\n  species: 'Corvus frugilegus',\n  description: 'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.',\n  image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3'\n}, {\n  id: 3,\n  name: 'Галка',\n  species: 'Coloeus monedula',\n  description: 'Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.',\n  image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3'\n}, {\n  id: 4,\n  name: 'Певчий дрозд',\n  species: 'Turdus philomelos',\n  description: 'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.',\n  image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3'\n}, {\n  id: 5,\n  name: 'Сорока',\n  species: 'Pica pica',\n  description: 'Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.',\n  image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3'\n}, {\n  id: 6,\n  name: 'Сойка',\n  species: 'Garrulus glandarius',\n  description: 'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.',\n  image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3'\n}], [{\n  id: 1,\n  name: 'Зяблик',\n  species: 'Fringilla coelebs',\n  description: 'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',\n  image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3'\n}, {\n  id: 2,\n  name: 'Клёст',\n  species: 'Loxia curvirostra',\n  description: 'Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',\n  image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3'\n}, {\n  id: 3,\n  name: 'Горлица',\n  species: 'Streptopelia turtur',\n  description: 'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.',\n  image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3'\n}, {\n  id: 4,\n  name: 'Дятел',\n  species: 'Dendrocopos major',\n  description: 'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',\n  image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3'\n}, {\n  id: 5,\n  name: 'Удод',\n  species: 'Upupa epops',\n  description: 'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',\n  image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3'\n}, {\n  id: 6,\n  name: 'Стриж',\n  species: 'Apus apus',\n  description: 'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',\n  image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3'\n}], [{\n  id: 1,\n  name: 'Жаворонок',\n  species: 'Alauda arvensis',\n  description: 'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',\n  image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3'\n}, {\n  id: 2,\n  name: 'Соловей',\n  species: 'Luscinia luscinia',\n  description: 'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',\n  image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3'\n}, {\n  id: 3,\n  name: 'Скворец',\n  species: 'Sturnus vulgaris',\n  description: 'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',\n  image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3'\n}, {\n  id: 4,\n  name: 'Иволга',\n  species: 'Oriolus oriolus',\n  description: 'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',\n  image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'\n}, {\n  id: 5,\n  name: 'Свиристель',\n  species: 'Bombycilla garrulus',\n  description: 'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',\n  image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3'\n}, {\n  id: 6,\n  name: 'Щегол',\n  species: 'Carduelis carduelis',\n  description: 'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю',\n  image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3'\n}], [{\n  id: 1,\n  name: 'Орёл',\n  species: 'Aquila nipalensis',\n  description: 'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',\n  image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3'\n}, {\n  id: 2,\n  name: 'Коршун',\n  species: 'Milvus migrans',\n  description: 'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',\n  image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3'\n}, {\n  id: 3,\n  name: 'Лунь',\n  species: 'Circus cyaneus',\n  description: 'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',\n  image: 'https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3'\n}, {\n  id: 4,\n  name: 'Сокол',\n  species: 'Falco peregrinus',\n  description: 'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',\n  image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3'\n}, {\n  id: 5,\n  name: 'Ястреб',\n  species: 'Accipiter gentilis',\n  description: 'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',\n  image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3'\n}, {\n  id: 6,\n  name: 'Филин',\n  species: 'Bubo bubo',\n  description: 'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',\n  image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3'\n}], [{\n  id: 1,\n  name: 'Альбатрос',\n  species: 'Diomedea exulans',\n  description: 'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',\n  image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3'\n}, {\n  id: 2,\n  name: 'Олуша',\n  species: 'Sula nebouxii',\n  description: 'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',\n  image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3'\n}, {\n  id: 3,\n  name: 'Буревестник',\n  species: 'Puffinus griseus',\n  description: 'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',\n  image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3'\n}, {\n  id: 4,\n  name: 'Пеликан',\n  species: 'Pelecanus',\n  description: 'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',\n  image: 'https://pofoto.club/uploads/posts/2021-12/1640742442_1-pofoto-club-p-pelikan-ptitsa-foto-3.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3'\n}, {\n  id: 5,\n  name: 'Пингвин',\n  species: 'Aptenodytes forsteri',\n  description: 'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',\n  image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'\n}, {\n  id: 6,\n  name: 'Чайка',\n  species: 'Larus argentatus',\n  description: 'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',\n  image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',\n  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'\n}]];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (birdsData);\n\n//# sourceURL=webpack:///./modules/birds.js?");

/***/ }),

/***/ "./modules/checkAnswer.js":
/*!********************************!*\
  !*** ./modules/checkAnswer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _generateGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateGame */ \"./modules/generateGame.js\");\n\nfunction checkAnswer(answer) {\n  var score = document.querySelector('.game__status-score'),\n    questionImg = document.querySelector('.game__question-img > img'),\n    questionName = document.querySelector('.game__question-name'),\n    nextButton = document.querySelector('.game__next');\n  if (window.getComputedStyle(nextButton).pointerEvents === 'none') {\n    _generateGame__WEBPACK_IMPORTED_MODULE_0__.gameOptions.answerStatus = false;\n  }\n  if (!_generateGame__WEBPACK_IMPORTED_MODULE_0__.gameOptions.answerStatus) {\n    if (answer.textContent === _generateGame__WEBPACK_IMPORTED_MODULE_0__.gameOptions.secretBird.name) {\n      answer.classList.add('game__answer-item_true');\n      score.textContent = \"Score: \".concat(_generateGame__WEBPACK_IMPORTED_MODULE_0__.gameOptions.score);\n      questionImg.src = _generateGame__WEBPACK_IMPORTED_MODULE_0__.gameOptions.secretBird.image;\n      questionName.textContent = _generateGame__WEBPACK_IMPORTED_MODULE_0__.gameOptions.secretBird.name;\n      nextButton.style.cssText = 'pointer-events: auto; background-color: #2baa27;';\n      _generateGame__WEBPACK_IMPORTED_MODULE_0__.gameOptions.answerStatus = true;\n    } else {\n      answer.classList.add('game__answer-item_false');\n      _generateGame__WEBPACK_IMPORTED_MODULE_0__.gameOptions.score--;\n    }\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkAnswer);\n\n//# sourceURL=webpack:///./modules/checkAnswer.js?");

/***/ }),

/***/ "./modules/chooseAnswer.js":
/*!*********************************!*\
  !*** ./modules/chooseAnswer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _birds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./birds */ \"./modules/birds.js\");\n/* harmony import */ var _generateGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateGame */ \"./modules/generateGame.js\");\n/* harmony import */ var _checkAnswer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkAnswer */ \"./modules/checkAnswer.js\");\n/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audio */ \"./modules/audio.js\");\n\n\n\n\nfunction chooseAnswer() {\n  var answerRow = document.querySelector('.game__answer'),\n    aboutSection = document.querySelector('.game__about-wrapper'),\n    aboutBlock = document.querySelector('.game__about-block');\n  answerRow.addEventListener('click', function (e) {\n    if (e.target && e.target.classList.contains('game__answer-item')) {\n      aboutBlock.style.top = '-100%';\n      _birds__WEBPACK_IMPORTED_MODULE_0__[\"default\"][_generateGame__WEBPACK_IMPORTED_MODULE_1__.gameOptions.gameMode - 1].forEach(function (bird) {\n        if (bird.name === e.target.textContent) {\n          aboutSection.innerHTML = \"\\n        <div class=\\\"game__about-img\\\"><img src=\".concat(bird.image, \" alt=\\\"incognito\\\"></div>\\n            <div class=\\\"game__about-info\\\">\\n              <div class=\\\"game__about-name\\\">\").concat(bird.name, \"</div>\\n              <hr class=\\\"game__about-divider\\\">\\n              <div class=\\\"game__about-subname\\\">\").concat(bird.species, \"</div>\\n              <hr class=\\\"game__about-divider\\\">\\n                <div class=\\\"player\\\" id=\\\"answer-player\\\">\\n                <audio class=\\\"game__question-audio\\\" id=\\\"answer-audio\\\" src = \").concat(bird.audio, \"></audio>\\n                <input class=\\\"player__duration\\\" id=\\\"answer-player-duration\\\" type=\\\"range\\\" min=0 max=100 value=\\\"0\\\">\\n                <div class=\\\"player__time\\\">\\n                  <span class=\\\"player__time-current\\\" id=\\\"answer-time-current\\\">00:00</span>\\n                  <span class=\\\"player__time-total\\\" id=\\\"answer-time-total\\\">00:00</span>\\n                </div>\\n                <div class=\\\"player__start\\\" id=\\\"answer-player-start\\\"><img class=\\\"player__controls-img\\\"\\n                    src=\\\"assets/img/start.svg\\\" alt=\\\"start\\\">\\n                </div>\\n                <div class=\\\"player__pause\\\" id=\\\"answer-player-pause\\\"><img class=\\\"player__controls-img\\\"\\n                    src=\\\"assets/img/pause.svg\\\" alt=\\\"pause\\\">\\n                </div>\\n                <img class=\\\"player__volume-true\\\" id=\\\"answer-volume-true\\\" src=\\\"assets/img/volume.svg\\\" alt=\\\"volume\\\">\\n                <img class=\\\"player__volume-false\\\" id=\\\"answer-volume-false\\\" src=\\\"assets/img/mute.svg\\\" alt=\\\"mute\\\">\\n                <input class=\\\"player__volume\\\" id=\\\"answer-player-volume\\\" type=\\\"range\\\" min=0 max=100 value=\\\"50\\\">\\n              </div>\\n            </div>\\n            </div>\\n            <div class=\\\"game__about-descr\\\">\").concat(bird.description, \"\\n            </div>\\n        \");\n        }\n      });\n      (0,_audio__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('#answer-audio', '#answer-player-start', '#answer-player-pause', '#answer-player-volume', '#answer-player-duration', '#answer-time-current', '#answer-time-total', '#answer-volume-true', '#answer-volume-false');\n      (0,_checkAnswer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e.target);\n    }\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chooseAnswer);\n\n//# sourceURL=webpack:///./modules/chooseAnswer.js?");

/***/ }),

/***/ "./modules/chooseMode.js":
/*!*******************************!*\
  !*** ./modules/chooseMode.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _birds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./birds */ \"./modules/birds.js\");\n/* harmony import */ var _generateGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateGame */ \"./modules/generateGame.js\");\n\n\n\nfunction chooseMode() {\n  var gameModeRow = document.querySelector('.game__mode'),\n    btns = document.querySelectorAll('.game__button'),\n    blockWindow = document.querySelector('.game__blocking');\n  gameModeRow.addEventListener('click', function (e) {\n    if (e.target && e.target.value) {\n      btns.forEach(function (btn) {\n        btn.style.cssText = \"\";\n        btn.style.pointerEvents = '';\n      });\n      e.target.style.cssText = \"border: 3px solid white; background-color: #165c52\";\n      e.target.style.pointerEvents = 'none';\n      blockWindow.style.top = '-100%';\n      _generateGame__WEBPACK_IMPORTED_MODULE_1__.gameOptions.gameMode = e.target.value;\n      _generateGame__WEBPACK_IMPORTED_MODULE_1__.gameOptions.dataArr = _birds__WEBPACK_IMPORTED_MODULE_0__[\"default\"][_generateGame__WEBPACK_IMPORTED_MODULE_1__.gameOptions.gameMode - 1].slice(0);\n      (0,_generateGame__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    }\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chooseMode);\n\n//# sourceURL=webpack:///./modules/chooseMode.js?");

/***/ }),

/***/ "./modules/generateGame.js":
/*!*********************************!*\
  !*** ./modules/generateGame.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"gameOptions\": () => (/* binding */ gameOptions)\n/* harmony export */ });\n/* harmony import */ var _birds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./birds */ \"./modules/birds.js\");\n/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio */ \"./modules/audio.js\");\n\n\nvar gameOptions = {\n  'score': 5,\n  'level': 1,\n  'gameMode': 1,\n  'dataArr': [],\n  'secretBird': {},\n  'answerStatus': false\n};\nfunction generateGame() {\n  var answerBlock = document.querySelector('.game__answer'),\n    qustionAudio = document.querySelector('.game__question-audio'),\n    aboutBlock = document.querySelector('.game__about-block'),\n    nextButton = document.querySelector('.game__next'),\n    questionImg = document.querySelector('.game__question-img > img'),\n    questionName = document.querySelector('.game__question-name'),\n    lvlNumber = document.querySelector('.game__status-lvl');\n  questionImg.src = 'assets/img/incognito.png';\n  questionName.textContent = '***';\n  lvlNumber.textContent = \"\\u0423\\u0440\\u043E\\u0432\\u0435\\u043D\\u044C: \".concat(gameOptions.level);\n  aboutBlock.style.top = '0';\n  if (gameOptions.dataArr.length === 1) {\n    nextButton.textContent = 'Finish';\n  }\n  nextButton.style.cssText = '';\n  answerBlock.innerHTML = '';\n  _birds__WEBPACK_IMPORTED_MODULE_0__[\"default\"][gameOptions.gameMode - 1].forEach(function (item) {\n    var answerBtn = document.createElement('li');\n    answerBtn.classList.add('game__answer-item');\n    answerBtn.innerHTML = \"\".concat(item.name);\n    answerBlock.append(answerBtn);\n  });\n  gameOptions.secretBird = gameOptions.dataArr.splice(Math.floor(Math.random() * gameOptions.dataArr.length), 1)[0];\n  qustionAudio.src = gameOptions.secretBird.audio;\n  (0,_audio__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('#question-audio', '#question-player-start', '#question-player-pause', '#question-player-volume', '#question-player-duration', '#question-time-current', '#question-time-total', '#question-volume-true', '#question-volume-false');\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateGame);\n\n\n//# sourceURL=webpack:///./modules/generateGame.js?");

/***/ }),

/***/ "./modules/next.js":
/*!*************************!*\
  !*** ./modules/next.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _generateGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateGame */ \"./modules/generateGame.js\");\n\n\nfunction nextLvl() {\n  var nextButton = document.querySelector('.game__next');\n  nextButton.addEventListener('click', function () {\n    _generateGame__WEBPACK_IMPORTED_MODULE_0__.gameOptions.level++;\n    _generateGame__WEBPACK_IMPORTED_MODULE_0__.gameOptions.score += 5;\n    (0,_generateGame__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nextLvl);\n\n//# sourceURL=webpack:///./modules/next.js?");

/***/ }),

/***/ "./gamePage.html":
/*!***********************!*\
  !*** ./gamePage.html ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"../node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/apple-icon-57x57.png */ \"./assets/favicons/apple-icon-57x57.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/apple-icon-60x60.png */ \"./assets/favicons/apple-icon-60x60.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/apple-icon-72x72.png */ \"./assets/favicons/apple-icon-72x72.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/apple-icon-76x76.png */ \"./assets/favicons/apple-icon-76x76.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/apple-icon-114x114.png */ \"./assets/favicons/apple-icon-114x114.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/apple-icon-120x120.png */ \"./assets/favicons/apple-icon-120x120.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/apple-icon-144x144.png */ \"./assets/favicons/apple-icon-144x144.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/apple-icon-152x152.png */ \"./assets/favicons/apple-icon-152x152.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/apple-icon-180x180.png */ \"./assets/favicons/apple-icon-180x180.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/android-icon-192x192.png */ \"./assets/favicons/android-icon-192x192.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/favicon-32x32.png */ \"./assets/favicons/favicon-32x32.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/favicon-96x96.png */ \"./assets/favicons/favicon-96x96.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/favicon-16x16.png */ \"./assets/favicons/favicon-16x16.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/manifest.json */ \"./assets/favicons/manifest.json\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicons/ms-icon-144x144.png */ \"./assets/favicons/ms-icon-144x144.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/incognito.png */ \"./assets/img/incognito.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/start.svg */ \"./assets/icons/start.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/pause.svg */ \"./assets/icons/pause.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/volume.svg */ \"./assets/icons/volume.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/mute.svg */ \"./assets/icons/mute.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/iconmonstr-github-1.svg */ \"./assets/icons/iconmonstr-github-1.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/rs_school_js.svg */ \"./assets/icons/rs_school_js.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);\nvar ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);\nvar ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);\nvar ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);\nvar ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);\nvar ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);\nvar ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);\nvar ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);\nvar ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);\nvar ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);\nvar ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n\\r\\n<head>\\r\\n  <meta charset=\\\"UTF-8\\\">\\r\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\r\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n  <title>SongBird</title>\\r\\n  <link rel=\\\"apple-touch-icon\\\" sizes=\\\"57x57\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\r\\n  <link rel=\\\"apple-touch-icon\\\" sizes=\\\"60x60\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\">\\r\\n  <link rel=\\\"apple-touch-icon\\\" sizes=\\\"72x72\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\">\\r\\n  <link rel=\\\"apple-touch-icon\\\" sizes=\\\"76x76\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\">\\r\\n  <link rel=\\\"apple-touch-icon\\\" sizes=\\\"114x114\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\">\\r\\n  <link rel=\\\"apple-touch-icon\\\" sizes=\\\"120x120\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\">\\r\\n  <link rel=\\\"apple-touch-icon\\\" sizes=\\\"144x144\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\">\\r\\n  <link rel=\\\"apple-touch-icon\\\" sizes=\\\"152x152\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\">\\r\\n  <link rel=\\\"apple-touch-icon\\\" sizes=\\\"180x180\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\">\\r\\n  <link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"192x192\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\">\\r\\n  <link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"32x32\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\">\\r\\n  <link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"96x96\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\">\\r\\n  <link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"16x16\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\">\\r\\n  <link rel=\\\"manifest\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\">\\r\\n  <meta name=\\\"msapplication-TileColor\\\" content=\\\"#ffffff\\\">\\r\\n  <meta name=\\\"msapplication-TileImage\\\" content=\\\"\" + ___HTML_LOADER_REPLACEMENT_14___ + \"\\\">\\r\\n  <meta name=\\\"theme-color\\\" content=\\\"#ffffff\\\">\\r\\n</head>\\r\\n\\r\\n<body>\\r\\n\\r\\n\\r\\n  <header class=\\\"header\\\">\\r\\n    <div class=\\\"container\\\">\\r\\n      <div class=\\\"header__wrapper\\\">\\r\\n        <h1 class=\\\"header__logo\\\">Songs<span>Bird</span></h1>\\r\\n        <div class=\\\"header__row\\\">\\r\\n          <a href=\\\"index.html\\\" class=\\\"header__button\\\">⇦ На главную</a>\\r\\n          <a class=\\\"header__button\\\">Галлерея ⇨</a>\\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n  </header>\\r\\n\\r\\n  <article class=\\\"game\\\">\\r\\n    <div class=\\\"container\\\">\\r\\n      <h3 class=\\\"game__logo\\\">Game Mode</h3>\\r\\n      <ul class=\\\"game__mode\\\">\\r\\n        <li class=\\\"game__button\\\" value=\\\"1\\\">Разминка</li>\\r\\n        <li class=\\\"game__button\\\" value=\\\"2\\\">Воробьиные</li>\\r\\n        <li class=\\\"game__button\\\" value=\\\"3\\\">Лесные птицы</li>\\r\\n        <li class=\\\"game__button\\\" value=\\\"4\\\">Певчие птицы</li>\\r\\n        <li class=\\\"game__button\\\" value=\\\"5\\\">Хищные птицы</li>\\r\\n        <li class=\\\"game__button\\\" value=\\\"6\\\">Морские птицы</li>\\r\\n      </ul>\\r\\n      <ul class=\\\"game__status\\\">\\r\\n        <li class=\\\"game__status-lvl\\\">Уровень: 1</li>\\r\\n        <li class=\\\"game__status-score\\\">Очки: 0</li>\\r\\n      </ul>\\r\\n      <div class=\\\"game__wrapper\\\">\\r\\n        <div class=\\\"game__blocking\\\">\\r\\n          <p>⇧⇧⇧</p>\\r\\n          Please choose a game mode\\r\\n        </div>\\r\\n        <div class=\\\"game__question\\\">\\r\\n          <div class=\\\"game__question-img\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_15___ + \"\\\" alt=\\\"incognito\\\"></div>\\r\\n          <div class=\\\"game__question-info\\\">\\r\\n            <div class=\\\"game__question-name\\\">***</div>\\r\\n            <hr class=\\\"game__question-divider\\\">\\r\\n            <div class=\\\"player\\\" id=\\\"question-player\\\">\\r\\n              <audio class=\\\"game__question-audio\\\" id=\\\"question-audio\\\"\\r\\n                src=\\\"https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3\\\"></audio>\\r\\n              <input class=\\\"player__duration\\\" id=\\\"question-player-duration\\\" type=\\\"range\\\" min=0 max=100 value=\\\"0\\\">\\r\\n              <div class=\\\"player__time\\\">\\r\\n                <span class=\\\"player__time-current\\\" id=\\\"question-time-current\\\">00:00</span>\\r\\n                <span class=\\\"player__time-total\\\" id=\\\"question-time-total\\\">00:00</span>\\r\\n              </div>\\r\\n              <div class=\\\"player__start\\\" id=\\\"question-player-start\\\"><img class=\\\"player__controls-img\\\"\\r\\n                  src=\\\"\" + ___HTML_LOADER_REPLACEMENT_16___ + \"\\\" alt=\\\"start\\\">\\r\\n              </div>\\r\\n              <div class=\\\"player__pause\\\" id=\\\"question-player-pause\\\"><img class=\\\"player__controls-img\\\"\\r\\n                  src=\\\"\" + ___HTML_LOADER_REPLACEMENT_17___ + \"\\\" alt=\\\"pause\\\">\\r\\n              </div>\\r\\n              <img class=\\\"player__volume-true\\\" id=\\\"question-volume-true\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_18___ + \"\\\" alt=\\\"volume\\\">\\r\\n              <img class=\\\"player__volume-false\\\" id=\\\"question-volume-false\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_19___ + \"\\\" alt=\\\"mute\\\">\\r\\n              <input class=\\\"player__volume\\\" id=\\\"question-player-volume\\\" type=\\\"range\\\" min=0 max=100 value=\\\"50\\\">\\r\\n            </div>\\r\\n          </div>\\r\\n        </div>\\r\\n        <ul class=\\\"game__answer\\\">\\r\\n          <li class=\\\"game__answer-item\\\">Орел</li>\\r\\n          <li class=\\\"game__answer-item\\\">Коршун</li>\\r\\n          <li class=\\\"game__answer-item\\\">Лунь</li>\\r\\n          <li class=\\\"game__answer-item\\\">Сокол</li>\\r\\n          <li class=\\\"game__answer-item\\\">Ястреб</li>\\r\\n          <li class=\\\"game__answer-item\\\">Флиин</li>\\r\\n        </ul>\\r\\n        <div class=\\\"game__about\\\">\\r\\n          <div class=\\\"game__about-block\\\">Послушайте аудио и выберите птицу</div>\\r\\n          <div class=\\\"game__about-wrapper\\\">\\r\\n            <div class=\\\"game__about-img\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_15___ + \"\\\" alt=\\\"incognito\\\"></div>\\r\\n            <div class=\\\"game__about-info\\\">\\r\\n              <div class=\\\"game__about-name\\\">???</div>\\r\\n              <hr class=\\\"game__about-divider\\\">\\r\\n              <div class=\\\"game__about-subname\\\">???</div>\\r\\n              <hr class=\\\"game__about-divider\\\">\\r\\n              <div class=\\\"player\\\" id=\\\"answer-player\\\">\\r\\n                <audio class=\\\"game__question-audio\\\" id=\\\"answer-audio\\\"\\r\\n                  src=\\\"https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3\\\"></audio>\\r\\n                <input class=\\\"player__duration\\\" id=\\\"answer-player-duration\\\" type=\\\"range\\\" min=0 max=100 value=\\\"0\\\">\\r\\n                <div class=\\\"player__time\\\">\\r\\n                  <span class=\\\"player__time-current\\\" id=\\\"answer-time-current\\\">00:00</span>\\r\\n                  <span class=\\\"player__time-total\\\" id=\\\"answer-time-total\\\">00:00</span>\\r\\n                </div>\\r\\n                <img class=\\\"player__volume-true\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_18___ + \"\\\" alt=\\\"volume\\\">\\r\\n                <img class=\\\"player__volume-false\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_19___ + \"\\\" alt=\\\"mute\\\">\\r\\n                <input class=\\\"player__volume\\\" id=\\\"answer-player-volume\\\" type=\\\"range\\\" min=0 max=100 value=\\\"50\\\">\\r\\n              </div>\\r\\n            </div>\\r\\n            <div class=\\\"game__about-descr\\\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, rem\\r\\n              laborum ex vero neque officiis veniam voluptate tempore omnis? Nisi? Lorem ipsum, dolor sit amet\\r\\n              consectetur adipisicing elit. Perspiciatis eius repudiandae obcaecati excepturi hic qui sapiente deleniti\\r\\n              non deserunt error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, mollitia?\\r\\n            </div>\\r\\n          </div>\\r\\n        </div>\\r\\n        <div class=\\\"game__next\\\">Next</div>\\r\\n      </div>\\r\\n    </div>\\r\\n  </article>\\r\\n\\r\\n  <footer class=\\\"footer\\\">\\r\\n    <div class=\\\"container\\\">\\r\\n      <div class=\\\"footer__row\\\">\\r\\n        <a class=\\\"footer__github\\\" href=\\\"https://github.com/EugeneBurkovskiy\\\"><img\\r\\n            src=\\\"\" + ___HTML_LOADER_REPLACEMENT_20___ + \"\\\" alt=\\\"GitHub\\\"></a>\\r\\n        <span class=\\\"footer__year\\\">2022</span>\\r\\n        <a href=\\\"https://rs.school/\\\" class=\\\"footer__img\\\">\\r\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_21___ + \"\\\" alt=\\\"RS School\\\">\\r\\n        </a>\\r\\n      </div>\\r\\n    </div>\\r\\n  </footer>\\r\\n\\r\\n\\r\\n</body>\\r\\n\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./gamePage.html?");

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./scss/indexStyle.scss":
/*!******************************!*\
  !*** ./scss/indexStyle.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/indexStyle.scss?");

/***/ }),

/***/ "./assets/favicons/android-icon-192x192.png":
/*!**************************************************!*\
  !*** ./assets/favicons/android-icon-192x192.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/android-icon-192x192.png\";\n\n//# sourceURL=webpack:///./assets/favicons/android-icon-192x192.png?");

/***/ }),

/***/ "./assets/favicons/apple-icon-114x114.png":
/*!************************************************!*\
  !*** ./assets/favicons/apple-icon-114x114.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/apple-icon-114x114.png\";\n\n//# sourceURL=webpack:///./assets/favicons/apple-icon-114x114.png?");

/***/ }),

/***/ "./assets/favicons/apple-icon-120x120.png":
/*!************************************************!*\
  !*** ./assets/favicons/apple-icon-120x120.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/apple-icon-120x120.png\";\n\n//# sourceURL=webpack:///./assets/favicons/apple-icon-120x120.png?");

/***/ }),

/***/ "./assets/favicons/apple-icon-144x144.png":
/*!************************************************!*\
  !*** ./assets/favicons/apple-icon-144x144.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/apple-icon-144x144.png\";\n\n//# sourceURL=webpack:///./assets/favicons/apple-icon-144x144.png?");

/***/ }),

/***/ "./assets/favicons/apple-icon-152x152.png":
/*!************************************************!*\
  !*** ./assets/favicons/apple-icon-152x152.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/apple-icon-152x152.png\";\n\n//# sourceURL=webpack:///./assets/favicons/apple-icon-152x152.png?");

/***/ }),

/***/ "./assets/favicons/apple-icon-180x180.png":
/*!************************************************!*\
  !*** ./assets/favicons/apple-icon-180x180.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/apple-icon-180x180.png\";\n\n//# sourceURL=webpack:///./assets/favicons/apple-icon-180x180.png?");

/***/ }),

/***/ "./assets/favicons/apple-icon-57x57.png":
/*!**********************************************!*\
  !*** ./assets/favicons/apple-icon-57x57.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/apple-icon-57x57.png\";\n\n//# sourceURL=webpack:///./assets/favicons/apple-icon-57x57.png?");

/***/ }),

/***/ "./assets/favicons/apple-icon-60x60.png":
/*!**********************************************!*\
  !*** ./assets/favicons/apple-icon-60x60.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/apple-icon-60x60.png\";\n\n//# sourceURL=webpack:///./assets/favicons/apple-icon-60x60.png?");

/***/ }),

/***/ "./assets/favicons/apple-icon-72x72.png":
/*!**********************************************!*\
  !*** ./assets/favicons/apple-icon-72x72.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/apple-icon-72x72.png\";\n\n//# sourceURL=webpack:///./assets/favicons/apple-icon-72x72.png?");

/***/ }),

/***/ "./assets/favicons/apple-icon-76x76.png":
/*!**********************************************!*\
  !*** ./assets/favicons/apple-icon-76x76.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/apple-icon-76x76.png\";\n\n//# sourceURL=webpack:///./assets/favicons/apple-icon-76x76.png?");

/***/ }),

/***/ "./assets/favicons/favicon-16x16.png":
/*!*******************************************!*\
  !*** ./assets/favicons/favicon-16x16.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/favicon-16x16.png\";\n\n//# sourceURL=webpack:///./assets/favicons/favicon-16x16.png?");

/***/ }),

/***/ "./assets/favicons/favicon-32x32.png":
/*!*******************************************!*\
  !*** ./assets/favicons/favicon-32x32.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/favicon-32x32.png\";\n\n//# sourceURL=webpack:///./assets/favicons/favicon-32x32.png?");

/***/ }),

/***/ "./assets/favicons/favicon-96x96.png":
/*!*******************************************!*\
  !*** ./assets/favicons/favicon-96x96.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/favicon-96x96.png\";\n\n//# sourceURL=webpack:///./assets/favicons/favicon-96x96.png?");

/***/ }),

/***/ "./assets/favicons/manifest.json":
/*!***************************************!*\
  !*** ./assets/favicons/manifest.json ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/manifest.json\";\n\n//# sourceURL=webpack:///./assets/favicons/manifest.json?");

/***/ }),

/***/ "./assets/favicons/ms-icon-144x144.png":
/*!*********************************************!*\
  !*** ./assets/favicons/ms-icon-144x144.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/ms-icon-144x144.png\";\n\n//# sourceURL=webpack:///./assets/favicons/ms-icon-144x144.png?");

/***/ }),

/***/ "./assets/icons/iconmonstr-github-1.svg":
/*!**********************************************!*\
  !*** ./assets/icons/iconmonstr-github-1.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/iconmonstr-github-1.svg\";\n\n//# sourceURL=webpack:///./assets/icons/iconmonstr-github-1.svg?");

/***/ }),

/***/ "./assets/icons/mute.svg":
/*!*******************************!*\
  !*** ./assets/icons/mute.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/mute.svg\";\n\n//# sourceURL=webpack:///./assets/icons/mute.svg?");

/***/ }),

/***/ "./assets/icons/pause.svg":
/*!********************************!*\
  !*** ./assets/icons/pause.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/pause.svg\";\n\n//# sourceURL=webpack:///./assets/icons/pause.svg?");

/***/ }),

/***/ "./assets/icons/rs_school_js.svg":
/*!***************************************!*\
  !*** ./assets/icons/rs_school_js.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/rs_school_js.svg\";\n\n//# sourceURL=webpack:///./assets/icons/rs_school_js.svg?");

/***/ }),

/***/ "./assets/icons/start.svg":
/*!********************************!*\
  !*** ./assets/icons/start.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/start.svg\";\n\n//# sourceURL=webpack:///./assets/icons/start.svg?");

/***/ }),

/***/ "./assets/icons/volume.svg":
/*!*********************************!*\
  !*** ./assets/icons/volume.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/volume.svg\";\n\n//# sourceURL=webpack:///./assets/icons/volume.svg?");

/***/ }),

/***/ "./assets/img/incognito.png":
/*!**********************************!*\
  !*** ./assets/img/incognito.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/incognito.png\";\n\n//# sourceURL=webpack:///./assets/img/incognito.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
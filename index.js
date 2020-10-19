const moment = require('moment-jalaali');
require('moment/locale/fa');

moment.locale('fa');
moment.loadPersian({usePersianDigits: true}, {dialect: 'persian-modern'});

var now = new Date();
var isoStringDate = now.toISOString();

let todaysDate = moment(isoStringDate).format('jYYYY/jM/jD');
let todaysName = moment(isoStringDate).format('dddd');

console.log(`${todaysName} ${todaysDate}`);

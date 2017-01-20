var mongojs = require('mongojs');

var url = 'mongodb://steemit:steemit@mongo0.steemdata.com:27017/Steem';
var db = mongojs(url);

db.collection('Posts').find({'author':'busy.org'}).sort({'total_payout_reward.amount': -1}).limit(1).toArray(function (err, docs) {
    console.log(docs);
});


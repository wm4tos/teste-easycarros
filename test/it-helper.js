const prepare = require('mocha-prepare');
const mongoUnit = require('mongo-unit');

prepare(done => mongoUnit.start()
  .then((mongoURL) => {
    process.env.MONGO_URL = mongoURL;
    done();
  }));

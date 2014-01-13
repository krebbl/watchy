var office = require('office');
office.parse('/Users/mkre/Downloads/BGB-Gesellschaft.doc', function (err, data) {
    console.log(data);
});
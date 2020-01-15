

const {src, dest, watch } = require('gulp');
var concat = require('gulp-concat');

function jsBack() {
    return src(['asset/script/*.js'])
        .pipe(concat('all.js'))
        .pipe(dest('asset/js/'));
}
  
 exports.default = function () {
    watch('asset/script/*.js', jsBack);
   
};
  
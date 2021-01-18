 
// Include gulp and Plugins
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');


var baseSrc = "R:\\eCertsONLINE41\\";
var js_version = "2.0";
var css_version = "2";

// json
// var fs = require('fs');
// var obj = JSON.parse(fs.readFileSync('/ez/connections/config.json', 'utf8'));
// var config = baseSrc + "ez\\connections\\config.json";
// var config2 = require("/ez/connections/config.json");



var jsFiles = [
	baseSrc + "libs\\jquery\\1.11.3\\jquery.min.js", 
	baseSrc + "libs\\jquery-plugin\\jquerymask\\1.13.4\\jquery.mask.js",
	baseSrc + "libs\\jquery-plugin\\magnific-popup\\1.0.0\\jquery.magnific-popup.js",
	baseSrc + "ez\\javascript\\version\\" +js_version+ "\\ecerts.js"
]; 
var jsDest	= baseSrc + "ez\\javascript\\production\\";


var cssSrc = [ 	
	baseSrc + "libs\\font-awesome\\font-awesome-4.6.2\\css\\font-awesome.min.css",
	baseSrc + "libs\\jquery-plugin\\magnific-popup\\1.0.0\\css\\magnific-popup.css",
	baseSrc + "ez\\css\\mods\\animate\\animate.css",
	baseSrc + 'ez\\css\\ecerts.css',
	baseSrc + 'ez\\css\\utilities.css'
];
var cssDest	= baseSrc + "ez\\css\\production\\";



// Lint Task
gulp.task('lint', function() {
    return gulp.src(currentEcertsJS)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});



// Minify the CSS
gulp.task("css_minify", function() {
	return gulp.src (cssSrc)
	.pipe(minifyCSS())
	.pipe(concat("ecerts_" + css_version + ".css")) 
	.pipe(gulp.dest(cssDest))
})

// Concatenate  JS
gulp.task('js_concat', function(){
    return gulp.src(jsFiles)
        .pipe(concat("ecerts_" + js_version + ".js"))
        .pipe(gulp.dest(jsDest));
});

// minify js
gulp.task('js_uglify', function() {
  gulp.src(baseSrc + "ez\\javascript\\_deploy\\ecerts_" + js_version + ".js")
    .pipe(uglify())
    .pipe(gulp.dest(jsDest))
});

// concat & minify js
gulp.task('js', function(){
   gulp.src(jsFiles)
   .pipe(concat("ecerts_" + js_version + ".js"))
   .pipe(uglify())
   .pipe(gulp.dest(jsDest));
});


// Watch Files For Changes
// gulp.task('watch', function() {
//     gulp.watch('js/*.js', ['lint', 'scripts']);
//     gulp.watch('scss/*.scss', ['sass']);
// });


gulp.task('ecerts', ['css_minify', 'js'])
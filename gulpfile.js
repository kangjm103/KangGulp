/**
 * Created by Kang on 2018-04-23.
 */

// gulp 플러그인 호출
var gulp = require('gulp');
var babel = require('gulp-babel');
var ugly = require('gulp-uglify');
var stripDebug = require('gulp-strip-debug');   // 모든 console.log 들과 alert 들을 제거해주는 gulp 모듈 패키지

// Gulp.task() 를 사용해 combine:js 테스크를 정의
gulp.task('main', function () {
    // src 하위 디렉터리 내의 모든 자바스크립트 파일을 가져온다.
    // !는 바로 앞의 와일드카드 형태에서 이 파일을 포함하고 있을 경우에만 이것을 사용 가능
    return gulp
        .src([
            'src/**/*.js'
        ])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(stripDebug())
        .pipe(ugly({
            mangle: {
                toplevel: true
            }
        }))
        .pipe(gulp.dest('result'));
});

// Gulp.task() 를 사용해 기본(Default) 테스크를 정의
// Gulp.task 의 파라미터: ( 수행할 업무 이름, [task 를 수행하기 전에 먼저 실행되어야하는 task 들의 배열 목록>> 생략 가능], 처리해야할 업무 프로세스 )
gulp.task('default', ['main']);
// 必要プラグインの読み込み (var gulp = ~ でも可)

const gulp = require("gulp");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");

// webpackの設定ファイルの読み込み
const webpackConfig = require("./webpack.config");

// タスクの定義。 ()=> の部分はfunction() でも可
gulp.task("default", () => {
  // ☆ webpackStreamの第2引数にwebpackを渡す☆
  return webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest("dist"));
});

/*
const {src , dest } = require('gulp');

function copyFiles(){
  return src('./src/index.html');
  .pipe(dest('./dist'));
}

exports.copyFiles = copyFiles;
*/

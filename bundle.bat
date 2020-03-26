rem https://qiita.com/sta/items/8cab80fe74b8dcfa5336
rem バッチファイルでよく使う書き方まとめ
pushd "%~dp0"
npx gulp>>log.txt
call index.html
pause
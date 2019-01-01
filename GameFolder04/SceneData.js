//実際のゲームのシナリオが見えてしまうので
//必要部分のみ掲載

titlescene = {
  'DeleteCharactor':"",
  'SetChoiceScene': [" ▶︎ 始める","scene1"," ▶︎ 説明","aboutscene"],
}

aboutscene =
{
'DeleteCharactor':"",
'SetText': ['', 'とりあえずは登場人物の紹介をしましょう。'],
'SetNextSceneName':'aboutscene1'
}

aboutscene1 =
{
'DeleteCharactor':"",
'SetCharactorRight': 'mio1.jpg',
'SetText': ['', 'この娘は湊みお。ピュアパレットのピュアじゃない方です。'],
'SetNextSceneName':'aboutscene2'
}

aboutscene2 =
{
'DeleteCharactor':"",
'SetCharactorLeft': 'aine1.jpg',
'SetText': ['', 'この娘が友希あいねちゃん。ピュアパレットのピュアな方です。',
                'かわいいですね。(かわいいです)',
                'ちなみにこの写真は二人がフレンズを組んで 一度解散し、再結成した後のみおちゃんの電話の呼び出し画面の画像です。',
                'どう見ても盗撮しようとして気づかれたみたいな構図の写真だけども、みおちゃんが写真を撮らせてもらえないのか、',
                'それとも恥ずかしくて撮らせてと言えないのかはたまた盗撮行為が好きなのか。多分後者だろうね。'
              ],
'SetNextSceneName':'aboutscene3'
}

aboutscene3 =
{
'SetCharactorRight': 'mio1.jpg',
'SetText': ['', 'このゲームは'
              ],
'SetNextSceneName':'aboutscene4'
}


aboutscene4 = {
  'DeleteCharactor':"",
  'SetChoiceScene': [" ▶︎ 始める","scene1"," ▶︎ タイトルに戻る","titlescene"],
}

scene1 = {
  'DeleteCharactor':"",
  'SetText': ['','何も思いつかぬ','何が思いつかぬかというと、ノベルゲームの文章である','『この文章はサンプルです。兄が適当に執筆している為、実際のキャラクターが喋らない内容を書いている可能性があります。予めご了承ください'],
  'PlayBGM' : 'op.mp3',
  'SetNextSceneName':'scene2'
}

scene2 = {
  'SetText': ['シーン2','２壊滅','３壊滅'],
  'SetNextSceneName':'scene3'
}

scene3 = {
  'DeleteCharactor':"",
  'SetChoiceScene': [" ▶︎ タイトルに戻る","titlescene"],
}

titlescene = {
  'DeleteBG':"",
  'DeleteCharactor':"",
  'SetBackGroundImage':"title.png",
  'SetChoiceScene': [" ▶︎ 始める","scene1"," ▶︎ 説明","aboutscene"],
}

titlescene_back = {
  'DeleteCharactor':"",
  'SetChoiceScene': [" ▶︎ タイトルに戻る","titlescene"],
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
'SetCharactorRight': 'mio1.png',
'SetText': ['', 'この娘は湊みお。                                         ピュアパレットのピュアじゃない方です。'],
'SetNextSceneName':'aboutscene2'
}

aboutscene2 =
{
'DeleteCharactor':"",
'SetCharactorLeft': 'aine1.png',
'SetText': ['', 'この娘が友希あいねちゃん。                        ピュアパレットのピュアな方です。',
                'かわいいですね。(かわいいです)',
                'ちなみにこの写真は二人がフレンズを組んで 一度解散し、再結成した後のみおちゃんの電話の呼び出し画面の画像です。',
                'どう見ても盗撮しようとして気づかれたみたいな構図の写真だけども、みおちゃんが写真を撮らせてもらえないのか、',
                'それとも恥ずかしくて撮らせてと言えないのかはたまた盗撮行為が好きなのか。多分後者だろうね。'
              ],
'SetNextSceneName':'aboutscene3'
}

aboutscene3 =
{
'DeleteCharactor':"",
'SetCharactorLeft': 'koko1.png',
'SetText': ['', 'ついでに、アイカツ！ナビのココちゃん。            アイカツ！モバイルに「ハロー、ココちゃん！」    と呼びかけると出てきてくれるAIです。',
                '要はアイカツフレンズ!世界のSiriといったところでしょうか。',
                'AIのくせに一人しかいないらしく、忙しい時は呼んでも出でこなかったり、舌を噛んだり、自分にわからないことは人任せにして電話を勝手にかけるくらいの高性能AIです。'
              ],
'SetNextSceneName':'aboutscene4'
}

aboutscene4 = {
  'DeleteCharactor':"",
  'SetCharactorLeft': 'aine1.png',
  'SetCharactorRight': 'mio1.png',
  'SetText': ['', 'このゲームはあいねちゃんとみおちゃんがフレンズ(要はユニット)を組むまでのお話です。',
                  'みおちゃんとなって選択肢を選んでいき、あいねちゃんとフレンズを組みましょう。',
                  'アニメ本編が正解ルートなので間違ったりするとすぐ終わっちゃったりします。',
                  '終わらない場合もありますが、どれぐらい正しかったか%表示します。頑張って100%クリアを目指しましょう。第11話「告白はドラマチック！」本編通り進めばOKです。'
                ],
  'SetNextSceneName':'titlescene_back'
}


scene1 = {
  'DeleteCharactor':"",
  'DeleteBG':"",
  'SetBackGroundImage': '1.png',
  'SetText': ['友希あいね',
                  'これまでの『アイカツフレンズ！』。',
                  '私　友希あいね。',
                  'スターハーモニー学園に通う中学２年生。',
                  '学園のトップアイドル　湊みおちゃんと出会ってアイドル科に転入したんだ。'
              ],
  'SetNextSceneName':'scene2'
}

scene2 = {
  'SetCharactorRight': 'ema.png',
  'SetCharactorLeft': 'maika.png',
  'SetText': ['あいね',
              'ダンスとお祭りが大好きな舞花ちゃんと一つ上の先輩で　私たちを元気に引っ張ってくれるエマちゃん。',
              '凸凹だけどすっごく仲よしな２人はついにフレンズになった。',
              ],
  'SetNextSceneName':'scene3'
}

scene3 = {
  'DeleteCharactor':"",
  'SetText': ['あいね',
              'アイドルは　カードも友達　ファンも友達。',
              '目指せ　友達100万人！'
              ],
  'SetNextSceneName':'scene4'
}

scene4 = {
  'SetCharactorRight': 'ema.png',
  'DeleteBG':"",
  'SetBackGroundImage': 'school_room.png',
  'SetText': ['日向エマ',
              'プリティー！'
              ],
  'SetNextSceneName':'scene5'
}

scene5 = {
  'SetCharactorLeft': 'maika.png',
  'SetText': ['蝶乃舞花',
              'セクシー！'
              ],
  'SetNextSceneName':'scene6'
}

scene6 = {
  'DeleteCharactor':"",
  'DeleteBG':"",
  'SetBackGroundImage': '2.png',
  'SetText': ['二人',
              'ハニーキャット！'
              ],
  'SetNextSceneName':'scene7'
}

scene7 = {
  'DeleteBG':"",
  'SetCharactorLeft': 'aine2.png',
  'SetCharactorRight': 'ema.png',
  'SetBackGroundImage': 'school_room.png',
  'SetText': ['あいね',
              'うわ～！かっこいい！！'
              ],
  'SetNextSceneName':'scene8'
}

scene8 = {
  'DeleteCharactorl':"",
  'SetCharactorRight': 'mio2.png',
  'SetText': ['湊みお',
              'ハニーキャット…２人にぴったりなフレンズ名ね。'
              ],
  'SetNextSceneName':'scene9'
}

scene9 = {
  'SetText': ['あいね',
              'たしかに。舞花ちゃんもエマちゃんも猫っぽいイメージあるし。'
              ],
  'SetNextSceneName':'scene10'
}

scene10 = {
  'DeleteCharactorl':"",
  'SetCharactorRight': 'ema.png',
  'SetText': ['エマ',
              'でしょでしょ。フレンズ組もうってなったら２人で盛り上がっちゃって。コンセプトとか一から作り上げてくのってワクワクするよね。'
              ],
  'SetNextSceneName':'scene11'
}

scene11 = {
  'DeleteCharactorf':"",
  'SetCharactorLeft': 'maika.png',
  'SetText': ['舞花',
              'あのキメポーズはちょっと恥ずいんですけど…'
              ],
  'SetNextSceneName':'scene12'
}

scene12 = {
  'SetText': ['エマ',
              'え～っ！？舞花だってノリノリで考えてたじゃん！'
              ],
  'SetNextSceneName':'scene13'
}

scene13 = {
  'SetText': ['舞花',
              'あのときは…。エマとフレンズを組めたからテンション上がっちゃって…。'
              ],
  'SetNextSceneName':'scene14'
}

scene14 = {
  'SetText': ['エマ',
              'うんうん。かわいいやつめ！'
              ],
  'SetNextSceneName':'scene15'
}

scene15 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': 'aine2.png',
  'SetText': ['あいね',
              '二人ともすっごく楽しそう。フレンズっていいな〜。'
              ],
  'SetNextSceneName':'scene16'
}

scene16 = {
  'DeleteCharactorf':"",
  'SetCharactorRight': 'mio2.png',
  'SetText': ['みお',
              '……………'
              ],
  'SetNextSceneName':'scene17'
}

scene17 = {
  'SetChoiceScene': [" ▶︎ ……………","scene18"," ▶︎ 「あいね！                                                        私達もフレンズを組みましょう！」","scene0"],
}

scene18 = {
  'DeleteCharactor':"",
  'SetCharactorRight': 'mio3.png',
  'SetText': ['みお',
              '……………'
              ],
  'SetNextSceneName':'scene19'
}

scene19 = {
  'DeleteCharactor':"",
  'DeleteBG':"",
  'SetBackGroundImage': '3.png',
  'SetText': ['',
              'その晩　みおの自室',
              '(明らかに晩じゃないけど画像がないからしゃあない。)'
              ],
  'SetNextSceneName':'scene20'
}

scene20 = {
  'SetCharactorRight': 'mio2.png',
  'SetText': ['みお',
              'フレンズを組むのは、やっぱりあいねしかいない。まずは…'
              ],
  'SetNextSceneName':'scene21'
}

scene21 = {
  'SetChoiceScene': [" ▶︎ 告白の練習","scene0"," ▶︎ 相性を占いで確かめる","scene0"," ▶︎ 両方","scene22"],
}

scene22 = {
  'DeleteCharactor':"",
  'DeleteBG':"",
  'SetBackGroundImage': '4.png',
  'SetText': ['みお',
              'あいね、私とフレンズになりましょう。'
              ],
  'SetNextSceneName':'scene23'
}

scene23 = {
  'DeleteBG':"",
  'SetBackGroundImage': '5.png',
  'SetCharactorRight': 'mio2.png',
  'SetText': ['みお',
              'フゥ…。',
              '古今東西あらゆる占いで私とあいねの相性はバッチリだってわかったし…。',
              'それに何より私の直感があいねとフレンズを組めばすごいことが起きるってビビっと訴えかけてる。',
              'あとは…'
              ],
  'SetNextSceneName':'scene24'
}

scene24 = {
  'SetChoiceScene': [" ▶︎ ドラマチックな展開のフレンズ結成ね。","scene25"," ▶︎ 今すぐあいねに電話をかけましょう。","scene0"],
}

scene25 = {
  'SetText': ['みお',
              'あとはドラマチックな展開あってのフレンズ結成ね。',
              'そう…ラブミーティアの二人みたいに。'
              ],
  'SetNextSceneName':'scene26'
}

scene26 = {
  'SetText': ['',
              'ラブミーティアの結成について復習しておく？'
              ],
  'SetNextSceneName':'scene27'
}

scene27 = {
  'SetChoiceScene': [" ▶︎ はい","scene28"," ▶︎ いいえ","scene38"],
}

scene28 = {
  'DeleteCharactor':"",
  'DeleteBG':"",
  'SetBackGroundImage': '6.png',
  'SetText': ['みお',
              'ラブミーティアのドラマチック極まりない結成エピソードは　もはや伝説。',
              'いえ、アイカツ界における神話とすらなっている。'
              ],
  'SetNextSceneName':'scene29'
}

scene29 = {
  'SetCharactorRight': 'mirai.png',
  'SetCharactorLeft': 'karen.png',
  'DeleteBG':"",
  'SetBackGroundImage': 'school_room.png',
  'SetText': ['みお',
              'スターハーモニー学園に入ってトップアイドルに駆け上がったカレンさんとミライさん。',
              '二人は出会ってすぐに意気投合したのだけど　フレンズ結成にはあと一歩踏み込めないでいた。'
              ],
  'SetNextSceneName':'scene30'
}

scene30 = {
  'DeleteCharactor':"",
  'DeleteBG':"",
  'SetBackGroundImage': '7.png',
  'SetText': ['みお',
              'そんなとき　二人を揺るがす大事件が！'
              ],
  'SetNextSceneName':'scene31'
}

scene31 = {
  'SetCharactorRight': 'karen.png',
  'DeleteBG':"",
  'SetBackGroundImage': 'airport.png',
  'SetText': ['みお',
              'カレンさんは世界的プロデューサーからアイドルとしてプロデュースしたいというオファーを受けてアメリカに旅立つことになったのだ。'
              ],
  'SetNextSceneName':'scene32'
}

scene32 = {
  'SetCharactorLeft': 'mirai.png',
  'SetText': ['ミライ',
              'カレン！',
              'ハァ…ハァ…ハァ…。'
              ],
  'SetNextSceneName':'scene33'
}

scene33 = {
  'SetText': ['カレン',
              'ミライさん…。'
              ],
  'SetNextSceneName':'scene34'
}

scene34 = {
  'SetText': ['ミライ',
              'アメリカになんて行かせない。カレンをいちばん輝かせることができるのは…。',
              '私なんだから！'
              ],
  'SetNextSceneName':'scene35'
}

scene35 = {
  'SetText': ['カレン',
              '…！',
              'はい 知ってました。'
              ],
  'SetNextSceneName':'scene36'
}

scene36 = {
  'DeleteCharactor':"",
  'DeleteBG':"",
  'SetBackGroundImage': '8.png',
  'SetText': ['みお',
              'こうして二人はラブミーティアを結成したのであった…。'
              ],
  'SetNextSceneName':'scene37'
}

scene37 = {
  'DeleteCharactor':"",
  'DeleteBG':"",
  'SetBackGroundImage': '9.png',
  'SetText': ['みお',
              'う～っ…ハァ！何度読んでもやっぱりいい！！ずっと憧れていた…。私もフレンズを組むならこんなふうにドラマチックにって。'
              ],
  'SetNextSceneName':'scene38'
}

scene38 = {
  'DeleteCharactor':"",
  'DeleteBG':"",
  'SetBackGroundImage': '5.png',
  'SetCharactorRight': 'mio2.png',
  'SetText': ['みお',
              'ドラマチックな告白か…。',
              'う〜ん…　考えてみると難しい。',
              '自分がやるとなると想像がつかないというか。'
              ],
  'SetNextSceneName':'scene39'
}

scene39 = {
  'SetChoiceScene': [" ▶︎ ココちゃんに相談してみましょう。","scene40"," ▶︎ 諦める","scene0"],
}


scene40 = {
  'SetText': ['みお',
              'ハロー　ココちゃん。'
              ],
  'SetNextSceneName':'scene41'
}

scene41 = {
  'SetCharactorLeft': 'koko2.png',
  'SetText': ['ココ',
              'ココだよ。'
              ],
  'SetNextSceneName':'scene0'
}

scene0 = {
  'DeleteBG':"",
  'DeleteCharactor':"",
  'SetText': ['',
              'ここから先は出来てません。'
              ],
  'SetNextSceneName':'titlescene_back'
}

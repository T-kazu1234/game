titlescene = {
  'DeleteBG':"",
  'DeleteCharactor':"",
  'SetBackGroundImage':"./image/BackGround/title.png",
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
'SetCharactorRight': './image/Character/mio1.png',
'SetText': ['', 'この娘は湊みお。ピュアパレットのピュアじゃない方です。'],
'SetNextSceneName':'aboutscene2'
}

aboutscene2 =
{
'DeleteCharactor':"",
'SetCharactorLeft': './image/Character/aine1.png',
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
'DeleteCharactor':"",
'SetCharactorLeft': './image/Character/koko0.png',
'SetText': ['', 'ついでに、アイカツ！ナビのココちゃん。　アイカツ！モバイルに「ハロー、ココちゃん！」　と呼びかけると出てきてくれるAIです。',
                '要はアイカツフレンズ!世界のSiriといったところでしょうか。',
                'AIのくせに一人しかいないらしく、忙しい時は呼んでも出でこなかったり、舌を噛んだり、自分にわからないことは人任せにして電話を勝手にかけるくらいの高性能AIです。'
              ],
'SetNextSceneName':'aboutscene4'
}

aboutscene4 = {
  'DeleteCharactor':"",
  'SetCharactorLeft': './image/Character/aine1.png',
  'SetCharactorRight': './image/Character/mio1.png',
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
  'SetCharactorRight': './image/Character/ema.png',
  'SetCharactorLeft': './image/Character/maika.png',
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
  'SetCharactorRight': './image/Character/ema.png',
  'DeleteBG':"",
  'SetBackGroundImage': 'school_room.png',
  'SetText': ['日向エマ',
              'プリティー！'
              ],
  'SetNextSceneName':'scene5'
}

scene5 = {
  'SetCharactorLeft': './image/Character/maika.png',
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
  'SetCharactorLeft': './image/Character/aine2.png',
  'SetCharactorRight': './image/Character/ema.png',
  'SetBackGroundImage': 'school_room.png',
  'SetText': ['あいね',
              'うわ～！かっこいい！！'
              ],
  'SetNextSceneName':'scene8'
}

scene8 = {
  'DeleteCharactorl':"",
  'SetCharactorRight': './image/Character/mio2.png',
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
  'SetCharactorRight': './image/Character/ema.png',
  'SetText': ['エマ',
              'でしょでしょ。フレンズ組もうってなったら２人で盛り上がっちゃって。コンセプトとか一から作り上げてくのってワクワクするよね。'
              ],
  'SetNextSceneName':'scene11'
}

scene11 = {
  'DeleteCharactorf':"",
  'SetCharactorLeft': './image/Character/maika.png',
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
  'SetCharactorLeft': './image/Character/aine2.png',
  'SetText': ['あいね',
              '二人ともすっごく楽しそう。フレンズっていいな〜。'
              ],
  'SetNextSceneName':'scene16'
}

scene16 = {
  'DeleteCharactorf':"",
  'SetCharactorRight': './image/Character/mio2.png',
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
  'SetCharactorRight': './image/Character/mio3.png',
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
  'SetCharactorRight': './image/Character/mio2.png',
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
  'SetCharactorRight': './image/Character/mio2.png',
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
  'SetCharactorRight': './image/Character/mirai.png',
  'SetCharactorLeft': './image/Character/karen.png',
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
  'SetCharactorRight': './image/Character/karen.png',
  'DeleteBG':"",
  'SetBackGroundImage': 'airport.png',
  'SetText': ['みお',
              'カレンさんは世界的プロデューサーからアイドルとしてプロデュースしたいというオファーを受けてアメリカに旅立つことになったのだ。'
              ],
  'SetNextSceneName':'scene32'
}

scene32 = {
  'SetCharactorLeft': './image/Character/mirai.png',
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
  'SetCharactorRight': './image/Character/mio2.png',
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
  'SetCharactorLeft': './image/Character/koko1.png',
  'SetText': ['ココ',
              'ココだよ。'
              ],
  'SetNextSceneName':'scene42'
}

scene42 = {
  'SetChoiceScene': [" ▶︎ フレンズの誘い方を教えて。","scene0"," ▶︎ ドラマチックな告白について教えて。","scene43"," ▶︎ あいねのアイカツモバイルを盗聴して。","scene0"],
}

scene43 = {
  'SetText': ['みお',
              'ドラマチックな告白について教えて。'
              ],
  'SetNextSceneName':'scene44'
}

scene44 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': './image/Character/koko2.png',
  'SetText': ['ココ',
              'ココろえ…'
              ],
  'SetNextSceneName':'scene45'
}

scene45 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': './image/Character/koko3.png',
  'SetText': ['ココ',
              'え～っ！？ドラマチックな告白？'
              ],
  'SetNextSceneName':'scene46'
}

scene46 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': './image/Character/koko4.png',
  'SetText': ['ココ',
              'そ…それって恋愛について知りたいってことだよね？'
              ],
  'SetNextSceneName':'scene47'
}

scene47 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': './image/Character/koko5.png',
  'SetText': ['ココ',
              'さすがみおちゃん大人だ！'
              ],
  'SetNextSceneName':'scene48'
}

scene48 = {
  'SetChoiceScene': [" ▶︎ はい","scene0"," ▶︎ いいえ","scene49"],
}

scene49 = {
  'SetText': ['みお',
              '違う違う。フレンズになってくださいってドラマチックに告白するにはってこと。'
              ],
  'SetNextSceneName':'scene50'
}

scene50 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': './image/Character/koko6.png',
  'SetText': ['ココ',
              'あっ…'
              ],
  'SetNextSceneName':'scene51'
}

scene51 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': './image/Character/koko7.png',
  'SetText': ['ココ',
              'そういうことか。'
              ],
  'SetNextSceneName':'scene52'
}

scene52 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': './image/Character/koko1.png',
  'SetText': ['ココ',
              'ドラマチックな告白で検索。'
              ],
  'SetNextSceneName':'scene53'
}

scene53 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': './image/Character/koko8.png',
  'SetText': ['ココ',
              'あっ。'
              ],
  'SetNextSceneName':'scene54'
}

scene54 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': './image/Character/koko1.png',
  'SetText': ['ココ',
              'こんな結果が出たよ。'
              ],
  'SetNextSceneName':'scene55'
}

scene55 = {
  'SetText': ['みお',
              '映画館で　ドラマチックに…。'
              ],
  'SetNextSceneName':'scene56'
}

scene56 = {
  'DeleteCharactor':"",
  'DeleteBG':"",
  'SetBackGroundImage': '10.png',
  'SetText': ['イメージ',
              '(なぜか他に客がいない映画館)'
              ],
  'SetNextSceneName':'scene57'
}

scene57 = {
  'DeleteBG':"",
  'SetBackGroundImage': '11.png',
  'SetText': ['イメージ',
              '(おそらくペンギンが二時間ほどかっこつけるだけの映画)'
              ],
  'SetNextSceneName':'scene58'
}

scene58 = {
  'DeleteBG':"",
  'SetBackGroundImage': '12.png',
  'SetText': ['イメージ',
              '(突然途切れる映像)'
              ],
  'SetNextSceneName':'scene59'
}

scene59 = {
  'DeleteBG':"",
  'SetBackGroundImage': '13.png',
  'SetText': ['映像　みお',
              'あいね　私とフレンズになりましょう。'
              ],
  'SetNextSceneName':'scene60'
}

scene60 = {
  'DeleteBG':"",
  'SetBackGroundImage': '14.png',
  'SetText': ['あいね',
              'わぁ…'
              ],
  'SetNextSceneName':'scene61'
}

scene61 = {
  'DeleteBG':"",
  'SetBackGroundImage': '15.png',
  'SetText': ['あいね',
              'うん！！'
              ],
  'SetNextSceneName':'scene62'
}

scene62 = {
  'SetChoiceScene': [" ▶︎ うん！　これよ！！","scene0"," ▶︎ いや…　ないわね。","scene63"],
}

scene63 = {
  'DeleteBG':"",
  'SetBackGroundImage': '5.png',
  'SetCharactorRight': './image/Character/mio2.png',
  'SetCharactorLeft': './image/Character/koko1.png',
  'SetText': ['みお',
              'いや…　ないわね。'
              ],
  'SetNextSceneName':'scene64'
}

scene64 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': './image/Character/koko9.png',
  'SetText': ['ココ',
              'そっか。'
              ],
  'SetNextSceneName':'scene65'
}

scene65 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': './image/Character/koko10.png',
  'SetText': ['ココ',
              'だったら…。'
              ],
  'SetNextSceneName':'scene66'
}

scene66 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': './image/Character/koko11.png',
  'SetText': ['ココ',
              'う〜ん…。'
              ],
  'SetNextSceneName':'scene67'
}

scene67 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': './image/Character/koko8.png',
  'SetText': ['ココ',
              '(ピコン)'
              ],
  'SetNextSceneName':'scene68'
}

scene68 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': './image/Character/koko1.png',
  'SetText': ['みお',
              'ゲーム感覚でドラマチックに…。'
              ],
  'SetNextSceneName':'scene0'
}

dbscene = {
  'DeleteBG':"",
  'DeleteCharactor':"",
  'SetText': ['',
              'それなりに飛びます。'
              ],
  'SetNextSceneName':'scene63'
}

scene0 = {
  'DeleteBG':"",
  'DeleteCharactor':"",
  'SetText': ['',
              'ここから先は出来てません。'
              ],
  'SetNextSceneName':'titlescene_back'
}

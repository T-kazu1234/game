//背景画像指定./image/BackGround/に変更する（今はバグるので諦める）
//キャラ画像指定


titlescene = {
  'DeleteBG':"",
  'DeleteCharactor':"",
  'SetBackGroundImage':"BackGround_00_00.jpg",//タイトル画像
  'SetChoiceScene': [" ▶︎ 始める","scene1"," ▶︎ 説明","aboutscene"],
}

titlescene_back = {
  'DeleteCharactor':"",
  'SetChoiceScene': [" ▶︎ タイトルに戻る","titlescene"],
}


dbscene = {
  'DeleteBG':"",
  'DeleteCharactor':"",
  'SetText': ['',
              'それなりに飛びます。'
              ],
  'SetNextSceneName':'scene11'//デバッグモード用▷一気に指定シーンへ移動する
}

aboutscene =
{
'DeleteCharactor':"",
'SetText': ['',
'','説明文'
 ],

'SetNextSceneName':'aboutscene1'
}

//１　猫猫
aboutscene1 =
{
'DeleteCharactor':"",
//'SetCharactorRight': 'mio1.png',
'SetBackGroundImage':"BackGround_01_00.png",//背景単色_黒
'SetText': ['',
//***区切り********************************************************
'『？？？？』　　　　　　　　　　　　　'+
'（露天の串焼きが食べたいなあ）'+
'　　　　　　　　　　　　　　　　　　　'
//***区切り********************************************************
],
'SetNextSceneName':'aboutscene2'
}
//１　猫猫
aboutscene2 =
{
'SetBackGroundImage_fadeIN':"BackGround_01_01.jpg",//曇天
'SetText': ['',
//***区切り********************************************************
'曇天【ドンテン】を見上げて　　　　'+
'猫猫【マオマオ】は溜息をついた。'+
'　　　　　　　　　　　　　　　　　　　',
//***区切り********************************************************
'周りは自分が今まで見た中で　　　　'+
'最も美しくきらびやかな世界、　　　　'+
'そして瘴気蠢く【ショウキウゴメく】'+
'濁った澱【ニゴったオリ】の中だった。',
//***区切り********************************************************
'『猫猫【マオマオ】』　　　　　　　'+
'（もう三か月かあ・・・、おやじ、飯食ってんだろうか）',
//***区切り********************************************************
],
'SetNextSceneName':'aboutscene3'
}

//１　猫猫
aboutscene3 =
{
'SetBackGroundImage_fadeIN':"BackGround_02_00.jpg",//ナンカヒラメキ草
'SetText': ['', 
//***区切り********************************************************
'先日、薬草を探しに森に出かけてみれば出会ったのは、村人その壱、弐、参という名の人さらいだった。',	
//***区切り********************************************************
'まったく強大で迷惑極まりない結婚活動、略して婚活、宮廷の女狩りである。',
//***区切り********************************************************
'まあ、給金はもらえるし、二年ほど働けば市井に戻れなくもないので、就職先としては悪くないのだが、それは個人の意思で来た場合である。',
//***区切り********************************************************
'薬師【クスシ】としてそれなりの生活をしていた猫猫【マオマオ】にははた迷惑な話なのだ。',
//***区切り********************************************************
'人さらいどもは、妙齢【ミョウレイ】の娘を捕まえては宦官【カンガン】に売り酒代を稼いだか、それとも己の娘の身代わりにさせたのか猫猫【マオマオ】にはどうでもいい話である。',
//***区切り********************************************************
'どんな理由があれ、とばっちりを受けたのは変わらないのである。',
//***区切り********************************************************
'でなければ、後宮【コウキュウ】なる場所に一生関わりたくなかった。',
//***区切り********************************************************
'むせ返る化粧と香【ケショウとコウ】'+
'美しい衣を纏った【コロモをマトった】'+
'女官の唇【ニョカンのクチビル】には'+
'薄っぺらい笑みが張り付いていた。',
//***区切り********************************************************
],
'SetNextSceneName':'aboutscene4'
}


//１　猫猫
aboutscene4 = {
'SetBackGroundImage_fadeIN':"BackGround_04_00.png",
  'SetText': ['', 
//***区切り********************************************************
'薬屋をやってきて思うこと、　　　　'+
'女の笑みほど恐ろしい毒はないと・・・',
//***区切り********************************************************
'そして、それは殿上人の住まう御殿も城下の花街も変わらないのだと。',
//***区切り********************************************************
],
  'SetNextSceneName':'scene5'
}


scene1 = {
'DeleteCharactor':"",
//'SetCharactorRight': 'mio1.png',
'SetBackGroundImage':"BackGround_01_00.png",//背景単色_黒
'SetText': ['',
//***区切り********************************************************
'『？？？？』　　　　　　　　　　　　　'+
'（露天の串焼きが食べたいなあ）'+
'　　　　　　　　　　　　　　　　　　　'
//***区切り********************************************************
],
'SetNextSceneName':'aboutscene2'
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
'SetBackGroundImage':"BackGround_01_00.png",//黒
'DeleteCharactor':"",
//'SetCharactorLeft':"Charactor01_01.png",
'SetText': ['',
//***区切り********************************************************
'足元に置いた洗濯籠【センタクカゴ】を抱え、建物の奥に向かう。　　　　　'+
'表とは違い、殺風景な中庭には石畳の水場があり、男とも女ともつかない召使たちが大量の洗濯物を洗っていた。',
//***区切り********************************************************
'後宮は基本男子禁制である。　　　　'+
'入れるのは、国で最も高貴なかたとその血縁、あと大切なものを失った元男性だけである。もちろん、そこにいるのは後者である。',
//***区切り********************************************************
'歪【イビツ】だと思いつつ、それが利にかなっているからやっていることなのだろうと猫猫【マオマオ】は考える。',
//***区切り********************************************************
'籠を置くと、そばの建物の中にある並べられた籠を見る。汚れ物ではなく、日の当たった洗濯済みのものだ。',
//***区切り********************************************************
'持ち手にかけられた木札を見る。植物を模した絵と数字が書かれている。',
//***区切り********************************************************
'女官の中には字が読めないものもいる、なんせ人さらいのごとく攫われたものさえいるのだから。',
//***区切り********************************************************
'宮廷に連れ込まれる前に最低限の礼儀くらいは教えられるが、文字となると難しい。識字率は田舎の娘で半分越せばいいほうなのである。',
'大きくなり過ぎた後宮の弊害といえる、量は増えたが質が悪い。',
//***区切り********************************************************
'先帝の花の園には到底及ばないものの、妃、女官合わせて二千人、宦官を加えると三千の大所帯だった。',
'猫猫はその中で最下層の下女であり、官職すらもらっていない。特に後ろ盾もなく、攫われて数合わせにされた娘にはそれが妥当なところである。',
//***区切り********************************************************
'まあ、牡丹のような豊満な肉体や、　'+
'満月のような白い肌でも持っていれば　'+
'まだ、下妃の位につける可能性もあったかもしれないが、'
],
  'SetNextSceneName':'scene6'
}





scene6 = {
'SetBackGroundImage':"BackGround_03_00.jpg",//後宮カースト
'DeleteCharactor':"",
'SetCharactorLeft':"Charactor01_01.png",
'SetText': ['',
//***区切り********************************************************
'猫猫の持つのはそばかすの浮いた健康的な肌と枯れ枝のような手足くらいである。',
//***区切り********************************************************
'（はやく仕事終わらせよう）',
'梅の花と『壱七』と書かれた札の籠を見つけると、小走りに歩く。重く曇った空が泣き出す前に部屋に戻りたかった。',
//***区切り********************************************************
'籠の洗濯物の主は、下級妃嬪である。与えられた個室は他の下妃に比べ調度の質が豪華だが派手すぎる。',
//***区切り********************************************************
'部屋の主は、豪商の娘かなにかと予想される。位持ちともなれば自分専用の下女を持つことができるが、位の低い妃はせいぜい二人までしか置くことができない。',
//***区切り********************************************************
'ゆえに、猫猫のような特に仕えるべき主人のいない下女がこうして洗濯物を運んだりするのである。',
//***区切り********************************************************
'下級妃嬪は後宮内で個室を持つことを許されているが、　　　　　　　　　　'+
'場所は宮内の端にあり、皇帝の目につくことはめったにない。　　　　　　　',
//***区切り********************************************************
'それでも、一度でも夜伽を命じられれば部屋の移動ができ、二度目の御手付きは出世を意味している。',
//***区切り********************************************************
'一方、食指を動かされることなく　　'+
'適齢を過ぎた妃は、よほど実家の権力がない限り位が下げられるなり、　　　'+
'最悪、下賜【カシ】されてしまう。',
//***区切り********************************************************
'それが不幸かどうかは相手にもよるが'+
'宦官に下賜されることを官女たちは一番恐れているようだ。',
//***区切り********************************************************
'猫猫は扉を軽く叩く。',
//***区切り********************************************************
'『部屋付の侍女』　　　　　　　　　　　'+
'「そこにおいといて」',
//***区切り********************************************************
'扉を開け無愛想な返事をするのは、部屋付の侍女だった。',
'中では、甘ったるい匂いを漂わせた妃が酒杯を揺らしている。',
'宮内に入る前は誉めそやされた美しい容姿であるが、所詮、井の中の蛙だったのであろう。絢爛の花々に気圧され、鼻っ柱を折られ、最近は部屋の外にも出ようとしなくなった。',
//***区切り********************************************************
'『猫猫【マオマオ】』　　　　　　　'+
'（部屋の中じゃあ、だれも迎えに来てくれないよ）',
//***区切り********************************************************
'猫猫は隣の部屋の洗濯籠をもらうと、また洗い場に戻った。',
'仕事はまだたくさん残っている。',
'好きできたわけではないが、お給金はいただいているのでその分の働きはするつもりである。',
'基本は真面目、それが元薬屋猫猫である。',
'大人しく働いていればそのうち出られる。',
'まさか、御手付きになることはありえないだろう。',
'残念なことに猫猫の考えは甘かったといえる。',
'何が起こるかわからない、それが人生というものだ。',
'齢十七の娘にしては達観した思考の持ち主であるが、それでも抑えられないものがあった。',
'好奇心と知識欲。',
'そして、ほんの少しの正義感。',
'この数日後、猫猫はある怪奇の真相を暴くことになる。',
'後宮で生まれる乳幼児の連続死。',
'先代の側室の呪いだと言われたそれは猫猫にとって怪奇でもなんでもなかった。',
//***区切り********************************************************
//２　二人の妃
'広い食堂には数百人の下女が朝餉をいただいていた。内容は汁物と雑穀の粥である。',
'斜め前に座っている下女が噂話を続ける。気の毒そうな表情をしているが、それ以上に好奇心が目の奥で輝いていた。',
'「あーあ、やっぱりそうなんだ」'
],
  'SetNextSceneName':'scene7'
}

scene7 = {
  'SetChoiceScene': [" ▶︎ ……………","scene18"," ▶︎汁物をすすりながら猫猫は耳を傾ける。","scene8"],
}

scene8 = {
AddPlayerStatusFlag:["下女達の会話を聞く",!0],
'SetBackGroundImage':"BackGround_03_00.jpg",//後宮カースト
'DeleteCharactor':"",
'SetCharactorLeft':"Charactor01_01.png",
'SetText': ['『下女Ａ』',
'「あーあ、やっぱりそうなんだ」'],
'SetText': ['『下女Ｂ』',
'『下女Ｂ』　　　　　　　　　　　　'+
'「ええ、お医者様が入っていったのを見たって」',
'『下女Ｂ』　　　　　　　　　　　　'+
'「玉葉さまのところも、梨花さまのところにも」',
'『下女Ａ』　　　　　　　　　　　　'+
'「うわー、二人ともなんだ。まだ、半年と三か月だっけ？」',
'『下女Ｂ』　　　　　　　　　　　　'+
'「そうそう、やっぱり呪いなのかしらね」',
'でてきた名前は、皇帝のお気に入りの妃たちの名前である。半年と三か月というのはそれぞれが生んだ宮のことであろう。',
'宮内では噂話が闊歩する。それは、帝の御手付きの宮女の話やお世継ぎについて、はたまたいじめや僻みによる悪評もあれば、うだる暑さにふさわしい怪談めいたものまである。',
'「そうよね、でなければ三人も亡くなられるわけないわ」'
],
  'SetNextSceneName':'scene7'
}



scene18 = {SelectMethodHasTrue:["下女達の会話を聞く ==true","scene18A","scene18B"]},


scene18A = {
  'SetText': ['','気になったことは？',],
  'SetNextSceneName':'scene19A'
}

/*
scene2 = {
  'SetCharactorRight': 'ema.png',
  'SetCharactorLeft': 'maika.png',
  'SetText': ['あいね',
              'ダンスとお祭りが大好きな舞花ちゃんと一つ上の先輩で　私たちを元気に引っ張ってくれるエマちゃん。',
              '凸凹だけどすっごく仲よしな２人はついにフレンズになった。',
              ],
  'SetNextSceneName':'scene3'
}
*/

scene19A = {
  'SetChoiceScene': [" ▶︎ 玉葉さまと梨花さま","scene11"," ▶︎ まだ、半年と三か月","scene12"," ▶□三人も亡くなった","scene8"],
}



scene18B = {
  'SetChoiceScene': [" ▶︎ 死因について","scene11"," ▶︎　状況は？","scene8"],
}

//'（どういうふうに亡くなられたのだろう？）',
/*
白湯を含みながら猫猫は考えるがそれは違うと結論に至る。',
'三人の子どものうち、二人は公主だったからだ。男子にのみ継承権の与えられる中で、姫君を殺す理由などほとんどない。',
'それは、妃たちの生んだ子ども、つまり世継ぎとなられる宮たちのことを指していた。東宮時代に一人、皇帝になられてから二人、どれも乳幼児のころに見まかられている。幼子の死亡率が高いのは当たり前であるが、殿上人の子が三人ともとなるとおかしい。',
'現在、玉葉妃と梨花妃の二人の子どもだけが生き残っている。',
'前に座っている二人は箸も進めず、呪いだの祟りだの言っている。',
'（だからといって呪いはねえ）',
'くだらない、その一言である。呪いをかけるだけで一族郎党皆殺しとなる法がある中に猫猫の考えはむしろ異端といえる。しかし、猫猫の頭にはそれが言い切れる根拠となる知識があった。',
'無愛想で無口と言われた下女がおしゃべりな下女たちに話しかけたのはそのときだった。',
'好奇心に負けて後悔するのはそれからしばらくのことである。',
'「くわしくは知らないけど、皆、だんだん弱っていったんだってー」',
'おしゃべりな下女、小蘭は猫猫が話しかけてきたことに興味を持ったらしく、その後もことあるごとに噂話を教えてくれた。',
*/


scene11 = {
  'DeleteCharactorf':"",
//  'SetCharactorLeft': 'maika.png',
'SetText': ['『下女Ａ』',
'「お医者さまの訪問回数から、梨花さまのほうが重いのかしら？」'+
'窓の桟を絞った雑巾で拭きながら言った。',
//***区切り********************************************************
'「梨花さまご自身？」',
//***区切り********************************************************
'「ええ、母子ともによ」',
//***区切り********************************************************
'医師が梨花妃のほうに出向くのは、　'+
'病の重さというより　　　　　　　　　'+
'東宮※①【トウグウ】だからであろう。玉葉妃の子は公主※②【コウシュ】である。',
'※①：東宮【トウグウ】古代中国で、宮殿が皇居の東にあったところから皇太子のこと。及び 皇太子の宮殿。',
'※②：公主【コウシュ】中国において皇帝の娘のこと',

//***区切り********************************************************
'帝のご寵愛は玉葉妃のほうに重いが、生まれてくる子に性差があればどちらを重きに置くかは明白である。',
'「さすがに詳しい症状はわからないけど、頭痛とか腹痛とか、吐き気もあるっていうけど」',
'小蘭は知っていることをすべて話すと満足したらしく、次の仕事に向かう。',
'猫猫はお礼代わりに、甘草入りの茶を渡す。中庭の隅に生えていたもので作ったのだ。薬臭いが甘味は強い。甘味を滅多に食べられない下女はとても喜んでくれた。',
'（頭痛に腹痛に吐き気か）',
'思い当る症状だったが、決定打はない。',
],
  'SetNextSceneName':'scene9'
}


/*
'予測だけで物事を考えるのはいけないと、散々おやじどのから言われていた。',
'（ちいとばかし、行ってみるか）',
'猫猫は手早く仕事を終わらせることにした。',
'後宮と一括りに言ってもその規模は広大である。常時、二千人の官女に、泊まり込みの宦官は五百をこえる。',
'猫猫たち下女は大部屋に十人単位で詰め込まれているが、下妃は部屋持ち、中妃は棟持ち、上妃は宮持ちと大きくなり、食堂、庭園を含めればそこいらの町よりもずっと広いのだ。',
'ゆえに、猫猫は自分の持ち場である東側を出ることはない。用事を言いつけられたときぐらいしか離れる暇はない。',
'（用事がなければ作ればいいだけ）',
'猫猫は籠を持った女官に話しかける。女官の持っている籠には、上等の絹が入っており、西側の水場で洗わねばならなかった。水質に差があるのか、それとも洗う人間の違いなのか、東側で洗うとすぐに傷んでしまうのである。',
'猫猫は、絹の劣化は陰干しするかしないかの違いだとわかっていたが、それをいう必要はない。',
'「中央にいるというものすごく綺麗な宦官を見てみたい」',
'小蘭からついでに聞いた話をすると、快くかわってくれた。',
'色恋の刺激の少ないここでは、宦官ですら刺激の対象になるらしい。女官を辞めた後、宦官の妻になるという話はちらほら聞く。女色に比べればまだ健全なのだろうが、やはり首を傾げてしまう。',
'（そのうち自分もこうなるのだろうか？）',
'己の問いかけに猫猫は腕を組んで唸った。',
'足早に洗濯籠を届けると、中央に位置する赤塗の建物を見る。東のはずれよりも洗練された、手の込んだ宮である。',
'現在、後宮で一番大きな部屋に住むのは、東宮のご生母梨花妃である。帝が后を持たぬ中、男児を唯一持つ梨花妃がここの最高権力者といえる。',
'そんな中、見えた光景はさほど市井と変わらないものだった。',
'罵る女とうつむく女と狼狽える女たちと仲裁する男である。',
'（妓楼とあんまり変わらないな）',
'至極冷静な感想を持ち、第三者、つまり野次馬に加わる猫猫。',
'罵る女は後宮の最高権力者で、うつむく女はそれに次ぐ存在、狼狽えるのは侍女たちで、仲裁に入るのはすでに男でなくなった薬師だと、周りのささやきと風貌からわかった。',
'「おまえが悪いんだ。自分が娘を産んだからって、男子の吾子を呪い殺す気だろう！」',
'美しい顔は歪むとそれは恐ろしいものになる。幽鬼のような白い肌と悪鬼のごときまなざしは、頬に手を添える美女に向けられている。',
'「そんなわけないとわかっているでしょう。小鈴も同じように苦しんでいるのですから」',
'赤い髪に翡翠の目を持つ女性は、冷静に答える。西方の血を色濃く継ぐ玉葉妃は顔を上げると医者の顔を見る。',
'「ですので、娘のほうの容体も見ていただきたいのです」',
'仲裁に入ったものの、原因は医師にあるらしい。',
'医者が東宮ばかり見て、自分の娘を見ないことに抗議をしにきたようである。',
'母親としてはわからなくもないが、後宮という仕組みから男児優先は当然である。',
'医師にしてみれば、いわれのないと言いたい顔であるのだが。',
'（馬鹿だろう、あのやぶ）',
'妃二人のあんなに近くにいて気づかないとは。いや、それ以前に知らないのか？',
'乳幼児の死亡、頭痛、腹痛、吐き気。そして、梨花妃の白い肌とおぼつかない身体。',
'ぶつぶつとひとりごとをつぶやきながら、猫猫は騒動の場を後にした。',
'（なにか、書き物はないか）',
'と、考えながら。'
*/




scene9 = {
'SetBackGroundImage_fadeIN':"BackGround_05_00.png",
'DeleteCharactor':"",
  'SetText': ['',
'よって、通り過ぎる人物に目もくれなかった。'
],
  'SetNextSceneName':'scene0'
}

scene10 = {
  'SetBackGroundImage':"BackGround_01_00.png",
  'DeleteCharactorl':"",
  'SetCharactorRight': 'Charactor02_01.jpg',
  'SetText': ['壬氏【ジンシ】',
//***区切り********************************************************
//３　壬氏
'「またやってるな」',
'壬氏は端正な顔に憂いを含む。女性と見まごうような繊細な輪郭に、切れ長の目、絹の髪を布で包んで残りを背中に流している。',
'宮中の花たちがこんなところで騒ぎを起こすなどはしたない、それを収めるのが彼の仕事の一つだった。',
'人だかりを分けようとする中、一人だけ我関せずという雰囲気で歩いてくるものがいる。',
'小柄な下女で鼻から頬にかけてそばかすが密集している。他は目立った風貌ではないものの、自分に目もくれずなにかひとりごとをいう姿が印象に残った。',
'ただ、それだけのはずだった。',
'東宮が身まかられたという話が回ってきたのは、それからひと月もしない頃であろうか。',
'泣きわめく梨花妃は、先日よりもさらにやせ細り、大輪の薔薇といわれた頃の面影はなかった。息子と同じ病に侵されているのか、それとも気の病が重いのか。',
'あれでは、次の子を望むこともできまい。',
'東宮の異母姉である鈴麗公主は、一時の体調不良から状態を持ち直し、母とともに東宮を失った帝を慰めるようになっていた。',
'帝の通いようから次の子も近いかもしれない。',
'同じように公主と東宮は原因不明の病にかかっていた。一方は持ち直し、一方は倒れた。',
'年齢による違いであろうか、三か月の差とはいえ乳幼児の体力には大きく影響を受ける。',
'しかし、梨花妃はどうであろう？',
'公主が持ち直したのなら、梨花妃も持ち直してもいいであろうに。それとも、息子を亡くした精神的なものであろうか。',
'壬氏は頭にぐるぐると考えをめぐらせながらも、書類に目を通し、判を押していく。',
'なにか違いがあるとすれば玉葉妃のほうだろうか。',
'「少し留守にする」',
'最後の判を押し終わると、壬氏は部屋を後にした。',
'蒸したての万頭のような頬をした公主は、赤子の無邪気な笑顔を見せる。小さな手のひらはぎゅっと拳を作り、壬氏の人差し指を掴んでいた。',
'「これこれ、はなしなさい」',
'赤毛の美女は優しく娘をおくるみに包むと、籠の中に寝かせた。',
'赤子は暑いとおくるみをはねのけ、来訪者のほうを見ては言葉にもならない声を機嫌よく鳴らしていた。',
'「なにか聞きたいことでもあるようですが」',
'聡明な妃は、壬氏の思惑を感じ取っているようだ。',
'「なぜ、公主殿は持ち直されたのですか？」',
'単刀直入に申し上げると、玉葉妃はふっと小さな笑みをこぼすと懐から布きれを取り出した。',
'はさみも使わず裂いた布に、不恰好な字が書いてある。字が汚いというわけでなく、草の汁を使って書いたため、にじんで読みにくくなっているのだ。',
'『おしろいはどく、赤子にふれさすな』',
'たどたどしく書いたのもわざとであろうか？',
'壬氏は首を傾げる。',
'「おしろいですか？」',
'「ええ」',
'玉葉妃は乳母に公主を任せると、引出から何かを取り出す。',
'布にくるまれたそれは、陶器製の器だった。蓋を開けると、白い粉が舞う。',
'「おしろい？」',
'「ええ、おしろいです」',
'ただ白いだけの粉になにがあるのだろうとつまむ。そういえば、玉葉妃は元々肌が美しいのでおしろいをしておらず、梨花妃は顔色が悪いのをごまかすように塗りたくっていた。',
'「公主は食いしん坊でして、私の乳だけでは足りず、乳母に足りない分を飲ませてもらっていたのです」',
'赤子を生まれてすぐなくしたものを、乳母として雇い入れたのだ。',
'「それは、乳母が使っていたものです。ほかのおしろいに比べて白さが際立つと好んで使っていたものです」',
'「その乳母は？」',
'「体調が悪かったようなので暇を出しました。退職金も十分与えたはずです」',
'理知的で優しすぎる妃の言葉だ。',
'おしろいの中になにかしら毒があれば、どうだろう。',
'使うものが母親ならば、胎児に影響を与え、生まれた後も授乳の際口に含むこともあるだろう。',
'壬氏も玉葉妃もそれがどんなものかわからない、ただそれが東宮を殺した毒だということは理解できた。',
'「無知は罪ですね。赤子の口に入るものなら、もっと気にかけていればよかった」',
'「それは私も同様です」',
'結果、帝の子を四人も失わせてしまった。母の胎内にいたものを加えたら、もっといるのかもしれない。',
'「梨花妃にも伝えましたが、私が何を言っても逆効果だったみたいです」',
'梨花妃は今も目にくまのはった顔色の悪い肌をおしろいで塗りたくっている。それが毒とも知らずに。',
'壬氏は生成りの布きれを見る。不思議とどこかで見覚えがあるような気がする。',
'たどたどしい字は、筆跡をごまかすようにも見える。しかし、どこかしら女性的な文字に見えた。',
'「いったい、だれがこんなものを」',
'「あの日、私が薬師に娘を見てもらうようにいったときです。結局、貴方の手を煩わせただけの後、窓辺に置いてありました。石楠花の枝に結んで」',
'では、あの騒動が原因でなにかしら気づいたものが助言したというのだろうか。',
'いったい、だれが。',
'「宮中の医師はそのような遠回しなことをしないでしょう」',
'「ええ、最後まで東宮の処置がわからないようでしたから」',
'あのときの騒動。',
'そういえば、野次馬の中にひとりわれ関せずという下女がいたというのを思い出した。',
'なにかをぶつぶつ言っていた。',
'なにを言っていた？',
'『なにか、書き物はないか？』',
'ふと、なにかが頭の中につながった。',
'くくくっと、笑いがこぼれる。天女のような艶やかな笑みが浮かんだ。',
'「玉葉妃、この文の主、見つけたらどうなさいます？」',
'「それはもう、恩人ですもの。お礼をしなくてはね」',
'「了解しました。これはしばらく預かってよいですか」',
'「朗報を期待します」',
'壬氏はさわり心地のある布に記憶をたどらせた。',
'「寵妃の願いとあらば、必ずや見つけねばならぬな」',
'天女の笑みに、宝探しをする子どもの無邪気さが加わった。'
              ],
  'SetNextSceneName':'scene11'
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

/*
scene18 = {
  'DeleteCharactor':"",
  'SetCharactorRight': 'mio3.png',
  'SetText': ['みお',
              '……………'
              ],
  'SetNextSceneName':'scene19'
}
*/

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
  'SetCharactorLeft': 'koko1.png',
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
  'SetCharactorLeft': 'koko2.png',
  'SetText': ['ココ',
              'ココろえ…'
              ],
  'SetNextSceneName':'scene45'
}

scene45 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': 'koko3.png',
  'SetText': ['ココ',
              'え～っ！？ドラマチックな告白？'
              ],
  'SetNextSceneName':'scene46'
}

scene46 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': 'koko4.png',
  'SetText': ['ココ',
              'そ…それって恋愛について知りたいってことだよね？'
              ],
  'SetNextSceneName':'scene47'
}

scene47 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': 'koko5.png',
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
  'SetCharactorLeft': 'koko6.png',
  'SetText': ['ココ',
              'あっ…'
              ],
  'SetNextSceneName':'scene51'
}

scene51 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': 'koko7.png',
  'SetText': ['ココ',
              'そういうことか。'
              ],
  'SetNextSceneName':'scene52'
}

scene52 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': 'koko1.png',
  'SetText': ['ココ',
              'ドラマチックな告白で検索。'
              ],
  'SetNextSceneName':'scene53'
}

scene53 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': 'koko8.png',
  'SetText': ['ココ',
              'あっ。'
              ],
  'SetNextSceneName':'scene54'
}

scene54 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': 'koko1.png',
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
  'SetCharactorRight': 'mio2.png',
  'SetCharactorLeft': 'koko1.png',
  'SetText': ['みお',
              'いや…　ないわね。'
              ],
  'SetNextSceneName':'scene64'
}

scene64 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': 'koko9.png',
  'SetText': ['ココ',
              'そっか。'
              ],
  'SetNextSceneName':'scene65'
}

scene65 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': 'koko10.png',
  'SetText': ['ココ',
              'だったら…。'
              ],
  'SetNextSceneName':'scene66'
}

scene66 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': 'koko11.png',
  'SetText': ['ココ',
              'う〜ん…。'
              ],
  'SetNextSceneName':'scene67'
}

scene67 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': 'koko8.png',
  'SetText': ['ココ',
              '(ピコン)'
              ],
  'SetNextSceneName':'scene68'
}

scene68 = {
  'DeleteCharactorl':"",
  'SetCharactorLeft': 'koko1.png',
  'SetText': ['みお',
              'ゲーム感覚でドラマチックに…。'
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

＊やりたいこと
	・グーグルアンケートのユーザの回答したか否かを自動でスプレットシートに記入させる。

＊使用環境
	・GAS, スプレッドシート、フォーム

＊動機
	・幹部から送信されたフォームに答えたかわからない、忘れたなどの解決。
	・フォームに答えた後、自分宛に答えた内容を送信することもできるが探すのが手間、色々フォーム来すぎてわかん
	　なくなる。
					↓↓↓↓↓↓↓↓↓

	・URL１つ踏むだけで自分が答えたか否かを知ることができる。
	・このリンクはSlackに新しいチャンネルにでも貼って部活ないのみ閲覧可能にする予定。
	
＊問題点
	・フォームを部員へ配布する側（主に幹部）は名前、メアドなどの順をある程度揃えてもらう必要がある。
	　要は少し手間が必要。 //これは解決済み。
	・私のgmailと同期してもらう必要がある。同期といってもメールや他の機能を全て同期するんじゃなくて、あるフ
	　ォームに対してだけアクセスを許可させてもらう。
	・その許可もフォーム１つ作る度にこちらからの申請に答えてもらう必要がある。

＊作成にあたって
	・スプレッドシートのURLをもらってスクリプトを書き換える。
	・formのシートを取得し、部員一覧と比較。存在するなら、confirmのシートに名前と有無を書き込む。






＊錯誤
・２つの別のスプレッドシートオブジェクトをどう扱うか、困った。
・色々できて、色を変えたり、フォントを変えたりなど様々な機能がついている！これは流行りベクして流行りますね！
・SpreadsheetAppを「SpreadSheetApp」と見間違えて時間が食った。
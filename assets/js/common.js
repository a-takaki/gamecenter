//回しているスロットの番号を保持
var num = 0;
//表示させる文字の配列を指定
var slotItem = [ "A", "B", "C" ];
//結果を表示させる配列
var result = []; // result[0], result[1], result[2]
//タイマー変数
var timerId;


//リプレイ
function replay() {
	num = 0;
	result = [];
	slotStart();
}


//スロットを開始する
//ここでslotStart関数を作成
function slotStart() {
	// ランダムな数字を当てはめる
	$('#js_slot_'+num).text(slotItem[Math.floor(Math.random() * slotItem.length)]);
	// 文字が回転するタイマー設定
	timerId = setTimeout(slotStart, 10);
}
slotStart();


//スロットを止める
//ここでslotStop関数を作成
function slotStop() {
	// 止めたスロットの値を格納
	result[num] = $('#js_slot_'+num).text();
	// 次のスロットを回す
	num++;
	// タイマーを止めるための条件分岐
	if (num > 2) {
		clearTimeout(timerId);
		//スロット停止後の処理（並べ替えをして比較し、結果を出す）
		result.sort();
		if (result[0] == result[1] && result[0] == result[2]) {
			// あたりメッセージ表示
			$("#js_slotMsg").html("BINGO!!!");
		} else if (result[0] == result[1] || result[1] == result[2]) {
			// おしいメッセージ表示
			$("#js_slotMsg").html("soso...");
		} else {
			// はずれメッセージ表示
			$("#js_slotMsg").html("TRY AGAIN?");
		}
		if (!($('.replay_area').length)){
			$(".dd01").append('<p class="replay_area"><input class="replay" type="button" value="REPLAY?" onclick="replay();"></p>');
		}
	}
}

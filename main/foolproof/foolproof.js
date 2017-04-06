// デバッグコメント
console.log("実行成功")
console.log($("title").text())

// 何回目のテストなのかを取得し、アラートを出す
var testCount = $("tbody tr").length + 1;
if (testCount < 6) {
    alert(testCount + "回目のテストです、4回目以降は無断で受けてはいけません。");
}

if(testCount == 2){
    alert("2回目のテストなので、プリントを貰いましょう。");
}

// 4回目以降のテストで、レビューが済んでいないなら
if (testCount >= 4) {
    // 警告を出して、テストボタンを非表示にする
    alert("4回目以降のテストです、先生を呼びましょう！！！！！！！！");
    $("input[type='submit']").hide();

    // テストボタンを表示するボタンを作成
    $("body").append("<button id='showTest'>先生に許可を貰ったのでテストを受ける</button>");
    $("#showTest").on('click', function(){
        $("input[type='submit']").show();
        $(this).hide();
    });
}

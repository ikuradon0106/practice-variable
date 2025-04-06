var str = "webcamp" //グローバルスコープ

function foo() {
  console.log(str); //webcamp
  var str = "dmm webcamp" //ローカル(関数）スコープ
  console.log(str) //dmm webcamp
}

foo()
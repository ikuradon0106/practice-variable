var str = "webcamp" //グローバルスコープ

function foo() {
  console.log(str); //webcamp
  var y = "hello" //ローカル(関数）スコープ
}

foo()
console.log(y)

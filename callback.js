(() => {
  function random(callback) {
    // 一秒後にコールバックする
    setTimeout(() => {
      const value = Math.random(); // 0 以上 1 未満の乱数を取得
      const result = value > 0.1; // 90% の確立で true にする

      console.log(`${value} is greater than 0.1? ${result}`);

      callback(result)
    }, 1000);
  }

  // false が出るまでひたすら乱数を生成し続ける
  // 再帰関数
  function until(callback) {
    random(result => {
      if (result) {
        until(callback);
      } else {
        callback();
      }
    });
  }

  function start() {
    console.log('START!');

    until(() => console.log('FINISH!'));

    console.log('-----');
  }

  $(document).on('click', '#callback', start);
})();

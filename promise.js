(() => {
  function random() {
    return new Promise(resolve => {
      // 一秒後にコールバックする
      setTimeout(() => {
        const value = Math.random(); // 0 以上 1 未満の乱数を取得
        const result = value > 0.1; // 90% の確立で true にする

        console.log(`${value} is greater than 0.1? ${result}`);

        resolve(result);
      }, 1000);
    });
  }

  // false が出るまでひたすら乱数を生成し続ける
  // 再帰関数
  function until() {
    return random().then(result => {
      if (result) {
        return until();
      }
    });
  }

  function start() {
    console.log('START!');

    until().then(() => console.log('FINISH!'));

    console.log('-----');
  }

  $(document).on('click', '#promise', start);
})();

(() => {
  function random() { // ES6 Promise 版と同じ!
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

  async function start() {
    console.log('START!');

    // false が出るまでひたすら乱数を生成し続ける
    while (true) {
      var result = await random();
      if (!result) {
        break;
      }
    }

    console.log('FINISH');
  }

  $(document).on('click', '#async', start);
})();

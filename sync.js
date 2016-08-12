(() => {
  function random() {
    const value = Math.random(); // 0 以上 1 未満の乱数を取得
    const result = value > 0.1; // 90% の確立で true にする

    console.log(`${value} is greater than 0.1? ${result}`);

    return result;
  }

  function start() {
    console.log('START!');

    // false が出るまでひたすら乱数を生成し続ける
    while (true) {
      var result = random();
      if (!result) {
        break;
      }
    }

    console.log('FINISH!');
  }

  $(document).on('click', '#sync', start);
})();

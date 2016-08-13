(() => {
  function throwError(callback) {
    // 非同期で一秒後にエラーをスローする
    setTimeout(() => {
      callback(new Error('Throw Error'));
    }, 1000);
  }

  function catchError() {
    throwError(error => {
      // コールバックに渡されたエラーを見てエラーを出力する
      if (error) {
        console.log(`Catch [${error}].`);
      }
    });
  }

  $(document).on('click', '#throw-callback2', catchError);
})();

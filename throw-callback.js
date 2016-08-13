(() => {
  function throwError(callback) {
    // 非同期で一秒後にエラーをスローする
    setTimeout(() => {
      throw new Error('Throw Error');
    }, 1000);
  }

    function catchError() {
    try {
      throwError();
    } catch (error) {
      // エラーをキャッチして表示する
      console.log(`Catch [${error}].`);
    }
  }

  $(document).on('click', '#throw-callback', catchError);
})();

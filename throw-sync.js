(() => {
  function throwError() {
    // エラーをスローする
    throw new Error('Throw Error');
  }

  function catchError() {
    try {
      throwError();
    } catch (error) {
      // エラーをキャッチして表示する
      console.log(`Catch [${error}].`);
    }
  }

  $(document).on('click', '#throw-sync', catchError);

})();

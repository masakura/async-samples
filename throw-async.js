(() => {
  function throwError() {
    return new Promise((resolve, reject) => {
      // 非同期で一秒後にエラーをスローする
      setTimeout(() => {
        reject(new Error('Throw Error'));
      }, 1000);
    });
  }

  async function catchError() {
    try {
      await throwError();
    } catch (error) {
      // エラーをキャッチして表示する
      console.log(`Catch [${error}].`);
    }
  }

  $(document).on('click', '#throw-async', catchError);
})();

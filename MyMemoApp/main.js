"use strict";

{
  // DOMの取得
  const text = document.getElementById("text");
  const save = document.getElementById("save");
  const clear = document.getElementById("clear");
  const msg = document.getElementById("msg");
  const dateUpdated = document.getElementById("date-updated");

  //




  // 初期状態をチェック
  checkTextarea();
  // テキストエリアの内容が変わるたびにチェック
  text.addEventListener("input", checkTextarea);

  function checkTextarea() {
    // テキストボックスの中身が空のとき
    if (text.value.trim() === "") {
      // ボタンをクリック不可に
      save.classList.add("unclickable");
      clear.classList.add("unclickable");
    } else {
      // ボタンをクリック可能に
      save.classList.remove("unclickable");
      clear.classList.remove("unclickable");
    }
  }

  if (localStorage.getItem("memo") === null) {
    text.value = "";
  } else {
    text.value = localStorage.getItem("memo");
  }

  // 保存機能
  save.addEventListener("click", () => {
    msg.classList.add("appear");
    setTimeout(() => {
      msg.classList.remove("appear");
    }, 1000);
    localStorage.setItem("memo", text.value);

    // 最終保存日時の更新
    dateUpdated.textContent = getFormattedDateTime();
  });

  // 削除機能
  clear.addEventListener("click", () => {
    if (confirm("本当に削除しますか？") === true) {
      // テキストエリアの初期化
      text.value = "";
      // ローカルストレージ＞memoの削除
      localStorage.removeItem("memo");
    }
  });

  // フォーマットされた日時を返す関数
  function getFormattedDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = ('0' + (now.getMonth() + 1)).slice(-2);
    const day = ('0' + now.getDate()).slice(-2);
    const hours = ('0' + now.getHours()).slice(-2);
    const minutes = ('0' + now.getMinutes()).slice(-2);
    const seconds = ('0' + now.getSeconds()).slice(-2);

    return `${year}年${month}月${day}日 ${hours}:${minutes}:${seconds}`;
  }

}

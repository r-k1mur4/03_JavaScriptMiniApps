"use strict";

{
  const text = document.getElementById("text");
  const save = document.getElementById("save");
  const msg = document.getElementById("msg");

  if (localStorage.getItem('memo') === null) {
    text.value = '';
  } else {
    text.value = localStorage.getItem('memo');
  }

  save.addEventListener("click", () => {
    msg.classList.add("appear");
    setTimeout(() => {
      msg.classList.remove("appear");
    }, 1000);
    localStorage.setItem("memo", text.value);
  });
}

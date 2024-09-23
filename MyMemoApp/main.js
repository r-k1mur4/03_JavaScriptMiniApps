"use strict";

{
  const text = document.getElementById("text");
  const save = document.getElementById("save");
  const msg = document.getElementById("msg");

  save.addEventListener("click", () => {
    msg.classList.add("appear");
    setTimeout(() => {
      msg.classList.remove("appear");
    }, 1000);
    localStorage.setItem("memo", text.value);
  });
}

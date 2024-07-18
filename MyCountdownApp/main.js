'use strict';

{
  function check() {
    // 残り時間 = 終了時刻　- 現在時刻
    let countdown = endTime - new Date().getTime();
    // (3) タイマーの終了
    if (countdown < 0) {
      clearInterval(intervalId);
      countdown = 3 * 1000;
      btn.disabled = false;
      btn.classList.remove('inactive');
    }
    // 秒になおす
    const totalSeconds = Math.floor(countdown / 1000);
    // 分をもとめる
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const minutesFormatted = String(minutes).padStart(2, '0');
    const secondsFormatted = String(seconds).padStart(2, '0');

    timer.textContent = `${minutesFormatted}:${secondsFormatted}`;


  }

  const timer= document.getElementById('timer');
  const btn= document.getElementById('btn');
  let endTime;
  let intervalId;
  // (1) 終了時刻をもとめる
  btn.addEventListener('click', () =>{
    endTime = new Date().getTime() + 3 * 1000;

    btn.disabled = true;
    btn.classList.add('inactive');
    // (2) 残り時間を求める
   intervalId = setInterval(() => {
      check();
    }, 100);



  });





}

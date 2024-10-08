'use strict';

{
  const timer= document.getElementById('timer');
  const btn = document.getElementById('btn');
  let endTime;
  let intervalId;

  function check() {
    // 残り時間 = 終了時刻 - 現在時刻
    let countdown = endTime - new Date().getTime();

    if (countdown < 0) {
      clearInterval(intervalId);
      countdown = 3 * 1000;
      btn.disabled = false;
    }

    const totalSeconds = Math.floor(countdown / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const minutesFormatted = String(minutes).padStart(2, '0');
    const secondssFormatted = String(seconds).padStart(2, '0');

    timer.textContent = `${minutesFormatted}:${secondssFormatted}`

    // timer.textContent = countdown;
  };


  // ① 終了時刻を求める
  btn.addEventListener('click', () => {
    endTime = new Date().getTime() + 3000;
    // console.log(endTime);
    btn.disabled = true;
    // ② 残り時間を求める
    intervalId = setInterval(() => {
      check();
    }, 1);


  })


}

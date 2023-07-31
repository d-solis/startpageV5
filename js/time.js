function formatAMPM() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12; // The hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    document.getElementsByClassName('time')[0].innerHTML = strTime;
    console.log(strTime);
  }
  formatAMPM();
  setInterval(formatAMPM, 30000);
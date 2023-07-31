function updateDate() {
  const today = new Date();
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dailyday = days[today.getDay()];
  const date = today.getDate();
  let month = today.getMonth() + 1;
  const year = today.getFullYear();
  month = month < 10 ? '0' + month : month;
  document.getElementById('date').innerHTML = `${month}/${date}/${year}`;
  document.getElementById('day-of-week').innerHTML = dailyday;
}

updateDate();

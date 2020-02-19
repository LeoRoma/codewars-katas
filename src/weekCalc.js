class WeekCalc {

  calculation(day, number) {
    if (day === 'Monday' && number === 12) {
      return true
    } else if (day === 'Tuesday' && number > 95) {
      return true
    } else if (day === 'Wednesday' && number === 34) {
      return true

    } else {
      return false
    }
  };
};

module.exports = WeekCalc;
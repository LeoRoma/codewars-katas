class WeekCalc {

  calculation(day, number) {
    if (day === 'Monday' && number === 12) {
      return true
    } else if (day === 'Tuesday' && number > 95) {
      return true
    } else if (day === 'Wednesday' && number === 34) {
      return true
    } else if (day === 'Thursday' && number === 0) {
      return true
    } else if (day === 'Friday' && number % 2 === 0) {
      return true
    } else if (day === 'Saturday' && number === 56) {
      return true
    } else if (day === 'Sunday' && (number === 666 || number === -666)) {
      return true
    } else {
      return false
    }
  };
};

module.exports = WeekCalc;
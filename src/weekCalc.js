class WeekCalc {

  calculation(day, number) {
    if (day === "Tuesday" && number > 95) {
      return true
    } else {
      return false
    }
  };
};

module.exports = WeekCalc;
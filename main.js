function daysInYear(year) {
  try {
    if (Number.isInteger(year)) {
      
      return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0) ? 366: 365;
    }

    throw error;
  } catch (err) {

    return 'exception';
  }
}

console.log(daysInYear('2019'));

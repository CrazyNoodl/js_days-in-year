function daysInYear(year) {
  try {
    if (Number.isInteger(year)) {
      
      return year % 4 === 0 ? 366 : 365
    }

    throw error;
  } catch (err) {

    return 'exception';
  }
}

console.log(daysInYear('2019'));

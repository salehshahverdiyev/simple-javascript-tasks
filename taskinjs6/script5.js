/*
Make a function to return array of last 3 years: {years: month[]} or {years: quarters[]} or years[]

  // type Year = 1970 ...;
  // type Month = 0 ... 11;
  // type Quarter = 1 ... 4;

  function lastThreeYears(date, mode) {}

  const date = new Date(2023, 5, 30);

  lastThreeYears(date);
  // const res = [2020, 2021, 2022]

  lastThreeYears(date, 'year');
  // const res = [2020, 2021, 2022]

  lastThreeYears(date, 'month');
  // const res = {
  //   2020: [6, 7, 8, 9, 10, 11],
  //   2021: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  //   2022: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  //   2023: [0, 1, 2, 3, 4, 5],
  // }

  lastThreeYears(date, 'quarter');
  // const res = {
  //   2020: [2, 3, 4],
  //   2021: [1, 2, 3, 4],
  //   2022: [1, 2, 3, 4],
  //   2023: [1],
  // }
 */

function lastThreeYears(date, mode = 'year') {
    const currentYear = date.getFullYear();
    const years = [currentYear - 2, currentYear - 1, currentYear];
    
    if (mode === 'year') {
      return years;
    } else if (mode === 'month') {
      const result = {};
      for (const year of years) {
        result[year] = Array.from({ length: 12 }, (_, i) => i);
      }
      return result;
    } else if (mode === 'quarter') {
      const result = {};
      for (const year of years) {
        result[year] = [1, 2, 3, 4];
      }
      return result;
    } else {
      throw new Error('Invalid mode. Supported modes are "year", "month", or "quarter".');
    }
  }
  
  const date = new Date(2023, 5, 30);
  
  console.log(lastThreeYears(date));
  console.log(lastThreeYears(date, 'year'));
  console.log(lastThreeYears(date, 'month'));
  console.log(lastThreeYears(date, 'quarter'));

  
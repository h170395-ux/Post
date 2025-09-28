// const fs = require('fs'); // Only needed if you're writing to a file

function generateDates(start, end) {
  const startDate = new Date(start.split('.').reverse().join('-'));
  const endDate = new Date(end.split('.').reverse().join('-'));
  const dates = [];

  while (startDate <= endDate) {
    const day = String(startDate.getDate()).padStart(2, '0');
    const month = String(startDate.getMonth() + 1).padStart(2, '0');
    const year = startDate.getFullYear();
    dates.push(`${day}.${month}.${year}`);
    startDate.setDate(startDate.getDate() + 1);
  }

  return dates;
}

const allDates = generateDates("25.02.2018", "05.08.2025");

// Option 1: Print each date line by line
allDates.forEach(date => console.log(`'${date}',`));

// Option 2: Save to a file (Node.js only)
// fs.writeFileSync('dates.txt', allDates.join('\n'));

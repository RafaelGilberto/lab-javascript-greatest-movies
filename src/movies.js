// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = [];
  for (let i = 0; i < moviesArray.length; i++) {
    directors.push(moviesArray[i].director);
  }
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let dramaSteven = 0;
  for (let i = 0; i < moviesArray.length; i++) {
    if (
      moviesArray[i].director == "Steven Spielberg" &&
      moviesArray[i].genre.includes("Drama")
    ) {
      dramaSteven++;
    }
  }
  return dramaSteven;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let average = 0;
  if (moviesArray == 0) {
    return average;
  }
  for (let i = 0; i < moviesArray.length; i++) {
    if (Object.keys(moviesArray[i]).includes("score")) {
      average += moviesArray[i].score;
    }
  }
  average = average / moviesArray.length;
  return Math.round((average + Number.EPSILON) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let average = 0;
  let count = 0;
  if (moviesArray == 0) {
    return average;
  }
  for (let i = 0; i < moviesArray.length; i++) {
    for (let j = 0; j < moviesArray[i].genre.length; j++) {
      if (moviesArray[i].genre[j] == "Drama") {
        average += moviesArray[i].score;
        count++;
        break;
      }
    }
  }
  if (count == 0) {
    return 0;
  }
  average = average / count;
  return Math.round(average * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let orderYear = [...moviesArray];
  //orderYear.sort((y1, y2) => y1.title > y2.title);
  orderYear.sort((y1, y2) => y1.year > y2.year || y1.title > y2.title);
  return orderYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let newOrder = [...moviesArray];
  let result = [];
  newOrder.sort((y1, y2) => y1.title > y2.title);
  for (let i = 0; i < newOrder.length && i < 20; i++) {
    result[i] = newOrder[i].title;
  }
  return result;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let newOrder = [...moviesArray];
  let hours = "";
  let hPosition;
  let minutes = "";
  let minPosition;
  for (let i = 0; i < newOrder.length; i++) {
    hPosition = newOrder[i].duration.search("h");
    for (let j = 0; j < hPosition; j++) {
      hours += newOrder[i].duration[j];
    }
    hours = Number(hours);
    //console.log(hours);
    minPosition = newOrder[i].duration.search("min");
    for (let j = hPosition + 1; j < minPosition; j++) {
      minutes += newOrder[i].duration[j];
    }
    minutes = Number(minutes);
    //console.log(minutes);
    newOrder[i].duration = hours * 60 + minutes;
    hours = "";
    minutes = "";
  }
  return newOrder;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray == 0) {
    return null;
  }
  let yearScore = [];
  let newOrder = [...moviesArray];
  let j = 0;
  let count = 1;
  newOrder.sort((y1, y2) => y1.year > y2.year);
  yearScore[j] = { average: newOrder[0].average, year: newOrder[0].year };
  for (i = 0; i < newOrder.length; i++) {
    if (newOrder[i].year !== yearScore[j].year) {
      yearScore[j].average = yearScore[j].average / count;
      j++;
      yearScore[j] = { average: newOrder[i].score, year: newOrder[i].year };
      count = 1;
    } else {
      count++;
      yearScore[j].average += newOrder[i].score;
    }
  }
  yearScore.sort((avg1, avg2) => avg1.average > avg2.average);
  return yearScore[0].year;
}

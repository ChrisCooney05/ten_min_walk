function tenMinuteWalk(array) {
  if (array.length === 10) {
    let x = 0;
    let y = 0;

    array.forEach((l) => {
      if (l === "n") {
        y += 1;
      } else if (l === "e") {
        x += 1;
      } else if (l === "s") {
        y -= 1;
      } else {
        x -= 1;
      }
    });

    if (x === 0 && y === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

module.exports = tenMinuteWalk;

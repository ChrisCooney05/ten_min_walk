function tenMinuteWalk(array) {
  if (array.length === 10) {
    let x = 0;
    let y = 0;

    array.forEach((l) => {
      switch (l) {
        case "n":
          y += 1;
          break;
        case "e":
          x += 1;
          break;
        case "s":
          y -= 1;
          break;
        case "w":
          x -= 1;
          break;
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

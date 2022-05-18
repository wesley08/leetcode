function catAndMouse(x, y, z) {
  const catA = Math.abs(x - z); // always return positive 1-3 = 2
  const catB = Math.abs(y - z); // always return positive 2-3 =1
  if (catA < catB) return "Cat A"; // 2 < 1 no
  if (catA > catB) return "Cat B"; // 2 > 1 yes
  return "Mouse C";
}

catAndMouse(1, 2, 3);

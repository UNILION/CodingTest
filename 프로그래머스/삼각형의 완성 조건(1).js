function solution(sides) {
  array = sides.sort()
  return array[0] + array[1] > array[2] ? 1 : 2;
}
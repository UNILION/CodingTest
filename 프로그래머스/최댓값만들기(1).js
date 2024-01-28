function solution(numbers) {
  return numbers.sort(function(a,b){return a-b})[numbers.length-1] * numbers.sort(function(a,b){return a-b})[numbers.length-2];
}
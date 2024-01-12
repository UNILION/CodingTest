function solution(numbers, n) {
  let sum_num = 0;
  for (let i = 0 ; i < numbers.length ; i++){
      sum_num += numbers[i];
      if (sum_num > n) break;
  }
  return sum_num;
}
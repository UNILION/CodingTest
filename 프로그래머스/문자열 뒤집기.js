function solution(my_string) {
  let new_string = ""
  for (let i = my_string.length - 1 ; i >=0 ; i--){
  new_string += my_string[i]
  }
  return new_string;
}
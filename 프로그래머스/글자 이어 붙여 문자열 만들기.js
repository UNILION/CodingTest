function solution(my_string, index_list) {
  let answer = '';
  for(let i = 0 ; i < index_list.length ; i++){
      answer += my_string.substr(index_list[i],1);
  }

  return answer;
}
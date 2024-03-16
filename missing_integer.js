function solution(A) {
  let counter = 0;
  A.sort(function(a,b) { return a - b; });
  for(let i = 0; i < A.length; i++) {
    if(A[i] > 0) {
      if(A[i] != counter) counter++;
      if(A[i] == counter) continue;
      return counter;
    }
  }
  counter++;
  return counter;
}

void main() {
  List multiplesOfThree = [];
  List multiplesOfFive = [];
  for(int i = 1; i < 1000; i++){
    if(i%3 == 0){
      multiplesOfThree.add(i);
    } else if (i%5 == 0) {
      multiplesOfFive.add(i);
    } 
  }
  var sum = multiplesOfThree.reduce((a, b) => a + b);
  var sum2 = multiplesOfFive.reduce((a, b) => a + b);
  print(sum);
  print(sum2);
  var answer = sum + sum2;
  print(answer);
}

package java_practice;

class Calculator {
  int a;

  public int add(int n1, int n2) {
    int r = n1 + n2;
    return r;
  }
}

public class classes {
  public static void main(String a[]) {
    int num1 = 3;
    int num2 = 5;
    Calculator Calc = new Calculator();
    int result = Calc.add(num1, num2);
    System.out.print(result);
  }
}

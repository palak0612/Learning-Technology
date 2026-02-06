package java_practice;

import java.util.Scanner;

public class loops {
   public static void main(String[] args) {
  
    int n; 
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter a number: ");
    n = sc.nextInt();
    int sum = 0;
    for (int i = 1; i < n; i++){
      sum += i*i;
      System.out.println(sum);
    }
  }
}
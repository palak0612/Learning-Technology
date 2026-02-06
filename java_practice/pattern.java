package java_practice;

public class pattern {
  public static void main(String[] args) {
    // int n = 2;
    // for(int i = 1; i <= 9; i++){
    //      System.out.println(2*i); //2 table
    // } 

    // int[] arr = {2,4,5,6,7,8,9};
    // for(int i = 0; i < arr.length; i++){
    //   if(arr[i] % 2 == 0 && i % 2 == 0){
    //     System.out.println(arr[i]);
    //   }
    // }

    String name = "PaLk90H@";
    for(int i = 0; i < name.length(); i++){
      if(name.charAt(i) > 'A' && name.charAt(i) < 'Z'){
        System.out.println(name.charAt(i));
      }
    }
  }
}

package java_practice;

class Hello {
  public static void main(String a[]) {
    System.out.print("hello world");
    byte b = 12;
    int c = 12;
    b = (byte) c;
    c = b;
    float f = 5.56f;
    int x = (int) f;
    System.out.print(x);
  }
}


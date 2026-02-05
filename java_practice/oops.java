package java_practice;

class Human{
   private int age;
   private String name;
   public int getAge(){ // getter
    return age;
   } 
   public void setAge(int a){ // setter 
    age = a;
   }
   public void setName(String n){
    name = n;
   }
   public String getName(){
    return name;
   }
}

public class oops {
   public static void main(String[] args) {
    Human obj = new Human();
    obj.setAge(30);
    obj.setName("palak");
    System.out.println(obj.getName() + " " + obj.getAge());
   }
}

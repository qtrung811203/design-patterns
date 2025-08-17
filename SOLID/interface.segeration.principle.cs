/*
Thay vì 1 interface to tổ bố 😱😱😱
hãy tách thành nhiều interface nhỏ phù hợp nhu cầu client.
*/

// Using Wrong ❌❌❌
public interface IAnimal {
    void Eat();
    void Drink();
    void Sleep();
    void Fly();
}

public class Bird : IAnimal {
    public void Eat();
    public void Drink();
    public void Sleep();
    public void Fly();
}

public class Dog : IAnimal {
    public void Eat();
    public void Drink();
    public void Sleep();
    public void Fly(){
        throw new Exception('Dog cannot fly bro!')
    };
}

// Using Right ✅✅✅
public interface IAnimal {
  void Eat();
  void Drink();
  void Sleep();
}
public interface IBird {
  void Fly();
}
public interface IFish {
  void Swim();
}

public class DogISP : IAnimal {
  public void Eat() {}
  public void Drink() {}
  public void Sleep() {}
}
public class BirdISP: IAnimal, IBird {
  public void Eat() {}
  public void Drink() {}
  public void Sleep() {}
  public void Fly() {}
}

/*
Subclass có thể thay thế hoàn toàn cho superclass 
mà không làm thay đổi hành vi của chương trình.
*/

// Using Wrong ❌❌❌
class Bird {
  fly() {
    console.log(`I am flyyyy!`);
  }
}

// Sparrow Can Flyyy
class Sparrow extends Bird {}

// Penguin can't fly? violate LSP!!!
class Penguin extends Bird {
  fly() {
    console.log(`Sorry, I don't know how to fly!!!`);
  }
}

// Using Right ✅✅✅ ~ Divide interface
class FlyableBird {
  fly() {}
}

class SwimableBird {
  swim() {}
}

class SparrowLSP extends FlyableBird {
  fly() {
    console.log(`I am flyyyy!`);
  }
}

class PenguinLSP extends SwimableBird {
  swim() {
    console.log(`I am swimmingg!!!`);
  }
}

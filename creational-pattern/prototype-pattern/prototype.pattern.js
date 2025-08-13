// Định nghĩa 1 prototype!
class FifaOnlinePlayer {
  constructor(name, team, position, goals) {
    this.name = name;
    this.team = team;
    this.position = position;
    this.goals = goals;
  }

  score() {
    this.goals++;
  }

  // Dùng để coppy ra với các thuộc tính giống nhau, có thể thay đổi!
  clone() {
    return new FifaOnlinePlayer(this.name, this.team, this.position, this.goals);
  }
}

// Drawback nè: Nếu gán prototype cho class thì khi các instance sử dụng thì sẽ gọi đến 1 giá trị
// duy nhất
// Vì instance khi được tạo ra sẽ không truy cập vào được prototype
// Nếu có tạo prototype mới thì nếu truy cập vào kiểu m10.prototype.level là undefined!
// Các instance sẽ truy cập thông qua m10.level =...
FifaOnlinePlayer.prototype.level = 100;

// Create a new fifa online player prototype
const prototypePattern = new FifaOnlinePlayer("CR7", "Al Nassr", "FW", 0);

// Create multiple instance!
const cr7 = prototypePattern.clone();
const m10 = prototypePattern.clone();
m10.name = "messi";
m10.team = "pgr";

cr7.score();
console.log(`${cr7.name} has scored ${cr7.goals} this season`);
console.log(`${m10.name} has scored ${m10.goals} this season`);

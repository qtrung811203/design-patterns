// "Người quan sát" - Ví dụ: các champ trong 1 team
class Observer {
  constructor(name) {
    this.namePick = name;
  }

  updateStatus(location) {
    this.goToHelp(location);
  }

  goToHelp(location) {
    console.log(`${this.namePick} :::: PING :::: ${location}`);
  }
}

// Đối tượng bị quan sát - Nơi nếu có trạng thái thay đổi, sẽ báo về "Người quan sát"
class Subject {
  constructor() {
    this.observerList = [];
  }

  // Thêm "Người quan sát" lắng nghe sự kiện!
  addObserver(observer) {
    this.observerList.push(observer);
  }

  // Lặp qua danh sách "Người quan sát" để thông báo!
  notify(location) {
    this.observerList.forEach((observer) => observer.updateStatus(location));
  }
}

//Khởi tạo một đối tượng bị quan sát mới!
const subject = new Subject();

//Your pick - Tạo "Người quan sát" 👀
const yasuo = new Observer("YASUO");
const malphite = new Observer("MALPHITE");
const wukong = new Observer("WUKONG");

//Thêm "Người quan sát" vào team (hoặc lắng nghe sự kiện!)
subject.addObserver(yasuo);
subject.addObserver(malphite);
subject.addObserver(wukong);

// Thông báo location vị trí cần hỗ trợ
subject.notify("MID");

/**
 * KẾT QUẢ
 * YASUO :::: PING :::: MID
 * MALPHITE :::: PING :::: MID
 * WUKONG :::: PING :::: MID
 */

//PUSH MODEL 🔥🔥🔥
// Giả lập DB
const database = {
  posts: [],
  savePost(post) {
    const id = Date.now();
    this.posts[id] = post;
    return id;
  },
  getPostById(id) {
    return this.posts[id];
  },
};

// ==== Đối tượng theo dõi!
class Subject {
  constructor() {
    this.observerList = [];
  }

  // Thêm "Người quan sát" lắng nghe sự kiện!
  addObserver(observer) {
    this.observerList.push(observer);
  }

  // Lưu bảng ghi cho người dùng!
  addPost(post) {
    const id = database.savePost(post);
    console.log(`📢 New post saved with ID: ${id}`);
    this.notify(id); // chỉ gửi ID về cho người dùng fetch
  }

  // Thông báo về cho các "Người theo dõi"
  notify(id) {
    this.observerList.forEach((observer) => observer.receivedPost(id));
  }
}

// "Người theo dõiii"
class Observer {
  constructor(name) {
    this.name = name;
  }

  receivedPost(id) {
    console.log(`${this.name} đã nhận được ID bài viết mới!: ${id}`);
    const post = database.getPostById(id); //Giả lập fetch API
    console.log(`${this.name} đã fetch bài viết mới!: ${post.title}`);
  }
}

//TEST CODE!
const feed = new Subject();

const charlie = new Observer("Charlie");
const imagineDragon = new Observer("Imagine Dragon");

feed.addObserver(charlie);
feed.addObserver(imagineDragon);

feed.addPost({ title: "Observer Pattern TESTTT" });

/**
Charlie đã nhận được ID bài viết mới!: 1754926707305
Charlie đã fetch bài viết mới!: Observer Pattern TESTTT
Imagine Dragon đã nhận được ID bài viết mới!: 1754926707305
Imagine Dragon đã fetch bài viết mới!: Observer Pattern TESTTT
 */

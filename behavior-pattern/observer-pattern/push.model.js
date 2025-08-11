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

  // Lưu bài post mới và gửi về cho "Người theo dõi"
  addPost(post) {
    const id = database.savePost(post);
    console.log(`📢 New post saved with ID: ${id}`);
    this.notify(database.posts[id]); //Gửi full bài đăng về cho "Người theo dõi"
  }

  // Thông báo về cho các "Người theo dõi"
  notify(post) {
    this.observerList.forEach((observer) => observer.receivedPost(post));
  }
}

// "Người theo dõiii"
class Observer {
  constructor(name) {
    this.name = name;
  }

  receivedPost(post) {
    console.log(`${this.name} đã nhận bài viết mới!: ${post.title}`);
  }
}

//DEMO CODE!
const feed = new Subject();

const charlie = new Observer("Charlie");
const imagineDragon = new Observer("Imagine Dragon");

feed.addObserver(charlie);
feed.addObserver(imagineDragon);

feed.addPost({ title: "Observer Pattern TEST PUSH" });

/**
Charlie đã nhận được ID bài viết mới!: 1754926707305
Charlie đã fetch bài viết mới!: Observer Pattern TESTTT
Imagine Dragon đã nhận được ID bài viết mới!: 1754926707305
Imagine Dragon đã fetch bài viết mới!: Observer Pattern TESTTT
 */

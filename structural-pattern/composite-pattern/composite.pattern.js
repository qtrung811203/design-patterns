// Sử dụng trong các model cấu trúc cây (Tree) hoặc kiểu như thư mục
// Triển khai!

// Interface ~~
class FileSystemItem {
  show() {
    throw new Error("You must implement FileSystemItem");
  }
}

class FileItem extends FileSystemItem {
  constructor(name) {
    super();
    this.name = name;
  }

  show(spaceTimes = 0) {
    console.log(`${" ".repeat(spaceTimes)} 📄 ${this.name}`);
  }
}

class FileFolder extends FileSystemItem {
  constructor(name) {
    super();
    this.name = name;
    this.children = [];
  }

  // Class Composite này chứa các phương thức như add,remove, và show
  add(item) {
    this.children.push(item);
  }

  remove(item) {
    this.children = this.children.filter((child) => child !== item);
  }

  // Lặp qua các phần tử con và gọi lại (đệ quy!)
  show(spaceTimes = 0) {
    console.log(`${" ".repeat(spaceTimes)} 📁 ${this.name}`);
    this.children.forEach((child) => child.show(spaceTimes + 2));
  }
}

const root = new FileFolder("root");
const folder1 = new FileFolder("folder-1");
const folder2 = new FileFolder("folder-2");

const file1 = new FileItem("File-1-inFolder-1");
const file2 = new FileItem("File-2-inFolder-1");

const file3 = new FileItem("File-3-inFolder-2");
const file4 = new FileItem("File-4-inFolder-2");

folder1.add(file1);
folder1.add(file2);

folder2.add(file3);
folder2.add(file4);

root.add(folder1);
root.add(folder2);

root.show();

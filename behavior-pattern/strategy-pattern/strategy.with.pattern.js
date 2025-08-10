// level Max 😎👌🔥

// Giá mặc định!
function defaultPrice(originalPrice) {
  return originalPrice;
}

// Giá black friday
function blackFridayPrice(originalPrice) {
  return originalPrice <= 200 ? originalPrice * 0.8 : originalPrice - 50;
}

// Giá Preorder
function preOrderPrice(originalPrice) {
  return originalPrice * 0.6;
}

/**
 * Nếu có thêm mục giảm giá thì mình sẽ mở rộng ở đây! khi thêm mục giảm giá xong thì mình
 * bỏ thêm hàm vào object ở dưới là xong!
 */

/**
 * Ví dụ thêm hàm
 * function teacherDay(originalPrice){
 *    return originalPrice * 0.5
 * }
 */

// Chúng ta sử dụng 1 object để có thể map qua các hàm!
const getPriceStrategies = {
  default: defaultPrice,
  blackFriday: blackFridayPrice,
  preOrder: preOrderPrice,
  //teacherDay: teacherDay
  //or
  //teacherDay
};

// Hàm chính!!
function getPrice(originalPrice, typePromotion) {
  return getPriceStrategies[typePromotion](originalPrice);
}

// Sử dụng!
console.log(`---> PRICE:::`, getPrice(200, "preOrder")); //preOrder lấy trong Object để lấy tên hàm

//Sử dụng trong trường hợp thêm teacher day
//console.log(`---> TEACHER PRICE:::`, getPrice(200, "teacherDay"));

/**
 * Khi sử dụng như này sẽ tránh được nếu trong hàm chính getPrice bị lỗi.
 * Khi getPrice bị lỗi khả năng cao là 1 function nào đó khai báo bị lỗi
 *
 * Ví dụ: hàm blackFridayPrice bị lỗi thì các chỗ sử dụng các hàm khác
 * như preOrderPrice, defaultPrice sẽ không sao
 * Còn như level 0 thì sẽ khiến tất cả các hàm khác bị lỗi theo vì viết chung!
 */

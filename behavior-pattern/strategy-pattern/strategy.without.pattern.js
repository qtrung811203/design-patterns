// level 0 - ❌ This suck don't use this!

function getPrice(originalPrice, typePromotion = "default") {
  //Giảm giá khi người dùng đặt trước sản phẩm
  if (typePromotion === "preorder") {
    return originalPrice * 0.8;
  }

  if (typePromotion === "blackFriday") {
    return originalPrice <= 200 ? originalPrice * 0.8 : originalPrice - 50;
  }

  /**
   * Giả sử có các mã giảm giá vào các ngày 11/11, 12/12...
   * thì sẽ viết if đến chết!
   */

  if (typePromotion === "default") {
    return originalPrice;
  }
}

console.log(`---> PRICE:::`, getPrice(200, "preorder"));

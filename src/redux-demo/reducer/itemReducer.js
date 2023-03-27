const initialData = {
  items: [
    {
      itemId:0,
      itemName: "OnePlus Nord2",
      itemPrice: "23999",
      itemImage:
        "https://techlekh.com/wp-content/uploads/2022/08/OnePlus-Nord-N20-SE.jpg",
    },
    {
      itemId:1,
      itemName: "Pocco X3",
      itemPrice: "34999",
      itemImage:
        "https://sajhakinmel.com/public/uploads/all/3EHxFDK9soKqsyzskRrKMe9iYYQPgsqPnFzNjKRy.jpg",
    },
    {
      itemId:2,
      itemName: "Iphone",
      itemPrice: "200000",
      itemImage:
        "https://sajhakinmel.com/public/uploads/all/PGb7EH6zakcMLK9jkw1oe8TkFGfIKq7nN9bAGsUL.jpg",
    },
    {
      itemId:3,
      itemName: "Iphone XS max",
      itemPrice: "179000",
      itemImage:
        "https://s.yimg.com/uu/api/res/1.2/jE6gMZ.Vsi2SvlijMtBpxw--~B/aD0xMjU5O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://o.aolcdn.com/hss/storage/midas/be8deaf69ebb2e866257646588bb5999/206681111/IPHONE.jpg.cf.jpg",
    },
    {
      itemId:4,
      itemName: "Iphone 14 pro max",
      itemPrice: "235000",
      itemImage:
        "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-gold-220907_inline.jpg.large.jpg",
    },
  ],
};

export const itemReducer = function itemReducer(state = initialData, action) {
  return state;
};

// function itemReducer(state = initialData, action) {
//   return state;
// }

// export default itemReducer;

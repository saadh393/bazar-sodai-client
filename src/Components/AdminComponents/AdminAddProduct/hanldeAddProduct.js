import axios from "axios";

export const addProduct = (data, e) => {
  const imageData = new FormData();
  imageData.set("key", "37a96f844b1a465fa53a59a5d9a189c4");
  imageData.append("image", data.productImage[0]);
  imageData.append("name", data.productName);

  return axios
    .post("https://api.imgbb.com/1/upload", imageData)
    .then((result) => {
      if (result.data.status === 200) {
        const eventDataObject = {
          productImage: result.data.data.display_url,
          productName: data.productName,
          productQuantity: data.productQuantity,
          productPrice: data.productPrice.startsWith("$") ? data.productPrice : "$" + data.productPrice.startsWith("$"),
        };
        return axios
          .post("http://localhost:4000/addProduct", eventDataObject)
          .then((success) => {
            e.target.reset();
            return true;
          })
          .catch((exception) => {
            return false;
          });
      }
    })
    .catch((exception) => {
      console.log(exception);
      return false;
    });
};

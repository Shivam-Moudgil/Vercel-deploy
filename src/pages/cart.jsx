import axios from "axios";
import React, {useEffect, useState} from "react";
import CartEmpty from "../../components/Cart/CartEmpty";
import CartFill from "../../components/Cart/CartFill";
// console.log("pop",process.env.BASE_URL)

const getdata = async () => {
  return await axios.get(process.env.Cart_Route);
};

const cart = () => {
  const [cartdata, setCartData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const updateData = () => {
    setRefresh(!refresh);
  };

  // console.log(cartdata)
  useEffect(() => {
    getdata()
      .then((res) => setCartData(res.data))
      .catch((err) => console.log(err));
  }, [refresh]);
  return (
    <>
      {cartdata.length != 0 ? (
        <CartFill cartdata={cartdata} updateData={updateData} />
      ) : (
        <CartEmpty />
      )}
    </>
  );
};

export default cart;

// export const getServerSideProps = async () => {
//   const res = await axios.get("http://localhost:3000/api/cart");
//   return {
//     props: {
//       cartdata: res.data,
//     },
//   };
// };

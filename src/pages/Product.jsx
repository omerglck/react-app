import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../components/Input";
import Button from "../components/Button";
import Modal from "../components/Modal";
import ProductCard from "./../components/ProductCard";
import { modalFunction } from "../redux/modalSlice";
import { createDataFunc, updateDataFunc } from "../redux/dataSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Product = () => {
  const { modal } = useSelector((state) => state.modal);
  const { data, keyword } = useSelector((state) => state.data);
  const location = useLocation();
  const navigate = useNavigate();

  console.log("location", location.search.split("=")[1]);
  // console.log(modal);
  const dispatch = useDispatch();

  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    url: "",
  });

  let loc = location.search.split("=")[1];
  useEffect(() => {
    if (loc) {
      setProductInfo(data.find((dt) => dt.id == loc));
    }
  }, [loc]);

  const onChangeFunction = (e, type) => {
    if (type == "url") {
      setProductInfo((prev) => ({
        ...prev,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setProductInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };
  const buttonFunc = () => {
    dispatch(createDataFunc({ ...productInfo, id: data.length + 1 }));
    dispatch(modalFunction());
  };
  const buttonUpdateFunc = () => {
    dispatch(updateDataFunc({ ...productInfo, id: parseInt(loc) }));
    dispatch(modalFunction());
    navigate("/");
  };
  const contentModal = (
    <>
      <Input
        value={productInfo?.name}
        type={"text"}
        placeholder={"Ürün ekle"}
        name={"name"}
        id={"name"}
        onChange={(e) => onChangeFunction(e, "name")}
      />
      <Input
        value={productInfo?.price}
        type={"text"}
        placeholder={"Fiyat ekle"}
        name={"price"}
        id={"price"}
        onChange={(e) => onChangeFunction(e, "price")}
      />
      <Input
        type={"file"}
        placeholder={"Resim seç"}
        name={"url"}
        id={"url"}
        onChange={(e) => onChangeFunction(e, "url")}
      />
      <Button
        onClick={loc ? buttonUpdateFunc : buttonFunc}
        btnText={loc ? "Ürün Güncelle" : "Ürün Oluştur"}
      />
    </>
  );
  const filtredItems = data.filter((dt) =>
    dt.name.toLowerCase().includes(keyword)
  );
  return (
    <div>
      <div className="flex items-center gap-3 flex-wrap">
        {filtredItems?.map((dt, i) => (
          <ProductCard key={i} dt={dt} />
        ))}
      </div>
      <div>
        {modal && (
          <Modal
            content={contentModal}
            title={loc ? "Ürün Güncelle" : "Ürün Oluştur"}
          />
        )}
      </div>
    </div>
  );
};

export default Product;

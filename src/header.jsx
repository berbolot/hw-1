import React from "react";

function Headera({ url, text }) {
  return (
    <>
      <h1>Kutman</h1>
      <h1>Berbolot</h1>
      <h1>Aktan</h1>
      <h1>{text}</h1>
      <img src={url} alt="" />
    </>
  );
}

const Header = () => {
  return (
    <>
      <Headera
        text="osmvismvis"
        url={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/BMW_G20%2C_Paris_Motor_Show_2018%2C_IMG_0493.jpg/1200px-BMW_G20%2C_Paris_Motor_Show_2018%2C_IMG_0493.jpg"
        }
      />
      <div>Header</div>
    </>
  );
};

export default Header;

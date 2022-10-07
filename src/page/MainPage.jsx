import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Main from "../components/Main";

export default function MainPage() {
  const [stock, setStock] = useState([]);

  const getData = async () => {
    await axios
      .request({
        url: "http://192.168.72.124:8080/stockrank",
        method: "GET",
      })
      .then((res) => {
        setStock(res.data.data.slice(0, 100));
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(stock);
  }, [stock]);

  const props = {
    stock,
  };

  return (
    <Container>
      <Main {...props} />
    </Container>
  );
}

const Container = styled.div``;

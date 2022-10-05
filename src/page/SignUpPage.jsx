import axios from "axios";
import { useState } from "react";
import SignUp from "../components/SignUp";

export default function SignUpPage() {
  const [account, setAccount] = useState({
    nickName: "",
    id: "",
    pw: "",
  });

  const onAxios = async () => {
    console.log("onAxiossdfjlksjkls");
    await axios
      .post("http://192.168.154.124:8080/signup", account)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  const onChangeAccount = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const props = {
    account,
    onChangeAccount,
    onAxios,
  };
  return (
    <>
      <SignUp {...props} />
    </>
  );
}

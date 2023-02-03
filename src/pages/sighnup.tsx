import React, { useState } from "react";

interface Data {
  full_name: string;
  user_adress: string;
  username: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [data, setData] = useState<Data>({
    full_name: "",
    user_adress: "",
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("https://api.supabase.co/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: data.full_name,
          user_adress: data.user_adress,
          username: data.username,
          email: data.email,
          password: data.password,
        }),
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="full_name"
        value={data.full_name}
        onChange={handleInputChange}
        placeholder="Full Name"
      />
      <input
        type="text"
        name="user_adress"
        value={data.user_adress}
        onChange={handleInputChange}
        placeholder="Address"
      />
      <input
        type="text"
        name="username"
        value={data.username}
        onChange={handleInputChange}
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={handleInputChange}
        placeholder="Password"
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;

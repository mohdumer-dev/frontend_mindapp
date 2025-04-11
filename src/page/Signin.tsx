import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin: React.FC = () => {
  const navigate = useNavigate();
  const URL = import.meta.env.VITE_BACK;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const data = useMutation({
    mutationFn: async () => {
      await new Promise((e) => {
        setTimeout(e, 2000);
      });
      try {
        const data = await axios.post(`${URL}/signin`,{
          email: email,
          password: password,
          
        },{
            withCredentials:true
        });
        return data.data.msg;
      } catch (err: any) {
        const msg = err.response?.data?.msg || "Sometghing went wrong";
        throw new Error(msg);
      }
    },
    onSuccess: (data) => {
      alert(data);
      navigate("/dashboard");
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    data.mutateAsync();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-2 border border-gray-300 rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />

        <button
          disabled={data.isPending}
          type="submit"
          className="w-full bg-green-600 text-white cursor-pointer py-2 rounded hover:bg-green-700"
        >
          {data.isPending ? "Loading..." : "Signin"}
        </button>
      </form>
    </div>
  );
};

export default Signin;

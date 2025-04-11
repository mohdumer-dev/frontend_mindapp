import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { data, Navigate, useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const URL = import.meta.env.VITE_BACK;
  const navigate=useNavigate()

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const sendData = useMutation({
    mutationFn: async () => {
      try {
        await new Promise((r)=>{setTimeout(r,2000)})
        const response = await axios.post(`${URL}/signup`, {
          email,
          password,
        });
        const data = response.data.msg;
        return data;
      } catch (err: any) {
        const msg = err.response?.data?.msg || "Sometghing went wrong";
        throw new Error(msg);
      }
    },
    onSuccess: (data) => {
      alert(data);
      navigate('/signin')
    },
    onError: (err) => {
      alert(err);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendData.mutate();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
       
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

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
          disabled={sendData.isPending}
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded cursor-pointer hover:bg-blue-700"
        >
          {sendData.isPending ? "Loading..." : "Signup"}
        </button>
      </form>
    </div>
  );
};

export default Signup;

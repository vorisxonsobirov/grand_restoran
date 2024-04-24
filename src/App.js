import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Delivery from "./components/delivery/Delivery";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import LoginForm from "./components/LoginPanel/LoginPanel";
import AdminPage from "./components/WorkerPanel/AdminPage";
import ManagerPage from "./components/WorkerPanel/ManagerPage";
import WaiterPage from "./components/WorkerPanel/WaiterPage";
import CookPage from "./components/WorkerPanel/CookPage";

const App = () => {
  const [userType, setUserType] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {

      setUserType("admin");
    }
    setLoading(false);
  }, []);
  console.log(userType);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/admin" element={userType === "admin" || userType === "manager" ? <AdminPage /> : null} />
        <Route path="/manager" element={userType === "manager" || userType === "waiter" ? <ManagerPage /> : null} />
        {(userType === "waiter" || userType === "cook") && <Route path="/waiter" element={<WaiterPage />} />}
        {userType === "cook" && <Route path="/cook" element={<CookPage />} />}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
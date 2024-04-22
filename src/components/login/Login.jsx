import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { message } from "antd";
import axios from "../api";
import { showLoading, hideLoading } from "../redux/features/indexSlice";
import { FaUser } from "react-icons/fa";
import { PiLockKeyFill } from "react-icons/pi";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import bg from "../assets/img/bg.svg";
import wave from "../assets/img/wave.png";
import imgDoc from "../assets/img/singleImg1.png";

const Login = () => {
    const dispatch = useDispatch();
    const [login, setUsername] = useState("");
    const [eye, setEye] = useState(false);
    const [password, setPassword] = useState("");

    const onfinishHandler = async (e) => {
        e.preventDefault();
        if (!login || !password) {
            return message.warning("Marhamat, Foydalanuvchi nomingiz va parolingizni kiriting!");
        }
        try {
            dispatch(showLoading());
            const res = await axios.post("/admin/login", { login, password });
            dispatch(hideLoading());
            if (res.data.success) {
                let exactAdmin = res?.data?.exactAdmin;
                localStorage.setItem("doctorID", exactAdmin.idNumber);
                localStorage.setItem("token", res?.data?.token);
                localStorage.setItem("admin", exactAdmin?.docORrecep);
                localStorage.setItem("doctorType", exactAdmin?.type);
                localStorage.setItem("category", exactAdmin?.specialization);
                localStorage.setItem("doctorPhone", exactAdmin?.phone);
                localStorage.setItem(
                    "doctorName",
                    exactAdmin?.lastName + " " + exactAdmin?.firstName
                );
                message.success(res?.data?.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            message.error(error?.response?.data?.msg);
        }
    };

    useEffect(() => {
        let admin = localStorage.getItem("admin");
        if (admin === "owner") window.location = "/reports";
        if (admin === "reception") window.location = "/receptionHome";
        if (admin === "doctor") window.location = "/appointments";
    }, []);

    return (
        <div className="Loginbodylog">
            <img className="wave" src={wave} alt="login" />
            <div className="containerlog">
                <div className="imgLog">
                    <img src={bg} alt="login" />
                </div>
                <div className="login-content">
                    <form className="FormLogin" onSubmit={onfinishHandler}>
                        <img src={imgDoc} alt="login LOGO" />
                        <h2 className="title">Welcome</h2>
                        <div className="input-div one">
                            <div className="iconCont">
                                <FaUser />
                            </div>
                            <div className="Inputdiv">
                                <input
                                    value={login}
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="text"
                                    placeholder="Username"
                                    className="input"
                                />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="iconCont">
                                <PiLockKeyFill />
                            </div>
                            <div className="Inputdiv">
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type={!eye ? "password" : "text"}
                                    placeholder="Password"
                                />
                                <button type="button" onClick={() => setEye(!eye)}>
                                    {eye ? (
                                        <AiFillEye />
                                    ) : (
                                        <AiFillEyeInvisible />
                                    )}
                                </button>
                            </div>
                        </div>
                        <input type="submit" className="btnIN" value="Login" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

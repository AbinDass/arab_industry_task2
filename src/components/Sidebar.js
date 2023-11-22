/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import "./Sidebar.css";
const Sidebar = () => {
    const [dashboard, setDashboard] = useState(true);
    return (
        <div className="sidebar">
            <section className="profile">
                <img
                    src="https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3-768x464.png"
                    alt="/profile-image"
                    className="profile-image"
                />
                <div className="profile-content">
                    <h2>
                        Ram Mohan <span className="arrow"> {">"} </span>{" "}
                    </h2>
                    <p>rammohan2@gmail.com</p>
                </div>
            </section>

            <section className="navigation">
                <div className="navs"  style={{
                                    backgroundColor: dashboard ? "#8cceed" : "transparent",
                                }}>
                    <h5 className="nav-item">
                        <sapan>
                            <img
                               
                                className="logo-navs"
                                src="https://cdn.iconscout.com/icon/premium/png-512-thumb/dashboard-3015057-2503766.png?f=avif&w=256"
                                alt="/logo-navs"
                            />
                        </sapan>
                        Dashboard
                    </h5>
                </div>
                <div className="navs">
                    <h5 className="nav-item">
                        <sapan>
                            <img
                                className="logo-navs"
                                src="https://cdn-icons-png.flaticon.com/512/8344/8344472.png"
                                alt="/logo-navs"
                            />
                        </sapan>
                        Perks
                    </h5>
                </div>
                <div className="navs">
                    <h5 className="nav-item">
                        <sapan>
                            <img
                                className="logo-navs"
                                src="https://png.pngtree.com/png-clipart/20220616/original/pngtree-3d-extension-icon-png-png-image_8091158.png"
                                alt="/logo-navs"
                            />
                        </sapan>
                        Addons
                    </h5>
                </div>
                <div className="navs">
                    <h5 className="nav-item">
                        <sapan>
                            <img
                                className="logo-navs"
                                src="https://vtransgroup.com/wp-content/uploads/2020/11/faq.svg"
                                alt="/logo-navs"
                            />
                        </sapan>
                        FAQ
                    </h5>
                </div>
                <div className="navs">
                    <h5 className="nav-item">
                        <sapan>
                            <img
                                className="logo-navs"
                                src="https://icons.iconarchive.com/icons/dtafalonso/win-10x/512/Feedback-icon.png"
                                alt="/logo-navs"
                            />
                        </sapan>
                        Support
                    </h5>
                </div>
            </section>

            <section className="logOut">
                <div className="logout-btn">
                    Logout{" "}
                    <span>
                        <img
                            className="power-icon"
                            src="https://www.clker.com/cliparts/T/k/L/G/x/R/power-icon-blue.svg.med.png"
                            alt="/logout-icon"
                        />
                    </span>
                </div>
            </section>
        </div>
    );
};

export default Sidebar;

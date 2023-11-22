import React from "react";
import "./DashBoard.css";
import PlanCard from "./PlanCard";
import AddCard from "./AddCard";

const DashBoard = () => {
    const cardData = [
        {
            title: "Basic",
            oldPrice: "$ 89.99/mon",
            newPrice: "$ 9.99/mon",
            users: 25,
            storage: 25,
            support: "email support",
        },
        {
            title: "Standard",
            oldPrice: "$ 189.99/mon",
            newPrice: "$ 99.99/mon",
            users: 50,
            storage: 60,
            support: "email support + chat support",
        },
        {
            title: "Premium",
            oldPrice: "$ 389.99/mon",
            newPrice: "$ 199.99/mon",
            users: 75,
            storage: 100,
            support: "email + chat + whatsapp support",
        },
    ];
    const AddcardData = [
        {
            plan:'free forever',
            title: "Free Starter",
            content:'the quick set and easiest way to try protocols with basic functionalities',
            users: 8,
            storage: 3,
            support: "email support",
            button:'get started',
            description:'Basic documents TAsk flow ,voting accounting ,banking ,notes,investors director and team management includes'
        },
        {
            plan:'lets connect',
            title: "Enterprice plan",
            content:'effortlessly customize and fine tune services as your need shift ensuring the perfect tool for success',
            users: 75,
            button:'contact us',
            description:'customization of all other features'
        },
        
    ];
    return (
        <div className="dashboard">
            <div className="container">
                <div className="dashboard-head">
                    <div>Choose a plan that's just right for you !</div>
                    <div className="chage-data">
                        <button className="montly"> montly </button>
                        <button className="annualy"> annually </button>
                    </div>
                </div>
                <div className="plancard col-6 col-s-9">
                    {cardData.map((item, index) => (
                        <PlanCard key={index} item={item} />
                    ))}
                </div>
                <div className="addcard">
                {AddcardData.map((data, index) => (
                        <AddCard key={index} data={data} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashBoard;

/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./PlanCard.css";
import { IoMdMan } from "react-icons/io";
import { IoIosCloudUpload } from "react-icons/io";
import { MdEmail } from "react-icons/md";
const PlanCard = ({ item }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h2 className="card-title"> {item.title}</h2>
                <p className="old-rate">{item.oldPrice}</p>
                <h1>{item.newPrice}</h1>
                <button
                    className={
                        item.title === "Basic"
                            ? "basicPlan"
                            : item.title === "Standard"
                            ? "standardPlan"
                            : item.title === "Premium"
                            ? "premiumPlan"
                            : ""
                    }
                >
                    get started{" "}
                    <span>
                        <img src="https://cdn-icons-png.flaticon.com/512/664/664866.png" alt="/arrow" />
                    </span>
                </button>

                <hr></hr>
                <p className="card-text">what you will get:</p>
                <p className="card-text">
                    <span><IoMdMan /></span> upto {item.users} users
                </p>
                <p className="card-text">
                    <span><IoIosCloudUpload /></span> upto {item.storage} gb storage
                </p>
                <p className="card-text">
                    <span><MdEmail /></span> {item.support}
                </p>

                <h4>EXPLORE FEUTURES</h4>
            </div>
        </div>
    );
};

export default PlanCard;

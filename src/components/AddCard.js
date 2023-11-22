import React from 'react'
import './AddCard.css'
import { IoMdMan } from "react-icons/io";
import { IoIosCloudUpload } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
const AddCard = ({data}) => {
  return (
    <div className="add-card">
            <div className="add-card-content">
                <button className={data.plan === "free forever"
                            ? "foreverbtn"
                            : "contactbtn"}>{data?.plan}</button>
                <h2 className="add-card-title">{data?.title}</h2>
                <p className="add-card-text">{data?.content}</p>
                <button
                    className={
                        data.plan === "free forever"
                            ? "getstarted"
                            : "letcontact"
                    }
                    // className='getstarted'
                >
                    get started{" "}
                    <span>
                        <img src="https://cdn-icons-png.flaticon.com/512/664/664866.png" alt="/arrow" />
                    </span>
                </button>
            </div>
            <div className="add-card-content1">
            <p className="card-text">what you will get:</p>
                <p className="add-card-text">
                    <span><IoMdMan /></span> upto {data?.users} users
                </p>
                <p className="add-card-text">
                    <span><IoIosCloudUpload /></span> upto {data?.storage} gb storage
                </p>
                <p className="add-card-text">
                    <span><MdEmail /></span> {data?.support}
                </p>
                <p className="add-card-text">
                    <span><FaCheckDouble /></span> {data?.description}
                </p>
            </div>
        </div>
  )
}

export default AddCard

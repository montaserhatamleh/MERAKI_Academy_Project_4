import React, { useState, useContext, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { userContext } from "../../App";
import { Button, Modal } from "antd";
import "./styles.css";
import TextArea from "antd/es/input/TextArea";

const AcceptApplying = () => {
  const { token } = useContext(userContext);
  const [request, setRequest] = useState([]);
  //Pop Up
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //pop Up

  // state for send Email using Emailjs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //send Email use EmailJs
  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_atf6u6w";
    const templateId = "template_lo1ors5";
    //New object that contains dynamic template Params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Job Quest",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, {
        publicKey: "WUABrV4UwQcC8k1Ew",
      })
      .then((res) => {
        console.log("Email send successfully", res);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.log("error sending email", err);
      });
  };
  //get appliers
  const fetchRequests = () => {
    axios
      .get("http://localhost:5000/apply/getRequests")
      .then((res) => {
        setRequest(res.data.appliers);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const getJobAppById = (id) => {
    axios
      .get(`http://localhost:5000/createJob/getJobAppById/${id}`)
      .then((res) => {
        console.log(res.data);
        //res.data.appliers
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteApplier = (id) => {
    // console.log(id);
    // console.log("hi shareef", token);
    axios
      .put(
        `http://localhost:5000/createJob/deleteApplier/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log(res);
        // setRequest(res.data.id);
        console.log("hi montaser");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchRequests();
  }, []);
  return (
    <div>
      <header
        className="masthead"
        style={{ backgroundImage: 'url("assets/img/contact-bg.jpg")' }}
      >
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>Application Submission</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            {/* Post preview*/}
            <div className="post-preview">
              <div>
                {request.map((elem, i) => (
                  <div key={i} className="applier">
                    <h3>{elem.createdBy?.userName}</h3>
                    <iframe
                      src="http://res.cloudinary.com/dk50zfxtr/image/upload/v1719087621/xjdhvmd1bm2dcvktfswb.jpg"
                      width={"100%"}
                      height={"100%"}
                    />
                    <p>{elem.experience}</p>
                    <button
                      onClick={() => {
                        deleteApplier(elem._id);
                      }}
                    >
                      Delete
                    </button>

                    <Button type="primary" onClick={showModal}>
                      Accept
                    </Button>
                    <Modal
                      open={isModalOpen}
                      onOk={handleOk}
                      onCancel={handleCancel}
                    >
                      <form onSubmit={handleSubmit}>
                        <input
                          className="modal-input"
                          type="email"
                          placeholder="Your Email"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                        <input
                          className="modal-input"
                          type="email"
                          placeholder="Send To Email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                        <TextArea
                          className="modal-textarea"
                          cols="30"
                          rows="10"
                          value={message}
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }}
                        ></TextArea>
                        <button className="modal-submit-button" type="submit">Send Email</button>
                      </form>
                    </Modal>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptApplying;

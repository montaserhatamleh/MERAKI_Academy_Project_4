import React, { useState, useContext, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { useParams } from "react-router-dom";
import { userContext } from "../../App";
import { Button, Modal } from "antd";
import "./styles.css";
import TextArea from "antd/es/input/TextArea";

const AcceptApplying = () => {
  const { token } = useContext(userContext);
  const [request, setRequest] = useState([]);
  const { id } = useParams();
  // console.log(id);
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
  ///get all appliers by id for one job NEW
  const fetchRequest = () => {
    axios
      .get(`http://localhost:5000/createJob/getJobAppById/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("fetch data successfully", res.data.appliers[0].appliers);
        setRequest(res.data.appliers[0].appliers.sort());
      })
      .catch((err) => {
        console.log("fetch jon by id in not working", err);
      });
  };
  // Function for Delete post
  const deleteApplier = (application) => {
    // console.log(id);
    // console.log("hi shareef", token);
    axios
      .put(
        `http://localhost:5000/createJob/deleteApplier/${application}`,
        { id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        // console.log(res.data.deleted);
        // console.log(request);
        const indexDeleted = request.findIndex(
          (x) => x._id === res.data.deleted._id
        );
        request.splice(indexDeleted, 1);
        setRequest([...request]);
        // console.log(indexDeleted);
        // console.log(request.length);
        // console.log(request.length);
        // console.log(request);
        // setRequest(res.data.id);
        // console.log("hi montaser");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchRequest();
  }, []);
  return (
    <div>
      <header
        className="masthead"
        style={{
          backgroundImage:
            'url("https://rare-gallery.com/thumbs/5401576-phone-cable-number-retro-dial-auricular-comiunicacin-telecomunicacin-telfono-digital-telfono-antiguo-mlaga-blanco-y-negro-quinoal-quino-telfono-telfono-clsico-public-domain-images.jpg")',
        }}
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
                      src={elem.cv}
                      style={{
                        width: "60rem",
                        height: "50rem",
                        overflowY: "hidden",
                      }}
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
                        <button className="modal-submit-button" type="submit">
                          Send Email
                        </button>
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

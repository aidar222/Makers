import React, { useContext, useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { topicsContext } from "../Context/TopicContext";
import "./AddTopic.css";
import "react-toastify/dist/ReactToastify.css";

const AddTopic = () => {
  const { addTopics } = useContext(topicsContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [lib, setLib] = useState("");

  const alertToastify = () => {
    toast.error("🦄 Заполните все поля!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleClick = () => {
    if (!title.trim() || !description.trim() || !image.trim() || !lib.trim()) {
      alertToastify();
      return;
    }
    let newTopic = {
      title,
      description,
      image,
      lib,
    };
    addTopics(newTopic);
    setTitle("");
    setDescription("");
    setImage("");
    setLib("");
  };

  return (
    <div className="containerAddTopic">
      <InputGroup className="addTopic-inputs mb-3">
        <InputGroup.Text id="basic-addon1">Название</InputGroup.Text>
        <FormControl
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Добавьте название"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="addTopic-inputs mb-3">
        <InputGroup.Text id="basic-addon1">Описание</InputGroup.Text>
        <FormControl
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Добавьте описание"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="addTopic-inputs mb-3">
        <InputGroup.Text id="basic-addon1">Картинка</InputGroup.Text>
        <FormControl
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Вставьте ссылку на картинку"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="addTopic-inputs mb-3">
        <InputGroup.Text id="basic-addon1">Ссылка</InputGroup.Text>
        <FormControl
          value={lib}
          onChange={(e) => setLib(e.target.value)}
          placeholder="Вставьте ссылку на информацию"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Button onClick={handleClick} className="addTopic-btn">
        Добавить
      </Button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default AddTopic;

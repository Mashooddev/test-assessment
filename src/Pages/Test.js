import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
export default function Test() {
  const [heading, setheading] = useState("User Form");
  const [checked, setchecked] = useState(false);
  const navigate = useNavigate();
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  function Validate() {
    if (data.name === "" && data.email === "" && data.password === "") {
      alert("Please fill all the fields");
    } else if (data.name === "") {
      alert("Please enter name");
    } else if (data.email === "") {
      alert("Please enter email");
    } else if (data.password === "") {
      alert("Please enter password");
    } else if (!data.email.match(/[@]/)) {
      alert("Email should format properly ");
    } else if (
      data.password.length < 8 ||
      data.password.includes(" ") ||
      !data.password.match(/[0-9]/) ||
      !data.password.match(/[a-z]/) ||
      !data.password.match(/[!@#$%^&*]/)
    ) {
      alert(
        "Password should be at least 8 charachters in length and Alphanumeric and should contain special characters "
      );
    } else {
      navigate("/redirect");
    }
  }
  return (
    <div>
      <Card className="m-4 p-4">
        <h3>{heading}</h3>
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className="p-3 mt-3"
        >
          <p>Manager Form</p>
          <Form.Check
            checked={checked}
            onChange={() => {
              if (checked) {
                setheading("User Form");
              } else {
                setheading("Manager Form");
              }
              setchecked(!checked);
            }}
            className="mt-2"
            type="switch"
          />
        </div>
        <Form className="mt-4">
          <Form.Control
            onChange={(e) => setdata({ ...data, name: e.target.value })}
            value={data.name}
            placeholder="name"
            type="text"
          />
          <Form.Control
            onChange={(e) => setdata({ ...data, email: e.target.value })}
            value={data.email}
            className="mt-5"
            placeholder="email-address"
            type="email"
          />
          <Form.Control
            onChange={(e) => setdata({ ...data, password: e.target.value })}
            value={data.password}
            className="mt-5"
            placeholder="password"
            type="password"
          />

          <Button onClick={Validate} className="mt-5" variant="primary">
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
}

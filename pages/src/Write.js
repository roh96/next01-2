import addstyle from "@/styles/_add.module.scss";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Write = () => {
  const router = useRouter();
  const initial = { id: "", name: "", work: "", date: "" };
  const [inputValue, setValue] = useState(initial);

  function valueChange(e) {
    let t = e.target;
    setValue((obj) => {
      return { ...obj, [t.name]: t.value };
    });
  }
  function create(e) {
    e.preventDefault();
    axios.post("/api/hello", { ...inputValue, id: Date.now().toString() });
    router.push("/");
  }

  return (
    <div className={addstyle.div}>
      <form onSubmit={create}>
        <p>
          <input
            onChange={valueChange}
            type="text"
            placeholder="이름"
            name="name"
          />
        </p>
        <p>
          <input
            onChange={valueChange}
            type="work"
            placeholder="할일"
            name="work"
          />
        </p>
        <p>
          <input
            onChange={valueChange}
            type="date"
            placeholder="날짜"
            name="date"
          />
        </p>

        <div>
          <input type="submit" value="저장" />
        </div>
      </form>
    </div>
  );
};

export default Write;

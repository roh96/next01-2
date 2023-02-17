import addstyle from "@/styles/_add.module.scss";
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Update = () => {
  const router = useRouter();
  const { query } = router;
  //console.log(query);
  const initial = {};
  const [inputValue, setValue] = useState(initial);

  function valueChange(e) {
    let t = e.target;
    setValue((obj) => {
      return { ...obj, [t.name]: t.value };
    });
  }
  function create(e) {
    e.preventDefault();
    axios.put("/api/hello", { ...inputValue, id: query.id });
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

export default Update;

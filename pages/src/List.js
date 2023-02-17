import listyle from "@/styles/_list.module.scss";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

const List = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  function dataget() {
    axios.get("api/hello").then((res) => {
      setData(res.data);
    });
  }
  function dataDelete(id) {
    axios.delete("api/hello", { data: id });
    dataget();
  }

  useEffect(dataget, []);

  if (!data.length)
    return (
      <>
        loading...
        <Link href="/src/Write">스케줄입력</Link>
      </>
    );
  return (
    <>
      <article className={listyle.arti}>
        <h2>LIST</h2>
        <ul>
          {data.map((obj) => (
            <li key={obj.id}>
              {obj.name} / {obj.work} / {obj.date}
              <div>
                <button
                  onClick={() =>
                    router.push({ pathname: "/src/Update", query: obj })
                  }
                >
                  수정
                </button>
                <button onClick={() => dataDelete(obj.id)}>삭제</button>
              </div>
            </li>
          ))}
        </ul>
      </article>
      <Link href="/src/Write">스케줄입력</Link>
    </>
  );
};

export default List;

import { useState, useEffect } from "react";
import "./Memos.css";

const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getMemos();
      setMemos(memos);
    };
    contract && memosMessage();
  }, [contract]);

  return (
    <div className="container-fluid">
      <h3 className="title">MESSAGES</h3>
      <table className="memos-table">
        <tbody>
          {memos.map((memo, index) => (
            <tr key={index}>
              <td className="memos-cell">{memo.name}</td>
              <td className="memos-cell">
                {new Date(memo.timestamp * 1000).toLocaleString()}
              </td>
              <td className="memos-cell">{memo.message}</td>
              <td className="memos-cell">{memo.from}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Memos;

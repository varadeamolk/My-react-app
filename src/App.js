import axios from "axios";
import { useState } from "react";

function App() {
  let [title] = useState("API INTEGRATION");
  let [messageList, setMessageList] = useState([]);

  let getAllMessages = async () => {
    let url = `http://localhost:3001/message`;
    let response = await axios.get(url);
    // console.log(response);
    // getting the messages from server
    messageList = [...response.data];
    // re-reendering data
    setMessageList(messageList);
  };

  return (
    <div>
      <h1>{title}</h1>
      <input
        type="button"
        value="make ajax/API call"
        onClick={getAllMessages}
      />

      {messageList.map((item) => (
        <div>{item.message}</div>
      ))}
    </div>
  );
}

export default App;

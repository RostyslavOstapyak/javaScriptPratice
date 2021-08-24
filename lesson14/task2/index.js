export default function createMessenger() {
  let message = "Just learn it";
  let sender = "Gromcode";

  const sendMessage = (name) => {
    console.log(`${name}, ${message}! Your ${sender}`);
  };

  const setMessage = (text) => {
    message = text;
  };
  const setSender = (senderName) => {
    sender = senderName;
  };
  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messenger1 = createMessenger();
messenger1.sendMessage("Bob");
messenger1.setMessage("ааа");
messenger1.setSender("ggg");
messenger1.sendMessage("Bob");

const messenger2 = createMessenger();
messenger2.sendMessage("John");
// messenger2.setMessage("hello!");
// messenger2.setSender("fff");
// messenger2.sendMessage("Tim");

// messenger1.sendMessage("Ann");
// messenger2.sendMessage("Bob");

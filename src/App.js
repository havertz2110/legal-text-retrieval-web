// import React, { useState} from 'react';
// import { MdSend, MdVideoCall, MdCall } from 'react-icons/md';
// import { FaRegSmile } from 'react-icons/fa';

// function ChatUIComponent() {
//   const [messages, setMessages] = useState([
//     { id: 1, text: 'Hi there!', type: 'sent', timestamp: '10:00 AM' },
//     { id: 2, text: 'Hello! How can I help you today?', type: 'received', timestamp: '10:01 AM' }
//   ]);
  
//   const [message, setMessage] = useState('');

//   const handleSend = () => {
//     if (message.trim()) {
//       setMessages([...messages, { id: Date.now(), text: message, type: 'sent', timestamp: new Date().toLocaleTimeString() }]);
//       setMessage('');
//     }
//     fetch('http://127.0.0.1:5000/retrieval', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ query: message }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data)
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { id: Date.now(), text: data.articles, type: 'received', timestamp: new Date().toLocaleTimeString() },
//         ]);        
//         setMessage(''); // Reset ô nhập liệu
//       })
//       .catch((error) => console.error('Error sending message:', error));
//   };

//   return (
//     <div style={{
//       width: '100%', 
//       maxWidth: '600px', 
//       margin: '20px auto', 
//       borderRadius: '10px', 
//       border: '1px solid #ddd', 
//       backgroundColor: 'white', 
//       display: 'flex', 
//       flexDirection: 'column', 
//       height: '500px'
//     }}>
//       <header style={{
//         backgroundColor: '#f0f0f0', 
//         padding: '20px', 
//         display: 'flex', 
//         justifyContent: 'space-between', 
//         alignItems: 'center', 
//         borderBottom: '1px solid #ddd'
//       }}>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww' 
//               alt='Avatar' 
//               style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} 
//           />
//           <span style={{ marginLeft: '10px', fontSize: '16px', fontWeight: 'bold' }}>John Doe</span>
//         </div>
//         <div style={{ display: 'flex', gap: '15px' }}>
//           <MdCall size={20} style={{ cursor: 'pointer', color: '#555' }} />
//           <MdVideoCall size={24} style={{ cursor: 'pointer', color: '#555' }} />
//           <FaRegSmile size={20} style={{ cursor: 'pointer', color: '#555' }} />
//         </div>
//       </header>
//       <div style={{
//         flexGrow: '1', 
//         padding: '20px', 
//         overflowY: 'auto'
//       }}>
//         {messages.map(({ id, text, type, timestamp }) => (
//           <div key={id} style={{ display: 'flex', marginBottom: '15px', justifyContent: type === 'sent' ? 'flex-end' : 'flex-start' }}>
//             <div style={{
//               maxWidth: '70%', 
//               padding: '10px', 
//               borderRadius: '15px', 
//               fontSize: '14px', 
//               backgroundColor: type === 'sent' ? '#a5d6a7' : '#e1f5fe'
//             }}>
//               <p>{text}</p>
//               <small style={{ fontSize: '12px', color: '#555', textAlign: 'right' }}>{timestamp}</small>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div style={{
//         display: 'flex', 
//         alignItems: 'center', 
//         padding: '10px', 
//         backgroundColor: '#f0f0f0', 
//         borderTop: '1px solid #ddd'
//       }}>
//         <input
//           type='text'
//           placeholder='Type your message here...'
//           style={{
//             width: '100%', 
//             padding: '10px', 
//             borderRadius: '20px', 
//             border: '1px solid #ccc', 
//             fontSize: '14px', 
//             outline: 'none'
//           }}
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <button onClick={handleSend} style={{
//           backgroundColor: '#007bff', 
//           border: 'none', 
//           padding: '10px', 
//           borderRadius: '50%', 
//           marginLeft: '10px', 
//           cursor: 'pointer'
//         }}>
//           <MdSend style={{ color: 'white', fontSize: '20px' }} />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ChatUIComponent;
import React, { useState } from 'react';
import { MdSend, MdVideoCall, MdCall } from 'react-icons/md';
import { FaRegSmile } from 'react-icons/fa';

function ChatUIComponent() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Bác Lâm ơi', type: 'sent', timestamp: '10:00 AM' },
    { id: 2, text: 'Ai làm cháu khóc', type: 'received', timestamp: '10:01 AM' }
  ]);
  
  const [message, setMessage] = useState('');
  const [queryExpansion, setQueryExpansion] = useState(false);  // Thêm trạng thái cho query expansion

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { id: Date.now(), text: message, type: 'sent', timestamp: new Date().toLocaleTimeString() }]);
      setMessage('');
    }

    // Nếu query expansion được bật, hãy thay đổi câu truy vấn trước khi gửi
    
    console.log(queryExpansion)

    fetch('http://127.0.0.1:5000/retrieval', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: message , expansion : queryExpansion }),  // Sử dụng câu truy vấn sau khi mở rộng
    })
      .then((response) => response.json())
      .then((data) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: Date.now(), text: data.articles, type: 'received', timestamp: new Date().toLocaleTimeString() },
        ]);        
        setMessage(''); 
      })
      .catch((error) => console.error('Error sending message:', error));
  };

  return (
    <div style={{
      width: '100%', 
      maxWidth: '600px', 
      margin: '20px auto', 
      borderRadius: '10px', 
      border: '1px solid #ddd', 
      backgroundColor: 'white', 
      display: 'flex', 
      flexDirection: 'column', 
      height: '500px'
    }}>
      <header style={{
        backgroundColor: '#f0f0f0', 
        padding: '20px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderBottom: '1px solid #ddd'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* <img src='https://www.google.com/imgres?q=uit%20logo&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F38%2FLogo_UIT_updated.jpg%2F1200px-Logo_UIT_updated.jpg&imgrefurl=https%3A%2F%2Fvi.wikipedia.org%2Fwiki%2FT%25E1%25BA%25ADp_tin%3ALogo_UIT_updated.jpg&docid=2j9hqjYC9ER40M&tbnid=Ylx2m96IeBGzXM&vet=12ahUKEwi578auuY6LAxUyslYBHQpeH8MQM3oECBUQAA..i&w=1200&h=976&hcb=2&ved=2ahUKEwi578auuY6LAxUyslYBHQpeH8MQM3oECBUQAA' 
              alt='Avatar' 
              style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} 
          /> */}
          <span style={{ marginLeft: '10px', fontSize: '16px', fontWeight: 'bold' }}>Bác Lâm</span>
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <MdCall size={20} style={{ cursor: 'pointer', color: '#555' }} />
          <MdVideoCall size={24} style={{ cursor: 'pointer', color: '#555' }} />
          <FaRegSmile size={20} style={{ cursor: 'pointer', color: '#555' }} />
        </div>
      </header>
      <div style={{
        flexGrow: '1', 
        padding: '20px', 
        overflowY: 'auto'
      }}>
        {messages.map(({ id, text, type, timestamp }) => (
          <div key={id} style={{ display: 'flex', marginBottom: '15px', justifyContent: type === 'sent' ? 'flex-end' : 'flex-start' }}>
            <div style={{
              maxWidth: '70%', 
              padding: '10px', 
              borderRadius: '15px', 
              fontSize: '14px', 
              backgroundColor: type === 'sent' ? '#a5d6a7' : '#e1f5fe'
            }}>
              <p>{text}</p>
              <small style={{ fontSize: '12px', color: '#555', textAlign: 'right' }}>{timestamp}</small>
            </div>
          </div>
        ))}
      </div>
      <div style={{
        display: 'flex', 
        alignItems: 'center', 
        padding: '10px', 
        backgroundColor: '#f0f0f0', 
        borderTop: '1px solid #ddd'
      }}>
        <input
          type='text'
          placeholder='Type your message here...'
          style={{
            width: '100%', 
            padding: '10px', 
            borderRadius: '20px', 
            border: '1px solid #ccc', 
            fontSize: '14px', 
            outline: 'none'
          }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSend} style={{
          backgroundColor: '#007bff', 
          border: 'none', 
          padding: '10px', 
          borderRadius: '50%', 
          marginLeft: '10px', 
          cursor: 'pointer'
        }}>
          <MdSend style={{ color: 'white', fontSize: '20px' }} />
        </button>
      </div>
      <div style={{
        padding: '10px', 
        borderTop: '1px solid #ddd',
        backgroundColor: '#f9f9f9'
      }}>
        <label style={{ fontSize: '14px' }}>
          <input 
            type="checkbox" 
            checked={queryExpansion} 
            onChange={() => setQueryExpansion(!queryExpansion)} 
            style={{ marginRight: '8px' }} 
          />
          Enable Query Expansion
        </label>
      </div>
    </div>
  );
}

export default ChatUIComponent;

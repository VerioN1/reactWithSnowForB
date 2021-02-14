import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(){
  const notify = () => toast.success('✅ ❌ ⭕️ 🛑 ❗️ ❕ ❓  ⛔️ 🚨 📛 🚫Wow so easy!', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer
position="bottom-left"
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
}

export default App;

import './App.css'
import {reqToGroqAI} from "./utils/groq";
import {useState, useEffect} from "react";
import {Light as SyntaxHighlight} from "react-syntax-highlighter";
import {darcula} from "react-syntax-highlighter/dist/cjs/styles/prism";

function App() {
  const [data, setData] = useState("") 

  const handleSubmit = async () => {
    const ai = await reqToGroqAI(content.value);
    setData(ai);
  };

  useEffect(() => {
    document.title = "JidanGPT AI"
  }, [])

  return(
    <main className='flex flex-col min-h-[80vh] justify-center items-center max-w-xl w-full mx-auto'>
      <h1 className='text-4xl text-indigo-500'>JidanGPT AI</h1>
      
      <form className='flex flex-col gap-4 py-4 w-full'>
        <input
        placeholder='ketik pertanyaan disini' 
        className='py-2 px-4 text-md rounded-md'
        id='content'
        type='text'
        />
        <button 
        type='button'
        onClick={handleSubmit}
        className='bg-indigo-500 py-2 px-4 font-bold text-white rounded-md animate-pulse'>Kirim</button>
      </form>
      <div className='max-w-xl w-full mx-auto'>
      {data ?(
      <SyntaxHighlight 
      language='swift' 
      style={darcula} 
      wrapLongLines={true}
      >
       {data}
      </SyntaxHighlight>
       ): null}
      </div>
    </main>
  )
}

export default App

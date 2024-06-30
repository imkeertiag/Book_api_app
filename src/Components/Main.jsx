import React,{useState} from 'react'
import Card from "./Card";
import axios from "axios";
function Main() {
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        console.log("recieved ");
        if(evt.key==="Enter")
        {
            try {
                axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBr4dYlUEuH5VO9TbL91Btg90RqA4I42FQ'+'&maxResults=40')
                .then(res=>setData(res.data.items))
                .catch((error)=>{console.log(error.message)});
            } catch (error) {
                console.log(error.message);
            }
        }
    }
  return (
    <>
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like<br/> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onClick={searchBook(search)}/>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>

            <div className="container">
              {
                    <Card book={bookData}/>
              }  
            </div>
        </>
  )
}

export default Main
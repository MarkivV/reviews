import React, {useState} from 'react';
import data from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const Review = () => {
    const [index, setIndex] = useState(0)
    const {name,job,image,text} = data[index]

    const checkNum = (number) =>{
        if(number > data.length-1){
            return 0
        }else if(number < 0){
            return data.length-1
        }else {
            return number
        }
    }

    const randNum = () =>{
        let num = Math.floor(Math.random() * data.length)
        if(num === index){
            num = index + 1
        }
        setIndex(checkNum(num))
    }

    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img"/>
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">
                {name}
            </h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={()=>setIndex(checkNum(index-1))}>
                    <FaChevronLeft/>
                </button>
                <button className="prev-btn" onClick={()=>setIndex(checkNum(index+1))}>
                    <FaChevronRight/>
                </button>
            </div>

            <button className="random-btn" onClick={randNum}>
                Suprise me!
            </button>

        </article>
    );
};

export default Review;
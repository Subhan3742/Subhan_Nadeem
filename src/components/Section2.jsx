"use client"
import React from 'react'
import MyImage1 from '../../public/images/video.png';
import MyImage2 from '../../public/images/plus.png';
import faqs from '../../dummyData/section2.json';
import close from '../../public/images/close.png';
import tick from '../../public/images/tick.png';
import cross from '../../public/images/cross.png';
import refresh from '../../public/images/refresh.png';

import Image from 'next/image';
import { useState } from 'react';

const Section2 = () => {
  
    const [openIndex, setOpenIndex] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    const truncateText = (text, length) => {
      return text.length > length ? `${text.substring(0, length)}...` : text;
    };
  
    

  
    const [showUnsolvable, setShowUnsolvable] = useState(false);
    const [showEscalation, setShowEscalation] = useState(true);
    
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
      setShowUnsolvable(!isChecked);
      setShowEscalation(isChecked);
    };

    const [url, setUrl] = useState('');
  const [relatedParts, setRelatedParts] = useState('');
  const [answer, setAnswer] = useState('');

  const handleTempButtonClick = (field, value) => {
    if (field === 'url') {
      setUrl(value);
    } else if (field === 'relatedParts') {
      setRelatedParts(value);
    } else if (field === 'answer') {
      setAnswer(value);
    }
  };
  

 
  return (
    <div className=" grid xl:grid-cols-[60%_auto] font-gilory ">
      <div className='shadow-xl rounded-lg px-7 my-6'>


      <div className='flex w-full  items- py-4  gap-4 border-b border-solid border-[#D3D3D3] mb-4	'>
        <div className='p-4 rounded-full bg-[#f2f5fb]'>
          MN
        </div>
        <div>
          <h1 className='font-medium' style={{ display: 'inline-block', marginRight: '8px' }}>Mudassir Nisar</h1>
          <span className='text-[14px] text-[#7E7E7E]' style={{ display: 'inline-block' }}>07/28/2023</span>
          <p className='text-[#3062F9] font-semibold'>This is a new Ticket</p>
        </div>
      </div>
      

        <div className='bg-[#fafafa] py-4 px-3 font-gilory text-sm border border-solid border-[#E2E2E2] rounded-lg'>
          <div className='leading-6'>
            Agent at Mar 28, 2024 <br/>
            Hello Mudassir,<br/>
            Thank you for reaching out.<br/>
            <br/>

            In order to help you locate the correct parts and repair information, we will need more information about the problem  you are facing. Please submit a new question with more details, and we will be happy to help you.<br/>
            Looking forward to hearing from you!<br/>
            <br/>
            <div className='flex gap-4 items-center'>
           <div className='flex gap-2 items-center'> <Image src={MyImage1}  alt="video-icon" className='h-4 w-4' /> <span className='text-[#3062F9]'>Watch Video</span></div>
           <div className='flex gap-2 items-center'> <Image src={MyImage1}  alt="video-icon" className='h-4 w-4'/> <span className='text-[#3062F9]'>Watch Video</span></div>
           </div>

            Related Parts: 123 35
          </div>
        </div>


        <div className='pt-6 pb-3 font-gilory px-3'>
      <h1 className='font-bold'>Compose your reply</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-4'>
        <div>
          <label className='block mb-2 text-xs text-[#4F4F4F]'>URL</label>
          <input
            type='text'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className='border border-gray-300 rounded p-2 w-full'
          />
          <button
            className='my-4 mx-2 bg-[#F6F6F6] border border-solid border-[#D9D9D9] px-3 py-2 text-xs rounded'
            onClick={() => handleTempButtonClick('url', 'https://example.com/temp1')}
          >
     <div className='flex justify-between items-center gap-2'> <span > Temp1</span> <Image src={close} className='w-2 h-2' alt='close'/> </div> 
          </button>
          <button
            className='my-4 bg-[#F6F6F6] border border-solid border-[#D9D9D9] px-3 py-2 text-xs rounded'
            onClick={() => handleTempButtonClick('url', 'https://example.com/temp2')}
          >
      <div className='flex justify-between items-center gap-2'> <span> Temp2</span> <Image src={close} className='w-2 h-2' alt='close'/> </div> 
          </button>
        </div>
        
        <div>
          <label className='block mb-2 text-xs text-[#4F4F4F]'>Related Parts</label>
          <input
            type='text'
            value={relatedParts}
            onChange={(e) => setRelatedParts(e.target.value)}
            className='border border-gray-300 rounded p-2 w-full'
          />
          <button
            className='my-4 mx-2 bg-[#F6F6F6] border border-solid border-[#D9D9D9] px-3 py-2 text-xs rounded'
            onClick={() => handleTempButtonClick('relatedParts', 'Part A, Part B')}
          >
        <div className='flex justify-between items-center gap-2'> <span> Temp1</span> <Image src={close} className='w-2 h-2' alt='close'/> </div> 
          </button>
          <button
            className='my-4 bg-[#F6F6F6] border border-solid border-[#D9D9D9] px-3 py-2 text-xs rounded'
            onClick={() => handleTempButtonClick('relatedParts', 'Part C, Part D')}
          >
      <div className='flex justify-between items-center gap-2'> <span> Temp2</span> <Image src={close} className='w-2 h-2' alt='close'/> </div> 

          </button>
        </div>
      </div>

      <div>
        <label className='block mb-2 text-xs text-[#4F4F4F]'>Your answer goes here</label>
        <input
          type='text'
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className='border border-gray-300 rounded p-2 w-full'
        />
        <div className='flex justify-between items-center '>
          <div>
            <button
              className='my-4 mx-2 bg-[#F6F6F6] border border-solid border-[#D9D9D9] px-3 py-2 text-xs rounded'
              onClick={() => handleTempButtonClick('answer', 'This is a sample answer for Temp1.')}
            >
       <div className='flex justify-between items-center gap-2'> <span> Temp1</span> <Image src={close} className='w-2 h-2' alt='close'/> </div> 

            </button>
            <button
              className='my-4 bg-[#F6F6F6] border border-solid border-[#D9D9D9] px-3 py-2 text-xs rounded'
              onClick={() => handleTempButtonClick('answer', 'This is a sample answer for Temp2.')}
            >
        <div className='flex justify-between items-center gap-2'> <span> Temp2</span> <Image src={close} className='w-2 h-2' alt='close'/> </div> 

            </button>
          </div>
          <div>
            <button className='bg-[#2B68E8] text-[#FFFFFF] text-sm px-3 py-2 rounded'>Post Comment</button>
          </div>
        </div>
      </div>
    </div>
        

      </div>


                                    {/* col2 */}


      <div className='shadow-2xl sm:mx-6 rounded-lg my-6'>

      


      <div className="py-5 px-4 md:px-8 max-w-5xl mx-auto">

        <div className='font-gilory bg-[#fafafa] px-3 py-3  my-5 rounded-lg border border-solid border-[#E2E2E2]' >
        <div className='flex justify-between '>
        <h1 className='text-[14px] font-semibold'>Document Answer</h1>
        <div className='flex gap-2 items-center'>
        <Image src={tick} alt='tick' />
        <Image src={cross} alt='tick' />
        <Image src={refresh} alt='tick' className='w-4 h-4'/>
        </div>
          </div> 
         <p className='text-[12px] leading-5'>Order to help you locate the correct parts and repair information, we will need more information about the problem you are facing. Please submit a new question with more details, and we will be happy to help you.
          Looking forward to hearing from you!
          </p> 
        </div>

        <div className='font-gilory bg-[#fafafa] px-3 py-3  my-5 rounded-lg border border-solid border-[#E2E2E2]' >
        <div className='flex justify-between '>
        <h1 className='text-[14px] font-semibold'>Archived Questions</h1>
        <p className='text-[#3062F9] text-[12px]'>88% Similar</p>
          </div> 
          <div>
          <p className='font-semibold text-[12px]'> Q: Order to help you locate the correct parts and repair 
          </p>
            </div>
         <p className='text-[12px] leading-5'><b>A:</b> information, we will need more information about the problem you are facing. Please submit a new question with more details, and we will be happy to help you.
          </p> 
        </div>




      <ul className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <li key={index} className="bg-[#fafafa] border border-solid border-[#E2E2E2] rounded-lg ">
            <button
              className="relative flex justify-between items-center w-full py-5 px-6 text-left text-sm    border-base-content/10"
              aria-expanded={openIndex === index}
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex-1 font-medium font-gilory ">
                Q: {openIndex === index ? faq.question : truncateText(faq.question, 30)}
              </span> 
            <Image src={MyImage2} alt="plus-icon" className={`w-3 h-3 transition-transform duration-200 ${openIndex === index ? 'rotate-45' : ''}`} />
            </button>
            <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
              <div className="pb-5 px-6 leading-relaxed font-gilory text-[12px]">
                <div className=" text-[#050D1F] space-y-2 leading-relaxed">A: {faq.answer}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
 {/* comen */}

 
 <div className='px-4 mx-7 mb-3 py-1 font-gilory rounded-lg bg-[#fdfdfd] shadow-2xl'>
 
        <div className='border border-solid border-[#FFDCE0] bg-[#FFF7F8] font-gilory flex items-center justify-between px-3 gap-4 py-2 rounded-lg my-2'>
          <h1 className='text-[#E5354A] text-[12px]'>Unsolvable Question</h1>
          <button className='bg-[#E5354A] py-2 px-3 rounded-md text-[12px] text-[#FFFFFF]'>Escalate Ques</button>
        </div>
  
    <div className='mb-2 border border-solid border-[#F0F0F0] px-3 py-2 rounded-lg '>
      <label className='block font-semibold mb-2 text-xs text-[#4F4F4F]'>Reason For Escalation</label>
      <input type='text' className='border border-solid border-[#DFDFDF] rounded p-2 w-full' />
    
  
 

  <div className='flex justify-end gap-2 my-2'>
    <button className='bg-[#EAEAEA] px-3 py-2 rounded-md text-sm'>Cancel</button>
    <button className='bg-[#3062F9] px-3 py-2 text-white rounded-md text-sm'>Submit</button>
  </div>
  </div>
</div>



        



           






      </div>
      
    </div>
  )
}

export default Section2

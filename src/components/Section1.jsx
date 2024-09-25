import React from 'react'
import data from '../../dummyData/section1.json'

const Section1 = () => {
  return (
    <div className=" grid xl:grid-cols-[60%_auto] font-gilory ">
      <div className=' font-gilory bg-[#f2f5fb]  rounded-lg py-5 px-5'>
      <table className="w-full">
  <thead>
    <tr>
      <th className='text-start font-normal'>Ticket</th>
      <th className='text-start font-normal'>Model</th>
      <th className='text-start font-normal'>Part</th>
      <th className='text-start font-normal'>Visibility</th>
      <th className='text-start font-normal'>Status</th>
      <th className='text-start font-normal'>Posted</th>
    </tr>
  </thead>
  <tbody className='text-[#3062F9] font-semibold'>
    {data.map((item, index) => (
      <tr key={index}>
        <td>{item.Ticket}</td>
        <td>{item.Model}</td>
        <td>{item.Part}</td>
        <td>{item.Visibility}</td>
        <td>{item.Status}</td>
        <td>{item.Posted}</td>
      </tr>
    ))}
  </tbody>
</table>

      </div>

      <div className='ms-auto me-16 py-5 font-gilory'>
        <h4 className='text-xs leading-5'>Change Visibility</h4>
      <label class="inline-flex items-center mb-5 cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer"/>
        <div class="relative w-9 h-5 bg-gray-200  dark:peer-focus:ring-blue-800 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span class="ms-3 text-sm font-medium text-[#3062F9] ">Public</span>
      </label>
      </div>
      
    </div>
  )
}

export default Section1

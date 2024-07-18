import React from 'react'

export const Article = ({img, num, title, text}) => {
  return (
    <article className='flex h-[162px] md:w-[343px] md:flex-grow'>
        <div className='w-[100px] flex-none'>
            <img src={img} alt="imagen de articulo" />
        </div>
        <div className='pl-6'>
            <p className='text-GrayishBlue text-3xl mb-[18px] font-bold'>{num}</p>
            <h2 className='font-bold mb-[18px] hover:text-SoftOrange cursor-pointer'>{title}</h2>
            <p className='text-GrayishBlue'>{text}</p>
        </div>
    </article>
  )
}


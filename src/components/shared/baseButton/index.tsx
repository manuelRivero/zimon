import React from 'react'
interface Props {
    title: string;
    backgroundColorClassName: string;
}
export default function BaseButton({ title, backgroundColorClassName}:Props) {
  return (
    <button className={`rounded-md ${backgroundColorClassName} p-4 text-custom-white`}>
        {title}
    </button>
  )
}

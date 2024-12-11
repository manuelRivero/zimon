import React from 'react'
interface Props {
    title: string;
    backgroundColorClassName: string;
    href: string
}
export default function BaseButton({ title, backgroundColorClassName, href}:Props) {
  return (
    <a href={href} target='_blank' className={`rounded-md ${backgroundColorClassName} p-4 text-custom-white`}>
        {title}
    </a>
  )
}

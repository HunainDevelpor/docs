import React, { useRef } from 'react'
import Card from './Card'

export default function Foreground() {
  const ref=useRef(null);
  const data=[
    // {description: "Important business report", file_size: "10mb"},

    {description: "Meeting minutes for project discussion",
     file_size: ".7mb",
     close:false,
     tag:{isopen:false,tagtitle:"Download Now", tagcolor:"green"}
  
  },

    {description: "Research findings on industry trend",
     file_size: ".3mb",
     close:true,
     tag:{isopen:true,tagtitle:"Upload", tagcolor:"blue"}
  
  },

    {description: "Proposal for upcoming client presentation",
     file_size:".7mb",
     close:true,
     tag:{isopen:true,tagtitle:"Check-out", tagcolor:"green"}
    }
  
  // },
    // {description: "", file_size: 2.5},
    // {description: "Company policy and guidelines document", file_size: 8},
    // {description: "Proposal for upcoming client presentation", file_size: 15}
  ]
  return (
    <>
      <div  ref={ref} className='w-full h-full flex flex-wrap gap-10 p-6 z-[3] fixed'>
            {data.map((item,index)=>(
              <Card item={item} reference={ref}/>
            ))}
      </div>
    
    </>
  )
}

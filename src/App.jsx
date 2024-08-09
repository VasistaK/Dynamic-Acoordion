import { useState } from 'react'


function App() {
 
  const [active,setActiveIndex] = useState(0)

const array = [
  {
    header:"Accordian #1",
    body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus cupiditate placeat possimus recusandae sint velit, sunt itaque optio saepe repellat ipsam fuga debitis? Quasi sed temporibus delectus accusantium beatae quod illo quidem deserunt commodi. Molestias facere ab inventore nihil similique dolore dolor accusamus at omnis illum, iusto iure beatae?" ,
    id:1    
  },
  {
    header:"Accordian #2",
    body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus cupiditate placeat possimus recusandae sint velit, sunt itaque optio saepe repellat ipsam fuga debitis? Quasi sed temporibus delectus accusantium beatae quod illo quidem deserunt commodi. Molestias facere ab inventore nihil similique dolore dolor accusamus at omnis illum, iusto iure beatae?" ,
    id:2   
  },
  {
    header:"Accordian #3",
    body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus cupiditate placeat possimus recusandae sint velit, sunt itaque optio saepe repellat ipsam fuga debitis? Quasi sed temporibus delectus accusantium beatae quod illo quidem deserunt commodi. Molestias facere ab inventore nihil similique dolore dolor accusamus at omnis illum, iusto iure beatae?" ,
    id:3    
  },
  {
    header:"Accordian #4",
    body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus cupiditate placeat possimus recusandae sint velit, sunt itaque optio saepe repellat ipsam fuga debitis? Quasi sed temporibus delectus accusantium beatae quod illo quidem deserunt commodi. Molestias facere ab inventore nihil similique dolore dolor accusamus at omnis illum, iusto iure beatae?" ,
    id:4 
  },
  
]

  return (
   <div className=' m-2  bg-yellow-200 font-mono'>
   <h2 className='p-2 text-3xl text-center'> Dynamic Accordion </h2>
  
<div className=' border border-black'>
  {
    array.map((element,index)=>{
     return(
      <div key={index} className='text-2xl p-2 border content-center border-gray-400'>
        <div onClick={()=>{(index!==active)?setActiveIndex(index):setActiveIndex(-1)}}
        className='flex justify-between'>
        <span className={(index===active)?'underline':'no-underline'}>{element.header}</span>
        <span className='text-2xl'>{(index===active)?'-':'+'}</span>
        </div>
        <p className={(index===active)?'visible text-xl':'hidden'}>{element.body}</p>
      </div>
     )
    })
  }
</div>
   </div>
  )
}

export default App

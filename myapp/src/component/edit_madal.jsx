// import { Button, Input, TagLabel, Text } from "@chakra-ui/react"
// import { useState } from "react"

// export default function BasicUsage({data,hendle_modal_close}) {
// const [e_data,setdata]=useState(data)

// function hendleChange(e){
//   const {value,name}=e.target
//   if(name!="color"){

//     setdata({...e_data,[name]:value})
//   }
//   else{
//   setdata({...e_data,[name]:value})

//   }
// }
// function hendleEdit(){
//   // setdata({...e_data,color:e_data.color.split(",")})
// }
// console.log(e_data)


//     return (
//       <div className="modal" >
      
//   <Input value={data.image}    /> 

//   <Input value={data?.title} /> 

//   <Input value={data?.category} /> 

//   <Input value={data?.price} name="Price" onChange={(e)=>hendleChange(e)} /> 

//   <Input placeholder={data?.count} name="count" onChange={(e)=>hendleChange(e)} /> 

//   <Input placeholder={data?.color} name="color" onChange={(e)=>hendleChange(e)} /> 


//   <Button onClick={hendle_modal_close} >close</Button>
//   <Button onClick={hendleEdit} >Edit</Button>
//       </div>
//     )
//   }
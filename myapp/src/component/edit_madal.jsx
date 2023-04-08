import { Button, Text } from "@chakra-ui/react"
import { useState } from "react"

export default function BasicUsage({data,hendle_modal_close}) {
const [hide_style,sethide_styles]=useState(true)



    return (
      <div className="modal" >
  <Text>{data?.title}</Text>
  <Button onClick={hendle_modal_close} >close</Button>
      </div>
    )
  }
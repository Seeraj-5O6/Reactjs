import React,{useState} from "react";
import Icon from "./components/icon";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./titactoe.css"; 
import {Card,CardBody,Container,Button,Col,Row} from "reactstrap";

const itemArray=new Array(9).fill("empty");


const App=()=>{


    const [isCross,setIsCross]=useState(false);
    const [winMessage,setWinmessage]=useState("");


    const reloadGame=()=>{


        setIsCross(false)
        setWinmessage("");
        itemArray.fill("empty",0,9);

        //
    }

    const checkIsWinner=()=>{


        if(itemArray[0]===itemArray[1] && 
         itemArray[0]===itemArray[2] && 
         itemArray[0]!=="empty"){


            setWinmessage(`${itemArray[0]} won`)
        }else if((itemArray[4]===itemArray[5] && 
            itemArray[3]===itemArray[4] && 
            itemArray[3]!=="empty")){



                setWinmessage(`${itemArray[3]} wn`)

          }


        else if((itemArray[7]===itemArray[8] && 
            itemArray[6]===itemArray[7] && 
            itemArray[6]!=="empty")){



                setWinmessage(`${itemArray[6]} won`)
        }


        else if((itemArray[3]===itemArray[6] && 
            itemArray[0]===itemArray[3] && 
            itemArray[0]!=="empty")){



                setWinmessage(`${itemArray[0]} won`)
      }

        else if((itemArray[4]===itemArray[7] && 
            itemArray[1]===itemArray[4] && 
            itemArray[1]!=="empty")){



                setWinmessage(`${itemArray[1]} won`)
     }

        else if((itemArray[5]===itemArray[8] && 
            itemArray[2]===itemArray[5] && 
            itemArray[2]!=="empty")){



                setWinmessage(`${itemArray[2]} won`)
       }

        else if((itemArray[4]===itemArray[8] && 
            itemArray[0]===itemArray[4] && 
            itemArray[0]!=="empty")){



                setWinmessage(`${itemArray[0]} won`)
            }

        else if((itemArray[4]===itemArray[6] && 
            itemArray[2]===itemArray[4] && 
            itemArray[2]!=="empty")){



                setWinmessage(`${itemArray[2]} won`)
}

 }




    const changeItem=itemNumber=>{


        
        if(winMessage){

            return toast(winMessage,{type:"success"})
        }

        if(itemArray[itemNumber]==="empty"){

            itemArray[itemNumber]=isCross?"cross":"circle"
            setIsCross(!isCross)


            


        }else{

            return toast("already filled",{type:"error"})



        }


        checkIsWinner();


        //
    }




    return(

<Container className="p-5">

    <ToastContainer position="bottom-center"/>

    <Row>

        <Col md={6} className="offset-md-3">

            {winMessage?(

                <div className="mb-2 mt-2">
                   < h1 className="text-success text-uppercase test-center">
                    {winMessage}
                   </h1> 

                   <Button
                   color="success"
                   block onClick={reloadGame}
                   >Reload the game</Button>
                </div>
            ):(
        <h1 className="text-center text-warning">
            {isCross? "Cross" : "Circle"  } turns
        </h1>

            )}
<div className="grid">

    {itemArray.map((item,index )=>(


<Card color="warning"  onClick={()=>changeItem(index)}>
<CardBody className="box">

    <Icon name={item}/>


</CardBody>


</Card>
    ))}


</div>

        </Col>
    </Row>




</Container>

    )
}


export default App;
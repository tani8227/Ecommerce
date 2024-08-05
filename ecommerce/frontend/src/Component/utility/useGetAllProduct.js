import { useEffect , useState } from "react";

export default function useGetAllItems(itemName) {
     
   
        const [AllProduct, setAllProduct]=useState();

     useEffect(()=>{

         
            async function getAllitems()
            {
                const response = await fetch(`http://localhost:8000/api/v1/seller/${itemName}/get`, 
                    {
                        headers:
                        {
                            'content-type':"Apllication/json"
                        }
                    })
                    
                    if(response.ok)
                        {
                            const AllItems=await response.json();
                            
                            setAllProduct(AllItems);
                            

                        }else
                        {
                            console.log(response ,"pipdi 3333")
                        }
             }
        
             getAllitems();

     }, [itemName])

     return {AllProduct}
    
}



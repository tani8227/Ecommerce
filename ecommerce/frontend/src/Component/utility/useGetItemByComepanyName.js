import { useEffect , useState } from "react";

export default function useGetAllItemsByComapanyName(categoryName,companyName) {
      
   
   
        const [AllProduct, setAllProduct]=useState();

     useEffect(()=>{

         
            async function getAllitems()
            {
                const response = await fetch(`http://localhost:8000/api/v1/seller/${categoryName}/companyName/${companyName}`, 
                    {
                        headers:
                        {
                            'content-type':"Apllication/json"
                        }
                    })
                    
                    if(response.ok)
                        {
                            const AllItems=await response.json();
                            
                            console.log(AllItems.data)
                            setAllProduct(AllItems.data);
                            

                        }else
                        {
                            console.log(response ,"pipdi 3333")
                        }
             }
        
             getAllitems();

     }, [categoryName, companyName])

     return {AllProduct}
    
}



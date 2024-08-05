import { useEffect, useState } from "react";

export default function useGetOneItem(itemId) {
    const [item, setItem] = useState();

    useEffect(() => {

            async function handleItem() {
    
                const response = await fetch(`http://localhost:8000/api/v1/seller/mobile/${itemId}`,
                    {
                        headers:
                        {
                            "content-type": "Application/json"
                        }
                    })
    
                if (response.ok) {
                    const data = await response.json();
                
                    // console.log(data.data, "2020...")
                   setItem(data.data)
                
                }
    
            }
           
    
            handleItem();
    
        }, [itemId])
    
    return { item };
}

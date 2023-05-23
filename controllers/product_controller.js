export const addproduct = (req,res) =>{
    try{
        res.send("product added");
        console.log(req.body);
    }catch (error){
        console.log("getting error",error);
    }
}
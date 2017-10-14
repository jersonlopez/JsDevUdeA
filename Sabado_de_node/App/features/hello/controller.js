//get

exports.greet = (req,res)=>{
  console.log("Hello!");
  return res.json({msg:'ok!'})
}

//post
exports.bye = (req,res) =>{
    return res.json({msg:req.params.bye})
}

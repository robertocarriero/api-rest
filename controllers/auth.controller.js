

export const register = (req, res)=> {
  
   console.log(req.body)
    res.json({ok:'La papa esta que quema'});
};

export const login = (req, res)=>{
    res.json({ok:'vivir la vida loca'});
};

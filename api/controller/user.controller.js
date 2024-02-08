import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const deleteUser = async (req,res, next) =>{

    const user = await User.findById(req.params.id)
    // const token = req.cookies.accessToken;
    // if(!token) return res.status(401).send("you are not authenticated");

    // jwt.verify(token,process.env.JWT_KEY, async (err,payload)=> {
        if(req.userId !== user._id.toString()){
            return next(createError(401, "You can delete your account only"));  
        }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("deleted");

};
export const gigUser = async (req, res, next) => {
    const user = await User.findById(req.params.id);
  
    res.status(200).send(user);
  };
  

  export const updateUser = async (req,res, next) => {
    
    const user = await User.findById(req.params.id)
    // const token = req.cookies.accessToken;
    // if(!token) return res.status(401).send("you are not authenticated");

    // jwt.verify(token,process.env.JWT_KEY, async (err,payload)=> {
        if(req.userId !== user._id.toString()){
            return next(createError(401, "You can delete your account only"));  
        }
    await User.findByIdAndUpdate(req.params.id);
    res.status(200).send("updated");
};
const userService = require("../services/user.services.js")

exports.userSignIn = async(req, res) => {
  console.log("you're in the server");
  try{
      let {emailId,password,userName} = req.body;
      const getUserData = await userService.creatingUser(emailId,password,userName)
      if(getUserData.status === 200){
          res.send({"status":getUserData.status,"message":getUserData.message,"actualData": getUserData.actualData})
        }else{
          res.send(getUserData.actualData)
          console.log(getUserData)
        }
  }catch(err){
      throw(err)
  }
};

exports.userLogIn = async(req, res) => {
  console.log("you're in the server");
  try{
      let {emailId,password} = req.body;
      const data = await userService.getUserDetails(emailId,password)
      if(data.status === 200){
          res.send({"status":data.status,"message":data.message,"actualData": data.actualData})
        }else{
          res.send(data.actualData)
          console.log(data)
        }
  }catch(err){
      throw(err)
  }
};
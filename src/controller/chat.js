const userService = require("../services/chat.services.js")

exports.getChatDetails = async(req, res) => {
    console.log("you're in the server");
    try{
        let id = req.params.id
        const data = await userService.getChatDetailsById(id)
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
  
  exports.message = async(req, res) => {
    console.log("you're in the server");
    try{
        let {senderId,chatId,content} = req.body;
        const data = await userService.newMessage(senderId,chatId,content)
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

  exports.cteateChat = async(req, res) => {
    console.log("you're in the server");
    try{
        let {userIds,chatName,chatType} = req.body;
        const data = await userService.cteateNewChat(userIds,chatName,chatType)
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
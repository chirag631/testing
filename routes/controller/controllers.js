const saySomething=(req,res,next)=>{
    res.status(200).json({
        body:'hello from the server!'
    });
};

module.exports.saySomething=saySomething;
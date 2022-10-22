const AWS = require('aws-sdk');



AWS.config.update({
    accessKeyId:"AKIAY2O6OS72KFJRT5TI",
    secretAccessKey : "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",
    region:"us-east-1"
})

const ses = new AWS.SES({apiVersion:"2010-12-01"});

const sendMail = async(req,res) => {
    try{

        const param ={
            Destination : {
                ToAddresses : ["jagan.platosys@gmail.com"]
            },
            Message : {
                Body : {
                    Html : {
                        Data : `<html><h2> test mail </h2> <p> hello sample email servics</p></html>`
                    },
                    Text : {
                        Data : "veryfication"
                    }
                },
                Subject : {
                    Data : "veryfication" 
                },
            },
            Source : "bmjagan17@gmail.com"
        }

        const sendmailer = ses.sendEmail(param).promise().then(data=>{
            console.log("suucessfully mail sended!",data);
           // return res.json({status:'success',message:'mail sended!'})
        }).catch(err=>{
            console.log('err',err.message);
          // return res.json({status:"failure",message:err.message});
           
        })

        // sendmailer.then(data=>{
        //     console.log("suucessfully mail sended!",data)
        //     res.send({status:'success',message:'mail sended!'})
        // }).catch(err=>{
        //     console.log('err',err.message);
        //     res.send({status:"failure",message:err.message})
        // })

    } catch(err){
        console.log("err",err.message);
        res.send({"err": err.message})
    }
}



module.exports = {sendMail}
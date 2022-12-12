app.get("/search/drug/:key",async (req,resp)=>{

    let data = await Drug.find(
        {
            "$or":[
                {drug_name:{$regex:req.params.key}}
            ]
        }
    ).limit(5)
    resp.send(data);

})
app.get("/search/test/:key",async (req,resp)=>{
    let data = await Test.find(
        {
            "$or":[
                {test_name:{$regex:req.params.key}}
            ]
        }
    ).limit(5)
    resp.send(data);

})
app.get("/search/complaints/:key",async (req,resp)=>{
    let data = await Complaints.find(
        {
            "$or":[
                {complaint_name:{$regex:req.params.key}}
            ]
        }
    ).limit(5)
    resp.send(data);

})
app.get("/search/diagnosis/:key",async (req,resp)=>{
    let data = await Diagnosis.find(
        {
            "$or":[
                {diagnosis:{$regex:req.params.key}}
            ]
        }
    ).limit(5)
    resp.send(data);

})
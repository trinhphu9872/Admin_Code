const db = require('../../firebase/firebase')
class historyController{
    getListHistory(req, res){
        const data = [];
        db.ref("LichSuGiaoDich").once("value").then(function (snapshot) {
            let data = [];
            snapshot.forEach(function (childSnapshot) {     
                var childkey = childSnapshot.val();
                childSnapshot.forEach(function (childData) {
                  childData.forEach(function (childDb) {
                  var child = childDb.val();
                    data.push({
                    id: childDb.key,
                    tenGD: child.tenGD,
                    soDu: child.soDu,
                    phiGD: child.phiGD,
                    email: child.email,
                    thoiGianGD: child.thoiGianGD,
                    noiDung: child.noiDung,
                    tenSV: child.tenSV
                  }); 
                })
            })
        })   
        console.log(data)
            return res.render('history.ejs', { HistoryData: data})
        })
    }
    getDetailHistory(req, res){
        const data = [];
        let id = req.params.id
        console.log(id);
        
        db.ref("LichSuGiaoDich").once("value").then(function (snapshot) {
            let data = [];
            snapshot.forEach(function (childSnapshot) {     
                var childkey = childSnapshot.val();
                childSnapshot.forEach(function (childData) {          
                  childData.forEach(function (childDb) {        
                  var child = childDb.val();
                  if(id === childDb.key){  
                    data.push({
                        id: childDb.key,
                        tenGD: child.tenGD,
                        email: child.email,
                        soDu: child.soDu,
                        phiGD: child.phiGD,
                        thoiGianGD: child.thoiGianGD,
                        noiDung: child.noiDung,
                        tenSV: child.tenSV
                  });
                }
                }) 
            
            })
        })   
            return res.render('detailHistory.ejs', { HistoryData: data})
        })
    }

}

module.exports =  new historyController();
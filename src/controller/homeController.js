const db = require('../../firebase/firebase')

 class homeController{
    getListUser(req, res){
        const data = [];
        db.ref("users").once("value").then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                data.push({
                    id: childSnapshot.key,
                    email: childData.email,
                    gioiTinh: childData.gioiTinh,
                    tenSV: childData.tenSV,
                    mssv: childData.mssv,
                    soDu: childData.soDu,
                    password: childData.password,
                    emailVerified: childData.emailVerified,
                });
            });
            return res.render('naptien.ejs', { dataUser: data })
        })
    }
//---------------------------------------------------------------------------
    getDetail(req, res){
        let mssv = req.params.mssv;
        const data = [];
        db.ref("users").once("value").then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                if ( mssv == childData.mssv){
                    data.push({
                        id: childSnapshot.key,
                        email: childData.email,
                        gioiTinh: childData.gioiTinh,
                        tenSV: childData.tenSV,
                        mssv: childData.mssv,
                        soDu: childData.soDu,
                        password: childData.password,
                        emailVerified: childData.emailVerified,
                    });
                }
            });
            return res.send(JSON.stringify(data))
        })
    }    
//---------------------------------------------------------------------------
    naptienUser(req, res){
        console.log('check req', req.body)
        let {money} = req.body
    
        return res.redirect('/naptien')
    }
//---------------------------------------------------------------------------
    getListStudent(req, res){
        const data = [];
        db.ref("users").once("value").then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                data.push({
                    id: childSnapshot.key,
                    email: childData.email,
                    gioiTinh: childData.gioiTinh,
                    tenSV: childData.tenSV,
                    mssv: childData.mssv,
                    soDu: childData.soDu,
                    password: childData.password,
                    emailVerified: childData.emailVerified,
                });
            });
            return res.render('studentlist.ejs', { dataUser: data })
        })
    }
//---------------------------------------------------------------------------
    getDetailStudent(req, res){
        let mssv = req.params.mssv;
        const data = [];
        db.ref("users").once("value").then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                if ( mssv == childData.mssv){
                    data.push({
                        id: childSnapshot.key,
                        email: childData.email,
                        gioiTinh: childData.gioiTinh,
                        tenSV: childData.tenSV,
                        mssv: childData.mssv,
                        soDu: childData.soDu,
                        password: childData.password,
                        emailVerified: childData.emailVerified,
                    });
                }
            });
            return res.render('detailStudent.ejs', { dataUser: data })
        })
    }
}


//[Exports]---------------------------------------------------------------------------
module.exports=  new homeController();



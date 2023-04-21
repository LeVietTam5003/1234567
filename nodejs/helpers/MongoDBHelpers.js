"use strict";

const {MongoClient,ObjectId} = require("mongodb")

const DATABASE_NAME = "test1233";
const CONNECTION_STRING = "mongodb://localhost:27017/" + DATABASE_NAME;


// Insert : Thêm mới (một)
const insertDocument = (data,collectionName) => {
    return new Promise((resolve,reject)=>{

        // Kết nối đến đường dẫn đến database
        MongoClient.connect((CONNECTION_STRING),{
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })

        // phương thức này được gọi khi kết nối đến csdl
        .then((client)=>{

            // tạo biến để lưu database
            const dbo = client.db(DATABASE_NAME);

            // tạo biến để lưu bảng càn truy xuất database
            const collection = dbo.collection(collectionName);
            
            collection

            // thêm dữ liệu nhập vào
            .insertOne(data)

            // phương thức này được gọi khi insertOne(data) chạy xong
            .then((result)=>{
                client.close();
                resolve({data:data,result:result})
            })

            // phương thức này được gọi khi insertOne(data) chạy không thành công
            .catch((err)=>{
                client.close();
                reject(err);
            })
        })

        // phương thức này được gọi khi kết nối đến csdl thất bại
        .catch((err)=>{
            client.close();
            reject(err);
        })
    })
}

// Insert : Thêm mới (nhiều)
const insertDocuments = (listData,collectionName) => {
    return new Promise((resolve,reject)=>{

        // Kết nối đến đường dẫn dataBase
        MongoClient.connect((CONNECTION_STRING),{
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })

        // phương thức này được gọi khi kết nối đến csdl
        .then((client)=>{
            const dbo = client.db(DATABASE_NAME);
            const collection = dbo.collection(collectionName);
            
            collection
            // Thêm nhiều 
            .insertMany(listData)
            .then((result)=>{
                client.close();
                resolve(result)
            })
            .catch((err) => {
                client.close();
                reject(err);
            });
        })
        .catch((err)=>{
            client.close();
            reject(err);
        })
    })
}

// Update : một
const updateDocument = (id,data,collectionName)=>{
    return new Promise((resolve,reject) =>{
        MongoClient.connect(CONNECTION_STRING,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((client)=>{
            const dbo = client.db(DATABASE_NAME)
            const collection = dbo.collection(collectionName)
            const query = { _id : ObjectId(id)}
            collection
            .findOneAndUpdate(query , {$set:data})
            .then((result)=>{
                client.close();
                resolve(result);
            })
            .catch((err)=>{
                client.close();
                reject(err);
            })
        })
        .catch((err)=>{
            client.close();
            reject(err);
        })
    })
}


// Update : một
const updateDocuments = (query,data,collectionName)=>{
    return new Promise((resolve,reject) =>{
        MongoClient.connect(CONNECTION_STRING,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((client)=>{
            const dbo = client.db(DATABASE_NAME)
            const collection = dbo.collection(collectionName)
            collection
            .updateMany(query , {$set:data})
            .then((result)=>{
                client.close();
                resolve(result);
            })
            .catch((err)=>{
                client.close();
                reject(err);
            })
        })
        .catch((err)=>{
            client.close();
            reject(err);
        })
    })
}


// Delete : một
const deleteDocument = (id,collectionName)=>{
    return new Promise((resolve,reject) =>{
        MongoClient.connect(CONNECTION_STRING,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((client)=>{
            const dbo = client.db(DATABASE_NAME)
            const collection = dbo.collection(collectionName)
            const query = { _id : ObjectId(id)}
            collection
            .deleteOne(query , {$set:data})
            .then((result)=>{
                client.close();
                resolve(result);
            })
            .catch((err)=>{
                client.close();
                reject(err);
            })
        })
        .catch((err)=>{
            client.close();
            reject(err);
        })
    })
}


// Update : một
const deleteDocuments = (query,collectionName)=>{
    return new Promise((resolve,reject) =>{
        MongoClient.connect(CONNECTION_STRING,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((client)=>{
            const dbo = client.db(DATABASE_NAME)
            const collection = dbo.collection(collectionName)
            collection
            .deleteMany(query)
            .then((result)=>{
                client.close();
                resolve(result);
            })
            .catch((err)=>{
                client.close();
                reject(err);
            })
        })
        .catch((err)=>{
            client.close();
            reject(err);
        })
    })
}


// Tìm kiếm
const findDocument = (id,collectionName) =>{
    return new Promise((resolve,reject)=>{
        MongoClient.connect(CONNECTION_STRING,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((client)=>{
            const dbo = client.db(DATABASE_NAME)
            const collection = dbo.collection(collectionName)
            const query = {_id: ObjectId(id)}
            collection
            .find(query)
            .then((result)=>{
                resolve(result);
            })
            .catch((err)=>{
                reject(err);
            })
        })
        .catch((err)=>{
            reject(err);
        })
    })
}

module.exports = {
    insertDocument,
};








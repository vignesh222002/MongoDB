import { MongoClient } from "mongodb";

const uri = "mongodb+srv://gtavignesh22042002:Vignesh123@cluster1.vxqmlys.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri);

export default client;
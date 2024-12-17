// create a createForm which will take formData and store in db in appwrite 
import {Client,Databases, Query} from 'appwrite'
// import { useId } from 'react';
import { ID } from 'appwrite';
import conf from '../conf/conf'
export class Service{
    client = new Client();
    databases;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
    }
    async submitAns({uniqueLink,rating,Name,email,answers}){
        console.log(uniqueLink,rating,Name,email,answers,'hello')
        console.log(typeof(rating))
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionTwoId,
                
                ID.unique(),
                {
                    uniqueLink,
                    rating,
                    Name,
                    email,
                    answers,
                }

            )
        }
        catch(err){
            console.log('Appwrite Err',err)
        }
    }
    async retrieveDocs(testlink){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionTwoId,
                [
                    Query.equal('uniqueLink',testlink)
                ]
            )
        }
        catch(err){
            console.log('Appwrite Err::RetreiveDocs::',err)
        }
    }
    async createForm({uniqueLink,spaceName,customMsg,createdAt,quiz}){
        
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionOneId,
                uniqueLink,
                {
                uniqueLink,
                spaceName,
                customMsg,
                createdAt,
                quiz   
                }


            )
        }
        catch(err){
            console.log('Appwrite Error',err)
        }
    }
    async getDocumentQuestions(linkk){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionOneId,
                linkk
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }
}
const service = new Service()
export default service
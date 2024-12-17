const conf = {
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionOneId:String(import.meta.env.VITE_APPWRITE_COLLECTIONONE_ID),
    appwriteCollectionTwoId:String(import.meta.env.VITE_APPWRITE_COLLECTIONTWO_ID),
    appwriteCollectionThreeId:String(import.meta.env.VITE_APPWRITE_COLLECTIONThree_ID),
    // appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL)
}

export default conf
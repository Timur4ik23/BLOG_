import createConnectionMy from "../../../lib/db";
// // import { NextResponse } from "next/server";



// export const POST  = async (req) => {
//     try{

//         const db = await createConnection();
//         const body = await req.json();
        
//         const {email, firstName, lastName, password ,userName } = body;
        
//         const sql = `
//         INSERT INTO users (id, firstName, lastName, userName, email, password, avatar, subscription)
//         VALUES (NULL, ?, ?, ?, ?, ?, NULL, '1');
//         `;
        
//         const values = [firstName, lastName, userName, email, password];
        
//         await db.execute(sql, values);

//         // console.log('Success!');
//         return NextResponse.json({ message: 'Success!!!!' });
        

//     }catch(error){
//         // console.log(error);
//         return NextResponse.json({ error: error.message });
//     }
        
// }



// // import createConnection from '../../../lib/db'; // Adjust the import path as needed


// // Define the API route handler

export async function GET(req) {
    try {
        const db = await createConnectionMy(); 
        if (db) {
            console.log("Connection test successful");
            return new Response(JSON.stringify({ message: "Connection test successful" }), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } else {
            console.error("Connection test failed: db is undefined");
            return new Response(JSON.stringify({ error: "Connection test fuytrertyuiiled: db is undefined" }), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
    } catch (error) {
        console.error("Error during connection test:", error);
        return new Response(JSON.stringify({ error: error.message || "Internfghjmhgfdewerthjal server error" }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}




import bcrypt from 'bcryptjs'  

export async function registerUser(data){

    const {password} = data;
    const hashedPassword = await bcrypt.hash(password, 15);

    const sendData = {...data, password: hashedPassword}

    // console.log(sendData);
    
    const fetshResponse = await fetch('/api/signUp/', {
        method: "POST",
        body: JSON.stringify(sendData),
        headers: {
            'Content-Type': 'application/json',
        }
    })

    if (!fetshResponse.ok) {
        throw new Error("Failed to register user");
    }


    const result = await fetshResponse.json()
    return result;

}
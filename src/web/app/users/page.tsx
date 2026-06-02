"use client"

import { CreateUser, deleteuser, GetAllUsers } from "@/services/userservice";
import { UserModelCreate } from "@/types/user";

import React, { useEffect, useState } from 'react'

const Page = () => {

    const [users, setusers] = useState<UserModelCreate[]>([]);

    const [formdata, setformdata] = useState<UserModelCreate>
        ({
            fullName: "",
            email: "",
            password: "",
            address: "",
            phone: ""
        });


    const [search, setsearch] = useState<string>("");

    const[edit,setedit]=useState<number>();


    async function fetchingallusers() {
        try {
            const response = await GetAllUsers();
            if (!response) {
                throw new Error("we are getting the error");
            }
            setusers(response);
        }
        catch (error) {
            if (error instanceof Error) {
                alert(error.message);
            }
        }
    }

    useEffect(() => {
        GetAllUsers()
            .then((response) => {
                if (!response) {
                    throw new Error("we are getting the error");
                }
                setusers(response);
            })
            .catch((error) => {
                if (error instanceof Error) {
                    alert(error.message);
                }
            });
    }, [])


    const handledelete = async function userdelete(id: number) {
        try {
            if (id <= 0) {
                throw new Error("the id value is not be less than zero");
            }
            const response = await deleteuser(id);
            if (!response) {
                throw new Error("we are getting the error");
            }
        }
        catch (error) {
            if (error instanceof Error) {
                alert(error.message);
            }
        }
    }


    const handledata = async function (e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setformdata({
            ...formdata,
            [name]: value
        })
    }


    const handlesubmit = async function (e: React.FormEvent) {
        e.preventDefault();

        try {
            const response = await CreateUser(formdata);
            if (!response) {
                alert("Data has not been inserted");
            }
            alert("user created");
            setformdata({
                id:edit,
                fullName: "",
                email: "",
                password: "",
                address: "",
                phone: ""

            })
            fetchingallusers();

        }
        catch (error) {
            if (error instanceof Error) {
                alert(error.message);
            }
        }

    }


    const filetereddata = users.filter((item) =>
        item.fullName?.toLowerCase().includes(search.toLowerCase())
    );


    const handleedit=async function(id:number){
        const findexactdata=users.find((item)=>item.id===id);

        if(!findexactdata){
            return;
        }

        setformdata({
            id: findexactdata.id,
            fullName: findexactdata.fullName,
            address: findexactdata.address,
            email: findexactdata.email,
            phone: findexactdata.phone,
            password: findexactdata.password
        })
        setedit(id);
        
    }


    return (
        <div>

            <input
                type="text"
                placeholder="enter the username"
                value={search}
                onChange={(e) => setsearch(e.target.value)}
            />

            <form onSubmit={handlesubmit}>
                <div>
                    <label>
                        FullName
                    </label>
                    <input
                        type="text"
                        placeholder="Enter the full name"
                        value={formdata.fullName}
                        onChange={(e) => handledata(e)}
                        name="fullName"
                    />

                </div>

                <div>
                    <label>
                        email
                    </label>
                    <input
                        type="text"
                        placeholder="Enter the email"
                        value={formdata.email}
                        onChange={(e) => handledata(e)}
                        name="email"
                    />

                </div>



                <div>
                    <label>
                        password
                    </label>
                    <input
                        type="text"
                        placeholder="Enter the password "
                        value={formdata.password}
                        onChange={(e) => handledata(e)}
                        name="password"
                    />

                </div>



                <div>
                    <label>
                        address
                    </label>
                    <input
                        type="text"
                        placeholder="Enter the full name"
                        value={formdata.address}
                        onChange={(e) => handledata(e)}
                        name="address"
                    />

                </div>


                <div>
                    <label>
                        Phone
                    </label>
                    <input
                        type="text"
                        placeholder="Enter the full name"
                        value={formdata.phone}
                        onChange={(e) => handledata(e)}
                        name="phone"
                    />

                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>


            {filetereddata.length > 0 ? (

                <table>
                    <thead>
                        <tr>
                            <th>
                                fullname
                            </th>
                            <th>
                                email
                            </th>
                            <th>
                                password
                            </th>
                            <th>
                                phone
                            </th>
                            <th>
                                address
                            </th>
                            <th>
                                edit
                            </th>
                            <th>
                                delete
                            </th>
                        </tr>

                    </thead>
                    <tbody>
                        {filetereddata.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    {item.fullName}


                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <td>
                                    {item.password}
                                </td>
                                <td>
                                    {item.phone}
                                </td>
                                <td>
                                    {item.address}
                                </td>
                                <td>
                                    <button onClick={() => item.id && handleedit(item.id)}>
                                        edit
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handledelete(item.id!)}>
                                        delete
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>





            ) : (<p>No element found</p>)}



        </div>
    )
}

export default Page

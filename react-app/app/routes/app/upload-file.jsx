import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import api from "../../services/api/api";

const App = () => {
    const [fileName, setFileName] = useState("");

    const handleFileChange = async (event) => {
        if (event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
            const file = event.target.files[0];
            console.log(event.target.files[0]);
            const formData = new FormData();
            formData.append('file',file);
            let y = ""
            await api.get("v1/image/profile-photo").json( x => {
                console.log(x);
                y = x.url;
            })
            await fetch(y, {
                method: "PUT",
                body: file,
                headers: {
                    'Content-Type' :  file.type,
                },
            });
        }
    };

    return (
        <div>
            
            <label htmlFor="profile_pic" ><Icon icon="bi:camera-fill" className="text-blue w-10 h-10 cursor-pointer"/> </label>
            <input
                id="profile_pic"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
            {fileName && (
                <div style={{ marginTop: 20 }}>
                    <p>Selected File: {fileName}</p>
                </div>
            )}
        </div>
    );
};

export default App;
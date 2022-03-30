import React, { Fragment, useState } from "react";
import SingleUploadRender from "./single-upload-render";

const SingleUpload = () => {

    const [file, setFile] = useState();
    const [fileType, setFileType] = useState();
    const [fileName, setFileName] = useState();
    const [fileDescription, setFileDescription] = useState("Add description");
    const [fileCategory, setFileCategory] = useState();
    const [fileTags, setFileTags] = useState();
    const [filePublishedStatus, setFilePublishedStatus] = useState();

    const handleChange = (event) => {
        
        setFile(URL.createObjectURL(event.target.files[0]));
        setFileName(event.target.files[0].name);
        setFileType(event.target.files[0].type);
        handleInitialPrompt();

        // reset after replacing image but retain details
        setFileTags();
        setFileDescription("Add description");
    };

    const addTag = () => {
        
        // get user response
        let enteredTag = prompt("Please enter a tag");

        // user entered empty response and hit OK
        if (enteredTag === "") {
            setFileTags(enteredTag)
        }
        // user typed something and hit OK
        else if (enteredTag) {
            setFileTags(enteredTag)
        }
        // user hit cancel
        else {
            return addTag();
        }
        
        // concat the old string to the new string
        setFileTags(fileTags.concat(", "+enteredTag));
    }

    const handleEdits = (modifierFunction) => {
        
        let enteredEdit = prompt("Please enter any changes");

        modifierFunction(enteredEdit);

        if(enteredEdit === "") {
            return handleEdits(modifierFunction);
        }
        else if (enteredEdit) {
            modifierFunction(enteredEdit);
        } 
        else {
            return handleEdits(modifierFunction);
        }
    };

    const handleInitialPrompt = () => {
        
        let enteredCategory = prompt("Please enter the file's category.");
        setFileCategory(enteredCategory || "default");
        
        let enteredStatus = prompt("Please enter the file's published status.");
        setFilePublishedStatus(enteredStatus || "default");
    }

    return(
        <Fragment>
            <section id="single-upload">
                <h1>Upload a Single File</h1>
                <div>
                    {  
                        // display the user input button only if the user hasn't uploaded a file
                        file === undefined? <input type="file" name="file" accept="image/*, .doc" onChange={event => handleChange(event)} /> : 
                        <SingleUploadRender 
                        filePath={file} 
                        fileName={fileName} 
                        fileType={fileType} 
                        onChangeHandle={event => handleChange(event)} 
                        fileDescription={fileDescription} 
                        fileCategory={fileCategory} 
                        onEditHandleDescription={() => handleEdits(setFileDescription)} 
                        onEditHandleCategory={() => handleEdits(setFileCategory)} 
                        fileTags={fileTags} 
                        onEditHandleTags={() => handleEdits(setFileTags)} 
                        onAddHandleTags={() => addTag()}
                        filePublishedStatus={filePublishedStatus}
                        onEditHandlePublishedStatus={() => handleEdits(setFilePublishedStatus)}
                        />
                    }
                </div>
            </section>
        </Fragment>
    );
};

export default SingleUpload;
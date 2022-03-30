import React, { Fragment } from "react";

const SingleUploadRender = ({ filePath, fileType, fileName, fileDescription, fileCategory, fileTags, onChangeHandle, onEditHandleDescription, onEditHandleCategory, onAddHandleTags, filePublishedStatus, onEditHandlePublishedStatus }) => {
    return(
        <Fragment>
            <div>
                {
                    fileType !== ".doc"? <img src={filePath} alt="uploaded" /> : <i id="document" className="fa fa-file"> </i>
                }
                <ul>
                    <li><p><b>Name:</b> {fileName}</p></li>
                    <li><p><b>Type:</b> {fileType}</p></li>
                    <li><p><b>Description:</b> {fileDescription} <i onClick={onEditHandleDescription} className="fa fa-edit"></i></p></li>
                    <li><p><b>Category:</b> {fileCategory} <i onClick={onEditHandleCategory} className="fa fa-edit"> </i></p></li>
                    <li><p><b>Tags:</b> <span>{fileTags}</span> <i onClick={onAddHandleTags} className="fa fa-plus"> </i></p></li>
                    <li><p><b>Published Status:</b> {filePublishedStatus} <i onClick={onEditHandlePublishedStatus} className="fa fa-edit"></i></p></li>
                    <li><a href={filePath} download>Download File</a></li>
                    <li><p><b>Replace File:</b> <input type="file" name="file" onChange={onChangeHandle} /></p></li>
                </ul>
            </div>
        </Fragment>
    );
};

export default SingleUploadRender;
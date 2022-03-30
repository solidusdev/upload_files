import React, { Fragment, useState } from "react";
import ImageUploading from 'react-images-uploading';

const MultiUpload = () => {
    
    const [images, setImages] = useState([]);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [tags, setTags] = useState("");
    const [publishedStatus, setPublishedStatus] = useState("");
    const maxNumber = 50;

    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList);
        imageList[addUpdateIndex]['description'] = "";
        imageList[addUpdateIndex]['category'] = prompt("Please enter a category");
        setCategory(imageList[addUpdateIndex]['category']);
        imageList[addUpdateIndex]['tags'] = "";
        imageList[addUpdateIndex]['published_status'] = prompt("Please enter the published status");
        setPublishedStatus(imageList[addUpdateIndex]['published_status']);
    };

    const handleEdits = (obj,objKey, modifierFunction) => {
        
        let enteredEditResponse = prompt("Please enter any changes");
        modifierFunction(enteredEditResponse);
        obj[objKey] = enteredEditResponse;
    };

    const addTag = (obj) => {

        let enteredEditResponse = prompt("Please add tag");
        
        setTags(enteredEditResponse + ", ")

        if(obj['tags'] === "") {
            obj['tags'] = obj['tags'].concat(enteredEditResponse);
        }

        else {
            obj['tags'] = obj['tags'].concat(", "+enteredEditResponse);
        }
    }

    return(
        <Fragment>
            <section id="multi-upload">
                <h1>Upload Multiple Files</h1>
                <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                >
                {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
                }) => (
                    <div className="upload__image-wrapper">
                        <button onClick={onImageUpload}>Add Files</button>&nbsp;
                        <button onClick={onImageRemoveAll}>Remove all images</button>
                        
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image['data_url']} alt="" width="200" />
                                <p><b>Name:</b> {image['file']['name']}</p>
                                <p><b>Description:</b> {image['description']}</p>
                                <p><b>Category:</b> {image['category']}</p>
                                <p><b>Tag:</b> {image['tags']}</p>
                                <p><b>Published Status:</b> {image['published_status']}</p>
                                <div className="image-item__btn-wrapper">
                                    <button onClick={() => onImageUpdate(index)}>Replace</button>
                                    <button onClick={() => onImageRemove(index)}>Remove</button>
                                    <button onClick={() => handleEdits(image, 'description', setDescription)}>Edit Description</button>
                                    <button onClick={() => handleEdits(image, 'category', setCategory)}>Edit Category</button>
                                    <button onClick={() => addTag(image)}>Add Tag</button>
                                    <button onClick={() => handleEdits(image, 'published_status', setCategory)}>Edit Published Status</button>
                                    <a href={image['data_url']} download>download</a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                </ImageUploading>
            </section>
        </Fragment>
    );
};

export default MultiUpload;
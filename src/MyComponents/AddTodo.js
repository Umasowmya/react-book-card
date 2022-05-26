import React, { useState } from 'react'


const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc)
            alert("Title or Description cannot be blank");
        else {
            props.addTodo(title, desc);

            setTitle("");
            setDesc("");
        }

    }

    return (

        <div className='container'>
            <h3>Add a todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo title</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => { setTitle(e.target.value) }} id="title" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="desc" className="form-label" >Todo Description</label>
                    <input type="text" className="form-control" id="desc" value={desc} onChange={(e) => { setDesc(e.target.value) }} />
                </div>

                <button type="submit" className="btn btn-primary">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo

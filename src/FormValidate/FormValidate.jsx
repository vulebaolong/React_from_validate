import React, { Component } from "react";

export default class FormValidate extends Component {
    render() {
        return (
            <form className="row row-gap-5">
                <div className="col-6">
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="id"
                            name="id"
                        />
                        <label>id</label>
                        <span className="text-danger fst-italic">*</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="image"
                            name="image"
                        />
                        <label>image</label>
                        <span className="text-danger fst-italic">*</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                        />
                        <label>Name</label>
                        <span className="text-danger fst-italic">*</span>
                    </div>
                </div>
                <div className="col-6">
                    <select name="type" className="form-select form-select-lg">
                        <option value={0}>Product Type</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                    </select>
                    <span className="text-danger fst-italic">*</span>
                </div>
                <div className="col-6">
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Price"
                            name="price"
                        />
                        <label htmlFor="floatingInput">Price</label>
                        <span className="text-danger fst-italic">*</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-floating">
                        <textarea
                            className="form-control"
                            placeholder="Description"
                            name="description"
                        ></textarea>
                        <label htmlFor="floatingInput">Description</label>
                        <span className="text-danger fst-italic">*</span>
                    </div>
                </div>
                <div className="col">
                    <button
                        type="submit"
                        className="btn btn-success "
                        style={{ width: "100%" }}
                    >
                        Submit
                    </button>
                </div>
            </form>
        );
    }
}

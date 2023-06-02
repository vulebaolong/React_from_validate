import React, { Component } from "react";

export default class FormValidate extends Component {
    state = {
        values: {
            id: "",
            image: "",
            name: "",
            type: "",
            price: "",
            description: "",
        },
        errors: {
            id: "",
            image: "",
            name: "",
            type: "",
            price: "",
            description: "",
        },
    };
    handleChangeValue = (e) => {
        const { name, value } = e.target;
        let error = "";

        // id
        if (name === "id") {
            const reg = /^\d+$/;
            if (!reg.test(value)) {
                error = `${name} phải là số`;
            }
            if (reg.test(value)) {
                error = ``;
            }
        }

        // imgae
        if (name === "image") {
            const urlRegex = /(https?:\/\/[^\s]+)/g;
            if (!urlRegex.test(value)) {
                error = `${name} phải đường dẫn`;
            }
            if (urlRegex.test(value)) {
                error = ``;
            }
        }

        // name
        if (name === "name") {
            const nameRegex =
                /[^a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u;

            if (nameRegex.test(value)) {
                error = `${name} phải là chữ`;
            }
            if (!nameRegex.test(value)) {
                error = ``;
            }
        }

        // type
        if (name === "type") {
            if (value === "0") {
                console.log("rỗng nè");
                error = `${name} không đcợc để trống`;
            }
        }

        // price
        if (name === "price") {
            const reg = /^\d+$/;
            if (!reg.test(value)) {
                error = `${name} phải là số`;
            }
            if (reg.test(value)) {
                error = ``;
            }
        }

        if (value.trim() === "") {
            error = `${name} không đcợc để trống`;
        }

        this.setState(
            {
                values: { ...this.state.values, [name]: value },
                errors: { ...this.state.errors, [name]: error },
            },
            () => {
                // console.log(this.state);
            }
        );
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { values, errors } = this.state;
        let isValid = true;
        for (const key in values) {
            if (values[key] === "" || errors[key] !== "") {
                isValid = false;
            }
        }
        if (!isValid) {
            return console.log("không cho submit");
        }
        console.log("submit");
    };
    render() {
        return (
            <form className="row row-gap-5" onSubmit={this.handleSubmit}>
                <div className="col-6">
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="id"
                            name="id"
                            onChange={this.handleChangeValue}
                        />
                        <label>id</label>
                        <span className="text-danger fst-italic">
                            *{this.state.errors.id}
                        </span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="image"
                            name="image"
                            onChange={this.handleChangeValue}
                        />
                        <label>image</label>
                        <span className="text-danger fst-italic">
                            *{this.state.errors.image}
                        </span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                            onChange={this.handleChangeValue}
                        />
                        <label>Name</label>
                        <span className="text-danger fst-italic">
                            *{this.state.errors.name}
                        </span>
                    </div>
                </div>
                <div className="col-6">
                    <select
                        name="type"
                        className="form-select form-select-lg"
                        onChange={this.handleChangeValue}
                    >
                        <option value={0}>Product Type</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                    </select>
                    <span className="text-danger fst-italic">
                        *{this.state.errors.type}
                    </span>
                </div>
                <div className="col-6">
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Price"
                            name="price"
                            onChange={this.handleChangeValue}
                        />
                        <label htmlFor="floatingInput">Price</label>
                        <span className="text-danger fst-italic">
                            *{this.state.errors.price}
                        </span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-floating">
                        <textarea
                            className="form-control"
                            placeholder="Description"
                            name="description"
                            onChange={this.handleChangeValue}
                        ></textarea>
                        <label htmlFor="floatingInput">Description</label>
                        <span className="text-danger fst-italic">
                            *{this.state.errors.description}
                        </span>
                    </div>
                </div>
                <div className="col">
                    <button
                        type="submit"
                        className="btn btn-success "
                        style={{ width: "100%" }}
                    >
                        submit
                    </button>
                </div>
            </form>
        );
    }
}

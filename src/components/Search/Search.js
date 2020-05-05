import React, {useState} from 'react';
import {InputGroup, Form} from "react-bootstrap";

function Search({onSearch,onSort}) {
    const [subredditName, setSubredditName] = useState("");

    const handleChangeSubreddit = e => {
        e.preventDefault()
        onSearch(e.target.value)
    }
    const handleChangeSort = e => {
        console.log(e.target.value);
        onSort(e.target.value)
    }
    return (
        <InputGroup>
            <InputGroup.Prepend >
                <InputGroup.Text>reddit/r/</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type='text' placeholder=' ex. FoodPorn/wallpapers/awww' onBlur={handleChangeSubreddit}/>
            <InputGroup.Append>
            <Form.Control onChange={handleChangeSort} as="select" >
                <option value='hot.json?'>hot</option>
                <option value='new.json?'>new</option>
                <option value='top.json?t=all&'>top</option>
            </Form.Control>
            </InputGroup.Append>
        </InputGroup>
    );
}

export default Search;
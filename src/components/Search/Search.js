import React, {useState} from 'react';
import {InputGroup, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {noDuplicates} from "./data";
import {Typeahead} from "react-bootstrap-typeahead";


import 'react-bootstrap-typeahead/css/Typeahead.css';


function Search({onSearch, onSort,}) {
    const [subredditName, setSubredditName] = useState("");
    const handleInputChange = e => {
        if (e instanceof Object) {
            setSubredditName(e)
        }
    }
    const handleChangeSubreddit = e => {
        e.preventDefault()
        if (typeof subredditName !== 'undefined') {
            onSearch(subredditName.toString().split(",").join("+"))
        }
    }

    const handleChangeSort = e => {
        onSort(e.target.value)
    }
    return (
        <>
            <InputGroup style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <InputGroup.Prepend>
                    <InputGroup.Text>reddit/r/</InputGroup.Text>
                </InputGroup.Prepend>

                <Typeahead
                    style={{
                        width: '35vw'
                    }}
                    multiple
                    allowNew
                    selectHintOnEnter
                    minLength={2}
                    labelKey='subredditNames'
                    id="subredditNames"
                    newSelectionPrefix="Or search:  "
                    options={noDuplicates}
                    placeholder="Search subreddit...  (for search from multiple subreddits "
                    onChange={handleInputChange}
                />
                <InputGroup.Append>
                    <Form.Control onChange={handleChangeSort} as="select">
                        <option value='hot.json?'>hot</option>
                        <option value='new.json?'>new</option>
                        <option value='top.json?t=all&'>top</option>
                    </Form.Control>
                    <Button variant="primary" onClick={handleChangeSubreddit}> GO! </Button>
                </InputGroup.Append>
            </InputGroup>
        </>
    );
}

export default Search;
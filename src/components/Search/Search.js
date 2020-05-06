import React, {useState} from 'react';
import {InputGroup, Form, ToggleButton, OverlayTrigger, Tooltip, Accordion, Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Search({onSearch, onSort, allowNSFW, statusNSFW}) {
    const [subredditName, setSubredditName] = useState("");

    const handleInputChange = e => {
        e.preventDefault()
        setSubredditName(e.target.value)
    }
    const handleChangeSubreddit = e => {
        e.preventDefault()
        if(subredditName.length > 3){
        onSearch(subredditName.split(" ").join("+"))
        }
    }

    const handleChangeSort = e => {
        onSort(e.target.value)
    }
    const nsfwLabel = statusNSFW ? "NSFW" : "SFW"
    return (
        <>
        <InputGroup style={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <InputGroup.Prepend>


                <InputGroup.Text>reddit/r/</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type='text'
                          aria-label='subreddit'
                          placeholder='For multiple subreddits seperate them with space (ex. aww all) '
                          onBlur={handleChangeSubreddit}
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
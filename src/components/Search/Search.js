import React, {useState} from 'react';
import {InputGroup, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {noDuplicates} from "./data";
import {Typeahead} from "react-bootstrap-typeahead";


import 'react-bootstrap-typeahead/css/Typeahead.css';


function Search({onSearch, onSort,}) {
    const [subredditName, setSubredditName] = useState("");
    const [tempArr, setTempArr] = useState([])

    const handleInputChange = e => {
        console.log(e);
     e.map( el => {
            if(el.subredditNames){
                setTempArr(prev => [...prev, el.subredditNames])
            } else {
                setTempArr( prev => [...prev, el])
            }
        })
    }
    const handleChangeSubreddit = e => {
        e.preventDefault()
        if (typeof subredditName !== 'undefined') {
            onSearch(tempArr.toString().split(",").join("+"))
            setTempArr([]);
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
                        <option value='top.json?t=day&'>top today</option>
                        <option value='top.json?t=week&'>top week</option>
                        <option value='top.json?t=month&'>top month</option>
                        <option value='top.json?t=year&'>top year</option>
                        <option value='top.json?t=all&'>top all</option>
                    </Form.Control>
                    <Button variant="primary" onClick={handleChangeSubreddit}> GO! </Button>
                </InputGroup.Append>
            </InputGroup>
        </>
    );
}

export default Search;
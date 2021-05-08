// Anton Otaner , 1930028
// Friday , May 7
// R. Vincent , instructor
// Final Project

//Packages
import styled from "styled-components";
import { useState, useContext } from "react";

//Components
import Text from "../UI/Text";
import Button from "../UI/Button";
import TextField from "../UI/TextField";
import Slider from "../UI/Slider";
import Checkbox from "../UI/Checkbox";

// Data context
import { Context } from "../Layout/Context/Context";

// Styling for container
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  padding: 40px 30px;
`;

// Styling for input block, containing a label and a form element (textfield, checkbox, group of radioboxes, ...)
const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
`;

// Styling for bottom of component (make this stick to the bottom of a flex display)
const Bottom = styled.div`
  margin-top: auto;
`;

//Server url
const url = "https://antono.pythonanywhere.com/getAnalysis";

function DataInputs() {
  //get data from context
  const data = useContext(Context);

  const [keyword, setKeyword] = useState(""); //search query keyword
  const [tweetAmount, setTweetAmount] = useState(12); //amount of tweets to analyse (default is 12)
  const [dataType, setDataType] = useState(0); // type of model to use
  const [showKeywordError, setShowKeywordError] = useState(false); //boolean that is true if user attemped to submit the form without a keyword
  const [isLoading, setIsLoading] = useState(false); //boolean that is true sending a request to the server and waiting for a response

  // function to verify form data and send request to server when form is submitted
  const getData = (event) => {
    event.preventDefault(); // do not reload the page

    // Show error if there is no keyword and do not send request to server
    if (!keyword) {
      setShowKeywordError(true);
      return;
    }

    setIsLoading(true); // Set loading to trye to show users that a request has been sent

    //Async function so that we can wait for a reponse without a .then()
    (async () => {
      //Send fetch request with the form data and with the headers saying we are sending json data
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: keyword,
          amount: tweetAmount,
          type: dataType,
        }),
      });

      let content = await response.json(); //get reponse as a json
      content["status"] = response.status; //get status of response and add it to content
      data.setTweets(content); // set tweets as the content

      setIsLoading(false); // set loading to false since we received a response
    })();
  };

  return (
    <Container>
      <Text type="title">Twitter Sentiment Analysis</Text>
      <form onSubmit={getData}>
        <InputBlock>
          <Text type="label" htmlFor="keyword" margin="0 0 10px 0">
            Keyword to analyze
          </Text>
          <TextField
            id="keyword"
            placeholder="Input a keyword to analyze (e.g. stocks, companies, ...)"
            value={keyword}
            onChange={(e) => {
              //Update keywords when textfield changes
              setKeyword(e.target.value);
              if (e.target.value) {
                //Remove error if there is now text
                setShowKeywordError(false);
              }
            }}
          />
          {showKeywordError && (
            <Text type="error" margin="5px 0 0">
              Please input a keyword
            </Text>
          )}
        </InputBlock>
        <InputBlock>
          <Text type="label" margin="0 0 10px 0">
            Amount of tweets to analyze
          </Text>
          <Slider
            min={5}
            max={50}
            value={tweetAmount}
            updateValue={setTweetAmount}
          />
        </InputBlock>
        <InputBlock>
          <Text type="label" htmlFor="dataType" margin="0 0 10px 0">
            Model used
          </Text>
          <Checkbox
            type="radio"
            name="dataType"
            label="VADER (Accuracy: Average, Time: Low)"
            onClick={() => setDataType(0)}
            //value
            checked={dataType === 0}
          />
          <Checkbox
            type="radio"
            name="dataType"
            label="BERT (Accuracy: Low, Time: Average)"
            onClick={() => setDataType(1)}
            checked={dataType === 1}
          />
          <Checkbox
            type="radio"
            name="dataType"
            label="roBERTa Twitter (Accuracy: High, Time: High)"
            onClick={() => setDataType(2)}
            checked={dataType === 2}
          />
        </InputBlock>
        <Bottom>
          {/* Change button text depending on if the button is loading or not. Also make it disabled if it loading */}
          <Button
            padding="8px 30px"
            margin="auto 0 auto auto"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading data" : "Analyze"}
          </Button>
          {/* Information text warning of long loading times */}
          <Text type="info">
            Loading data may take some time as the server may need a cold start.
            The machine learning algorithms are also not the fastest on a server
            without a GPU.
          </Text>
        </Bottom>
      </form>
    </Container>
  );
}

export default DataInputs;

//Packages
import styled from "styled-components";
import { useState, useContext } from "react";

//Components
import Text from "../UI/Text";
import Button from "../UI/Button";
import TextField from "../UI/TextField";
import Slider from "../UI/Slider";
import Checkbox from "../UI/Checkbox";

import { Context } from "../Layout/Context/Context";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  padding: 40px 30px;
`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
`;

const Bottom = styled.div`
  margin-top: auto;
`;

const url = "https://antono.pythonanywhere.com/getAnalysis";
//const url = "http://127.0.0.1:5000/getAnalysis";

function DataInputs() {
  const data = useContext(Context);

  const [keyword, setKeyword] = useState("");
  const [tweetAmount, setTweetAmount] = useState(12);
  const [dataType, setDataType] = useState(0);
  const [showKeywordError, setShowKeywordError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getData = (event) => {
    event.preventDefault();

    if (!keyword) {
      setShowKeywordError(true);
      return;
    }

    setIsLoading(true);

    (async () => {
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

      let content = await response.json();
      content["status"] = response.status;
      console.log(content);
      data.setTweets(content);

      setIsLoading(false);
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
              setKeyword(e.target.value);
              if (e.target.value) {
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
          <Button
            padding="8px 30px"
            margin="auto 0 auto auto"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading data" : "Analyze"}
          </Button>
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

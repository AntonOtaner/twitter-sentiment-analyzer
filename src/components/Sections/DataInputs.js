//Packages
import styled from "styled-components";
import { useState } from "react";

//Components
import Text from "../UI/Text";
import Button from "../UI/Button";
import TextField from "../UI/TextField";
import Slider from "../UI/Slider";

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
  margin-left: auto;
`;

function DataInputs() {
  const [keyword, setKeyword] = useState("");
  const [tweetAmount, setTweetAmount] = useState(100);
  const [positiveKeywords, setPositiveKeywords] = useState("");
  const [negativeKeywords, setNegativeKeywords] = useState("");

  return (
    <Container>
      <Text type="title">Twitter Sentiment Analysis</Text>
      <InputBlock>
        <Text type="label" htmlFor="keyword" margin="0 0 10px 0">
          Keyword to analyze
        </Text>
        <TextField
          id="keyword"
          placeholder="Input a keyword to analyze (e.g. stocks, companies, ...)"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </InputBlock>
      <InputBlock>
        <Text type="label" margin="0 0 10px 0">
          Amount of tweets to analyze
        </Text>
        <Slider
          min={50}
          max={200}
          value={tweetAmount}
          updateValue={setTweetAmount}
        />
      </InputBlock>
      <InputBlock>
        <Text type="label" htmlFor="positiveKeywords" margin="0 0 10px 0">
          Positive keywords
        </Text>
        <TextField
          id="positiveKeywords"
          placeholder="Input positive keywords (e.g buy, good, ...)"
          value={positiveKeywords}
          onChange={(e) => setPositiveKeywords(e.target.value)}
        />
      </InputBlock>
      <InputBlock>
        <Text type="label" htmlFor="negativeKeywords" margin="0 0 10px 0">
          Negative keywords
        </Text>
        <TextField
          id="negativeKeywords"
          placeholder="Input negative keywords (e.g sell, bad, ...)"
          value={negativeKeywords}
          onChange={(e) => setNegativeKeywords(e.target.value)}
        />
      </InputBlock>
      <Bottom>
        <Button padding="8px 30px">Analyze</Button>
      </Bottom>
    </Container>
  );
}

export default DataInputs;

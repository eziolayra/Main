import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function Quote() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  function getNewQuote() {
    if (quotes.length > 0) {
      setQuote(getRandomQuote(quotes));
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center",paddingVertical: 20 }}>
      <Text style={{ fontSize: 24 , fontWeight: '200'}}>Generate your Quote </Text>
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <Text style={{ fontSize: 18 }}>
          "{quote?.text}"
        </Text>
        <Text style={{ marginTop: 5 }}>- {quote?.author}</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Button title="New Quote" onPress={getNewQuote} />
      </View>
    </View>
  );
}

export default Quote;
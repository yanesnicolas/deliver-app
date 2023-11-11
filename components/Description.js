import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ReadMore from "react-native-read-more-text";

const Description = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const renderTruncatedFooter = (handlePress) => {
    return (
      <>
        <Text style={styles.footerText} onPress={handlePress}>
          Read more
        </Text>
      </>
    );
  };

  const renderRevealedFooter = (handlePress) => {
    return (
      <Text style={styles.footerText} onPress={handlePress}>
        Read less
      </Text>
    );
  };

  return (
    <View contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardBody}>
            <ReadMore
              numberOfLines={3}
              onReady={toggleExpand}
              onExpand={toggleExpand}
              renderTruncatedFooter={renderTruncatedFooter}
              renderRevealedFooter={renderRevealedFooter}
              maxHeight={200}
            >
              <Text style={styles.cardText}>{text}</Text>
            </ReadMore>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  
  },
  container: {
    flex: 1,
    justifyContent: "center",
    
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
    padding: 15,
    margin: 2,
  },
  cardText: {
    fontSize: 16,
    color: "#555555",
  },
  footerText: {
    color: "#2e2f72",
    marginTop: 5,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Description;

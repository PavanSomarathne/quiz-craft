import { router } from 'expo-router';
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const quizzes = [
  { id: '1', title: 'Quiz 01 - History', category: 'History' },
  { id: '2', title: 'Quiz 02 - General Knowledge', category: 'Science' },
  { id: '3', title: 'Quiz 03 - Basic Math', category: 'Math' },
  { id: '4', title: 'Quiz 04 - World Geography', category: 'Geography' },
];

const QuizListPage = () => {
  const renderQuizCard = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.quizInfoContainer}>
        <Text style={styles.quizNumber}>#{item.id}</Text>
        <View style={styles.quizDetails}>
          <Text style={styles.quizTitle}>{item.title}</Text>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{item.category}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Quizzes</Text>
      <FlatList
        data={quizzes}
        renderItem={renderQuizCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.fab} onPress={() => router.push("/addQuizPage")}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 36,
    marginHorizontal: 16,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  list: {
    paddingBottom: 80,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  quizInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quizNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6200ee',
    marginRight: 15,
  },
  quizDetails: {
    flex: 1,
  },
  quizTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  categoryBadge: {
    backgroundColor: '#e0e0e0',
    borderRadius: 12,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#6200ee',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  fabText: {
    color: '#fff',
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 'bold',
  },
});

export default QuizListPage;

import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';

const AddQuizPage = ({ navigation }) => {
  const [questions, setQuestions] = useState([
    { questionText: '', answers: ['', '', '', ''] },
  ]);

  const handleQuestionChange = (text, questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].questionText = text;
    setQuestions(updatedQuestions);
  };

  const handleAnswerChange = (text, questionIndex, answerIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answers[answerIndex] = text;
    setQuestions(updatedQuestions);
  };

  const addNewQuestion = () => {
    setQuestions([...questions, { questionText: '', answers: ['', '', '', ''] }]);
  };

  const removeQuestion = (index) => {
    const updatedQuestions = questions.filter((_, questionIndex) => questionIndex !== index);
    setQuestions(updatedQuestions);
  };

  const handleSaveQuiz = () => {
    // Validation: Ensure that "Answer 1" for each question is filled
    for (const question of questions) {
      if (!question.answers[0].trim()) {
        Alert.alert('Validation Error', 'Answer 1 is mandatory for each question.');
        return;
      }
    }
    console.log('Questions:', questions);
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.title}>Add New Quiz</Text>
            
            {questions.map((question, questionIndex) => (
              <View key={questionIndex} style={styles.questionContainer}>
                <View style={styles.questionHeader}>
                  <Text style={styles.questionLabel}>Question {questionIndex + 1}</Text>
                  {questions.length > 1 && (
                    <TouchableOpacity onPress={() => removeQuestion(questionIndex)} style={styles.removeButton}>
                      <Text style={styles.removeButtonText}>Remove</Text>
                    </TouchableOpacity>
                  )}
                </View>
                
                <TextInput
                  placeholder="Enter question"
                  value={question.questionText}
                  onChangeText={(text) => handleQuestionChange(text, questionIndex)}
                  style={styles.input}
                />

                {question.answers.map((answer, answerIndex) => (
                  <TextInput
                    key={answerIndex}
                    placeholder={`Answer ${answerIndex + 1}`}
                    value={answer}
                    onChangeText={(text) => handleAnswerChange(text, questionIndex, answerIndex)}
                    style={styles.input}
                  />
                ))}
              </View>
            ))}

            <TouchableOpacity style={styles.newQuestionButton} onPress={addNewQuestion}>
              <Text style={styles.newQuestionButtonText}>Add New Question</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveButton} onPress={handleSaveQuiz}>
              <Text style={styles.saveButtonText}>Save Quiz</Text>
            </TouchableOpacity>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  questionContainer: {
    marginBottom: 30,
  },
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  questionLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  removeButton: {
    backgroundColor: '#ff4d4d',
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  newQuestionButton: {
    backgroundColor: '#6200ee',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  newQuestionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveButton: {
    height: 50,
    backgroundColor: '#6200ee',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddQuizPage;

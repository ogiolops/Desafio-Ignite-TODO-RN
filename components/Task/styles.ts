import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#262626', 
    gap: 10,
    width: '100%',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 50,
    borderColor: '#4EA8DE',
    borderWidth: 3,
  },
  task: {
    flex: 1,
    color: '#F2F2F2',
    textAlign: 'justify',
  },
  image: {
    width: 32,
    height: 32,
  }
})
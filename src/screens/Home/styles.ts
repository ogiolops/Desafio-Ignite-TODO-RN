import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1A',
    flex: 1,
    paddingLeft: 24,
    paddingRight: 24,
  },
  inputForm: {
    flexDirection: 'row',
    gap: 4, 
    marginTop: -25,
    
  },
  input: {
    height: 54,
    backgroundColor: '#262626',
    borderRadius: 6,
    flex: 1,
    lineHeight: 24,
    padding: 16,
    fontSize: 16,
    color: '#F2F2F2',
  },
  buttonDefault: {
    backgroundColor: '#1E6F9F',
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  buttonActive: {
    backgroundColor: '#4EA8DE',
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  tasksContainer: {
    marginTop: 32,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  info: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createdText: {
    fontWeight: '700',
    fontSize: 14, 
    color: '#4EA8DE',
  },
  completedText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#8284FA',
  },
  counterRadius: {
    backgroundColor: '#333333',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,

  },
  counter: {
    color: '#FFFF',
    fontSize: 12,
  },


})
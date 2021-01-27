import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    margin: 15,
  },
  name: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  creatorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 150,
  },
  creator: {
    color: 'white',
    fontSize: 11,
    color: 'grey',
    textTransform: 'uppercase',
  },
  NumOfLikes: {
    color: 'white',
    fontSize: 11,
    color: 'grey',
    textTransform: 'uppercase',
  },
  button: {
    backgroundColor: '#1CD05D',
    marginTop: 10,
    height: 55,
    width: 160,
    borderRadius: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
export default styles;

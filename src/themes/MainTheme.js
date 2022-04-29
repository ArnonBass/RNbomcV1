import { StyleSheet } from 'react-native'

export const colors = {
  textDark: '#14478b',
  textLight: '#f8f9f8',
  forground: '#275ca5',
  forground2: '#f2b80e',
  forground3: '#dbeaf1',
  forground4: '#44a6a6',
  background: '#f27306',
  background2: '#d61503',
}

export default MainTheme = StyleSheet.create({
  header1: {
    fontSize: 25,
    fontWeight: '600',
    color: colors.forground4,
  },
  header2: {
    fontSize: 20,
    fontWeight: '500',
    fontStyle: 'italic',
    color: colors.forground2,
  },
  body: {
    fontSize: 16,
    color: colors.textDark,
  },
  card: {
    borderColor: colors.forground,
    borderWidth: 5,
    borderRadius: 10,
    padding: 20,
    width: '50%',
    height: 150,
  },
})
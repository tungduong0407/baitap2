import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
        {/* Ô 1 */}
        <View style={[styles.box, styles.box1]}>
          <Text style={styles.text}>1</Text>
        </View>

        {/* Ô 2 */}
        <View style={[styles.box, styles.box2]}>
          <Text style={styles.text}>2</Text>
        </View>

        {/* Hàng chứa Ô 3, Ô 4, Ô 5 nằm ngang */}
        <View style={styles.row}>
          <View style={[styles.boxSmall, styles.box3]}><Text style={styles.text}>3</Text></View>
          <View style={[styles.boxSmall, styles.box4]}><Text style={styles.text}>4</Text></View>
          <View style={[styles.boxSmall, styles.box5]}><Text style={styles.text}>5</Text></View>
        </View>

        {/* Ô 6 */}
        <View style={[styles.box, styles.box6]}>
          <Text style={styles.text}>6</Text>
        </View>
      </View>

      {/* Thông tin họ tên ở dưới */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Vũ Tùng Dương BIT242338</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    padding: 16,
  },
  cardContainer: {
    marginTop: 20,
  },
  box: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 4,
  },
  boxSmall: {
    flex: 1,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  text: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  box1: {
    backgroundColor: '#1E88E5', // Xanh dương
  },
  box2: {
    backgroundColor: '#E53935', // Đỏ
  },
  box3: {
    backgroundColor: '#FFB300', // Vàng
    marginRight: 6,
  },
  box4: {
    backgroundColor: '#2E7D32', // Xanh lá
    marginHorizontal: 3,
  },
  box5: {
    backgroundColor: '#7B1FA2', // Tím
    marginLeft: 6,
  },
  box6: {
    backgroundColor: '#F57C00', // Cam
    height: 100,
  },
  footer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});
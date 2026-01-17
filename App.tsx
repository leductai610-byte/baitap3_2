import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Đơn hàng giao thành công',
    description: 'Kiện hàng #12345 của bạn đã được giao đến địa chỉ nhà riêng. Vui lòng đánh giá dịch vụ.',
    time: '20/08/2020, 14:00',
    type: 'order', 
  },
  {
    id: '2',
    title: 'Khuyến mãi khủng 50%',
    description: 'Chỉ duy nhất hôm nay! Giảm giá toàn bộ thực đơn trà sữa. Đặt ngay kẻo lỡ!',
    time: '19/08/2020, 09:30',
    type: 'promo', 
  },
  {
    id: '3',
    title: 'Cập nhật hệ thống',
    description: 'Ứng dụng sẽ bảo trì từ 2h-4h sáng mai để nâng cấp tính năng mới.',
    time: '18/08/2020, 20:00',
    type: 'system', 
  },
  {
    id: '4',
    title: 'Cảnh báo bảo mật',
    description: 'Phát hiện đăng nhập lạ từ thiết bị mới. Hãy kiểm tra ngay nếu không phải là bạn.',
    time: '18/08/2020, 10:15',
    type: 'alert', 
  },
  {
    id: '5',
    title: 'Bạn có tin nhắn mới',
    description: 'Nguyễn Văn A vừa gửi cho bạn một tin nhắn thoại.',
    time: '18/08/2020, 08:00',
    type: 'msg', 
  },
];

const NotificationItem = ({ item }) => {
  const getIconColor = (type) => {
    switch (type) {
      case 'order': return '#4CAF50'; 
      case 'promo': return '#FF9800'; 
      case 'alert': return '#F44336'; 
      default: return '#2196F3';      
    }
  };

  const getIconLabel = (type) => {
     switch (type) {
      case 'order': return 'V'; 
      case 'promo': return '%'; 
      case 'alert': return '!'; 
      default: return 'i';      
    }
  };

  return (
    <View style={styles.itemContainer}>
      <View style={[styles.iconBox, { backgroundColor: getIconColor(item.type) }]}>
        <Text style={styles.iconText}>{getIconLabel(item.type)}</Text>
      </View>
      <View style={styles.contentBox}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* 1. GIỮ NGUYÊN STATUS BAR (Giờ, Pin...) nhưng nền trắng */}
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      {/* 2. ĐẨY CHỮ XUỐNG THẤP HƠN */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Thông báo</Text>
      </View>

      <FlatList
        data={DATA}
        renderItem={({ item }) => <NotificationItem item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    paddingVertical: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    alignItems: 'center',
    elevation: 2,
    // THAY ĐỔI Ở ĐÂY: Thêm marginTop để đẩy chữ xuống
    marginTop: 10, 
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  listContent: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row', 
    padding: 15,
    backgroundColor: 'white',
    marginTop: 2, 
    alignItems: 'flex-start', 
  },
  iconBox: {
    width: 45,
    height: 45,
    borderRadius: 25, 
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15, 
  },
  iconText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentBox: {
    flex: 1, 
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 6,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
});

export default App;
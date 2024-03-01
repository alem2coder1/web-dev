import {Category, Product} from './category.model';

export const electronics: Product[] = [
  { id: 1, name: 'Xiaomi Pad 6S Pro 12.4', price: 3299, imageUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1708599879.07746906.png', description: '第二代骁龙8 旗舰处理器 | 小米澎湃OS | 12.4" 3K 高清护眼屏 | 120W 小米澎湃秒充 | Wi-Fi 7 高速连接 | 视频会议工具箱 | 支持触控笔、触控键盘\n' +
      '\n', link: 'https://www.mi.com/shop/buy/detail?product_id=19655' },
  // 其他产品...
];

// 2. 创建 Clothing 类别下的产品
export const electronicsProducts: Product[] = [
  { id: 6, name: 'Xiaomi 14 Ultra', price: 69999, imageUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1708570847.01997341.png', description: '至高24期免息，以旧换新至高补贴610元，图文晒单赢50元商城红包」徕卡光学 Summilux 镜头，第三代骁龙®8移动平台\n' +
      '\n', link: 'https://www.mi.com/shop/buy/detail?product_id=19683' },
  // 其他产品...
];

export const clothingProducts: Category[] = [
  { "id": 1, 'name': 'Electronics' },
  { "id": 2, name: 'Clothing' },
  // 其他类别...
];

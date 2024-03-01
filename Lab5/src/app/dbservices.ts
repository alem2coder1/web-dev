import { Injectable } from '@angular/core';
import {Category} from "./category.model";

@Injectable({
  providedIn: 'root'
})
export class DBService {
  categories: Category[] = [
    {
      "id": 1,
      "name": "智能电器",
      "products": [
        {
          "id": 101,
          "name": "智能手机",
          "likes" : 121,
          "imgurl" : "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1708570847.01997341.png"
        },
        {
          "id": 102,
          "name": "蓝牙耳机",
          "likes" : 23,
          "imgurl":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1698307414.07034827.png"
        },
        {
          "id": 103,
          "name": "耳机",
          "likes" : 45,
          "imgurl":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1701099464.46559417.png"
        },
        {
          "id": 104,
          "name": "笔记本",
          "likes" : 12,
          "imgurl":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/1AAD0A433C2C1F244B21962B1D289356.png"
        },
        {
          "id": 105,
          "name": "平板电脑",
          "likes" : 76,
          "imgurl":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1695106679.59773321.png"
        }
      ]
    },
    {
      "id": 2,
      "name": "家具",
      "products": [
        {
          "id": 201,
          "name": "座椅",
          "likes" : 452,
          "imgurl":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1635754242.9735198.jpg"
        },
        {
          "id": 202,
          "name": "桌子",
          "likes" : 128,
          "imgurl":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/2B58A1983BFCB603B1BC2DBA0C378946.png"
        },
        {
          "id": 203,
          "name": "沙发",
          "likes" : 2345,
          "imgurl":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1631190097.54683560.png"
        },
        {
          "id": 204,
          "name": "床",
          "likes" : 35,
          "imgurl":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1720645c25ed8ff9fe78b8d5b530a8f.jpg"
        },
        {
          "id": 205,
          "name": "电暖器",
          "likes" : 87,
          "imgurl":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/047ABA957B9ABE249577DF952F515271.png"
        }
      ]
    }
  ]

  removeProduct(productId: number) {
    this.categories.forEach(category => {
      const index = category.products.findIndex(product => product.id === productId);
      if (index !== -1) {
        category.products.splice(index, 1);
      }
    });
  }


  likeProduct(productId: number){
    this.categories.forEach( category =>{
      category.products.forEach(product => {
        if(product.id === productId) product.likes++;
      })
    })
  }
}


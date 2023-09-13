<template>
  <el-card class="box-card">
    <!-- 按钮 -->
    <el-button type="primary" icon="plus">添加品牌</el-button>
    <!-- 表格组件，用于展示品牌数据 -->
    <el-table style="margin:10px 0;" border :data="trademarkArr">
      <el-table-column label="序号" width="80px" align="center" type="index"></el-table-column>
      <!-- table-column：默认展示数据用的是div，也可以用插槽给它传结构 -->
      <!-- <el-table-column label="品牌名称" align="center" prop="tmName"> -->
      <el-table-column label="品牌名称" align="center">
        <template #="{row,$index}">
          <pre>{{ row.tmName }}</pre>
        </template>
      </el-table-column>
      <el-table-column label="品牌logo" align="center">
        <template #="{row}">
          <img :src="row.logoUrl" alt="图片加载失败！" style="width:60px; height: 60px;">
        </template>
      </el-table-column>
      <el-table-column label="品牌操作" align="center">
        <template #="{row}">
          <el-button type="warning" size="small" icon="edit"></el-button>
          <el-button type="danger" size="small" icon="delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器组件 -->
    <el-pagination v-model:current-page="pageNo" v-model:page-size="limit" :page-sizes="[3, 5, 7, 9]" :background="true"
      layout="prev, pager, next, jumper,->,sizes,total" :total="total" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
  </el-card>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import {reqHasTrademark} from "@/api/product/trademark";
import type {Records,TradeMarkResponseData} from '@/api/product/trademark/type';
// 当前页码
let pageNo = ref<number>(1);
// 每一页展示数据条数
let limit = ref<number>(3);
// 数据总数
let total = ref<number>(0);
// 已有品牌数据
let trademarkArr = ref<Records>([]);
// 获取已有品牌的方法
const getHasTrademark = async () => {
  let result:TradeMarkResponseData = await reqHasTrademark(pageNo.value,limit.value);
  // console.log(result);
  if(result.code == 200){
    // 存储数据总数
    total.value = result.data.total;
    trademarkArr.value = result.data.records;
  }
}
// 组件挂载完毕，即发送请求
onMounted(() => {
  getHasTrademark()
});

</script>
<script lang="ts">
  export default {
    name:"Trademark"
  }
</script>
<style scoped></style>
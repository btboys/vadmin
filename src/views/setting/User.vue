<template>
  <div class="h-panel">
    <div class="menu-bar">
      <div class="page-title">用 户</div>
      <div>
        <span><i class="vxe-icon--plus"></i> 新建</span>
      </div>
    </div>
    <vxe-table
        highlight-current-row
        highlight-hover-row
        :data="tableData">
      <vxe-table-column type="seq" width="40" align="center"></vxe-table-column>
      <vxe-table-column type="checkbox" width="40"  align="center"></vxe-table-column>
      <vxe-table-column field="name" title="Name"></vxe-table-column>
      <vxe-table-column field="age" title="Age" sortable></vxe-table-column>
      <vxe-table-column field="sex" title="Sex"
                        :filters="[{value:'0',label:'女'},{value:'1',label:'男'}]"></vxe-table-column>
      <vxe-table-column field="sex2" title="Sex2" sortable :filters="[{value:'0',label:'女'},{value:'1',label:'男'}]"
                        :filter-multiple="false"></vxe-table-column>
      <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>
    </vxe-table>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      tableData: [
        {id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃'},
        {id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou'},
        {id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai'},
        {id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 23, address: 'vxe-table 从入门到放弃'},
        {id: 10005, name: 'Test5', role: 'Develop', sex: 'Women ', age: 30, address: 'Shanghai'},
        {id: 10006, name: 'Test6', role: 'Designer', sex: 'Women ', age: 21, address: 'vxe-table 从入门到放弃'},
        {id: 10007, name: 'Test7', role: 'Test', sex: 'Man ', age: 29, address: 'vxe-table 从入门到放弃'},
        {id: 10008, name: 'Test8', role: 'Develop', sex: 'Man ', age: 35, address: 'vxe-table 从入门到放弃'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
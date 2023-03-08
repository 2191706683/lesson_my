<template>
  <tr>
      <td>
          <img :src="member.avatar_url" style="width:100px"/>
      </td>
      <td>
          {{member.id}}
      </td>
      <td>
          {{member.login}}
      </td>
  </tr>
</template>

<script lang="ts" setup>
import { MemberEntity } from './model/MemberEntity'
interface Props{
  member:MemberEntity
}
const props = defineProps<Props>()


</script>

<style scoped>

</style>
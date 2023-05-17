<template>
    <div>
        <button @click="doSomething">按钮</button>
    </div>
</template>
<script setup>
import emitter from './eventBus';
const doSomething = () => {
    console.log('////')
    emitter.emit('eventName');
}
</script>